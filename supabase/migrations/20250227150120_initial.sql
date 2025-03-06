-- ENUMS
create type public.user_role as enum ('owner', 'admin', 'user');
create type public.organization_type as enum ('manufacturer', 'shop');

-- TABLES
create table public.profiles
(
    id         uuid                     not null default auth.uid(),
    email      text                     not null,
    first_name text                     null,
    last_name  text                     null,
    created_at timestamp with time zone not null default now(),

    constraint profile_pkey primary key (id),
    constraint profile_id_fkey foreign key (id) references auth.users (id) on delete cascade
);

create table public.organizations
(
    id            uuid                     not null default gen_random_uuid(),
    name          text                     not null,
    email         text                     not null,
    billing_email text                     not null,
    customer_id   text,
    type          public.organization_type not null default 'shop'::organization_type,
    created_at    timestamp with time zone not null default now(),

    constraint organizations_pkey primary key (id)
);

create table
    public.organization_members
(
    id              uuid                     not null default gen_random_uuid(),
    organization_id uuid                     not null,
    user_id         uuid                     not null default auth.uid(),
    profile_id      uuid                     not null default auth.uid(),
    role            public.user_role         not null default 'owner'::user_role,
    created_at      timestamp with time zone not null default now(),

    constraint organization_members_pkey primary key (id),
    constraint organization_members_organization_id_fkey foreign key (organization_id) references organizations (id) on delete cascade,
    constraint organization_members_user_id_fkey foreign key (user_id) references auth.users (id) on delete cascade,
    constraint organization_members_profile_id_fkey foreign key (profile_id) references profiles (id) on delete cascade
);

-- FUNCTIONS
create function public.insert_profile()
    returns trigger
    language plpgsql
    security definer set search_path = ''
as
$$
begin
    insert into public.profiles (id, email, first_name, last_name)
    values (new.id, new.email, new.raw_user_meta_data ->> 'first_name', new.raw_user_meta_data ->> 'last_name');
    return new;
end;
$$;

create function public.create_stripe_customer()
    returns trigger
    language plpgsql
    security definer set search_path = ''
as
$$
DECLARE
    new_customer_id TEXT;
begin
    -- Insert into stripe.customers table
    INSERT INTO stripe.customers(email, name)
    VALUES (new.billing_email, new.name);

-- Get the id of the newly inserted stripe customer
    SELECT id
    INTO new_customer_id
    FROM stripe.customers
    WHERE email = new.billing_email
    ORDER BY created DESC
    LIMIT 1;

-- Update the organizations table with the correct customer_id
    UPDATE public.organizations
    SET customer_id = new_customer_id -- Use the variable here
    WHERE id = new.id;

    return new;
end;
$$;

CREATE FUNCTION public.count_org_members(org_id uuid) RETURNS int
    LANGUAGE plpgsql
    security definer set search_path = ''
AS
$$
DECLARE
    cnt int;
BEGIN
    EXECUTE 'SELECT count(*) FROM public.organization_members WHERE organization_id = $1'
        INTO cnt
        USING org_id;
    RETURN cnt;
END;
$$;

CREATE FUNCTION public.user_is_admin_or_owner(org_id uuid) RETURNS boolean
    LANGUAGE plpgsql
    security definer set search_path = ''
AS
$$
DECLARE
    is_authorized boolean;
BEGIN
    SELECT EXISTS (SELECT 1
                   FROM public.organization_members
                   WHERE organization_id = org_id
                     AND user_id = (select auth.uid())
                     AND role IN ('owner', 'admin'))
    INTO is_authorized;
    RETURN is_authorized;
END;
$$;

CREATE FUNCTION public.is_org_member(org_id uuid) RETURNS boolean
    LANGUAGE plpgsql
    security definer set search_path = ''
AS
$$
DECLARE
    is_member boolean;
BEGIN
    SELECT EXISTS (SELECT 1
                   FROM public.organization_members
                   WHERE organization_id = org_id
                     AND user_id = (select auth.uid()))
    INTO is_member;
    RETURN is_member;
END;
$$;

CREATE FUNCTION public.get_shop_pricing_plans() RETURNS setof stripe.products
    LANGUAGE plpgsql
    security definer set search_path = ''
AS
$$
BEGIN
    select * from stripe.products where attrs -> 'metadata' ->> 'type' = 'shop';
END;
$$;

-- TRIGGERS
create trigger on_create_user
    after insert
    on auth.users
    for each row
execute procedure public.insert_profile();

create trigger on_create_organization
    after insert
    on public.organizations
    for each row
execute procedure public.create_stripe_customer();

-- RLS
alter table public.profiles
    enable row level security;
alter table public.organizations
    enable row level security;
alter table public.organization_members
    enable row level security;

-- POLICIES
create policy "Enable read access for all users"
    on "public"."profiles"
    as PERMISSIVE
    for SELECT
    to public
    using (
    true
    );

create policy "Enable update for users based on user_id"
    on "public"."profiles"
    as PERMISSIVE
    for UPDATE
    to authenticated
    using (
        (select auth.uid()) = id
    ) with check (
        (select auth.uid()) = id
    );

create policy "Enable delete for users based on user_id"
    on "public"."profiles"
    as PERMISSIVE
    for DELETE
    to authenticated
    using (
        (select auth.uid()) = id
    );

create policy "Enable insert when no members exist"
    on public.organization_members
    as permissive
    for insert
    to authenticated
    with check (
    public.count_org_members(organization_members.organization_id) = 0
    );

create policy "Enable insert for admins and owners"
    on public.organization_members
    as permissive
    for insert
    to authenticated
    with check (
    public.count_org_members(organization_members.organization_id) > 0 AND
    public.user_is_admin_or_owner(organization_members.organization_id)
    );

create policy "Enable select for organization members"
    on "public"."organization_members"
    as PERMISSIVE
    for SELECT
    to authenticated
    using (
    public.is_org_member(organization_id)
    );

create policy "Enable insert for authenticated users only"
    on "public"."organizations"
    as PERMISSIVE
    for INSERT
    to authenticated
    with check (
    true
    );

create policy "Enable select for authenticated users"
    on "public"."organizations"
    as PERMISSIVE
    for SELECT
    to authenticated
    using (
    true
    );
