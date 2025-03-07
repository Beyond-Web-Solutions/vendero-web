create function public.get_shop_pricing_plans() RETURNS setof stripe.products
    LANGUAGE sql
    security definer
    set search_path = '' as
$$
select *
from stripe.products
where attrs -> 'metadata' ->> 'type' = 'shop'
  and active = true;
$$;

create function public.get_manufacturer_pricing_plans() RETURNS setof stripe.products
    LANGUAGE sql
    security definer
    set search_path = '' as
$$
select *
from stripe.products
where attrs -> 'metadata' ->> 'type' = 'manufacturer'
  and active = true;
$$;

create or replace function public.get_subscription() RETURNS stripe.subscriptions
    LANGUAGE plpgsql
    security definer
    set
        search_path = '' as
$$
DECLARE
    member_id  uuid;
    org_id  uuid;
    cust_id text;
    sub     stripe.subscriptions%rowtype;
BEGIN
    -- Retrieve the organization ID from the JWT's user_metadata and cast to uuid
    SELECT (auth.jwt() -> 'user_metadata' ->> 'organization_member_id')::uuid
    INTO member_id;

    -- Get the organization_id from the organizations_members table
    SELECT organization_id
    INTO org_id
    FROM public.organization_members
    WHERE id = member_id;

    -- Get the corresponding customer_id from the organizations table
    SELECT customer_id
    INTO cust_id
    FROM public.organizations
    WHERE id = org_id;

    -- Get the subscription associated with the customer_id
    SELECT s.*
    INTO sub
    FROM stripe.subscriptions s
    WHERE s.customer = cust_id
    LIMIT 1;

    RETURN sub;
END;
$$;