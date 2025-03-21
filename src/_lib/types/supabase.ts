export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      organization_members: {
        Row: {
          created_at: string;
          id: string;
          organization_id: string;
          profile_id: string;
          role: Database["public"]["Enums"]["user_role"];
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          organization_id: string;
          profile_id?: string;
          role?: Database["public"]["Enums"]["user_role"];
          user_id?: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          organization_id?: string;
          profile_id?: string;
          role?: Database["public"]["Enums"]["user_role"];
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "organization_members_organization_id_fkey";
            columns: ["organization_id"];
            isOneToOne: false;
            referencedRelation: "organizations";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "organization_members_profile_id_fkey";
            columns: ["profile_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
      organizations: {
        Row: {
          billing_email: string;
          created_at: string;
          customer_id: string | null;
          email: string;
          id: string;
          name: string;
          type: Database["public"]["Enums"]["organization_type"];
        };
        Insert: {
          billing_email: string;
          created_at?: string;
          customer_id?: string | null;
          email: string;
          id?: string;
          name: string;
          type?: Database["public"]["Enums"]["organization_type"];
        };
        Update: {
          billing_email?: string;
          created_at?: string;
          customer_id?: string | null;
          email?: string;
          id?: string;
          name?: string;
          type?: Database["public"]["Enums"]["organization_type"];
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          created_at: string;
          email: string;
          first_name: string | null;
          id: string;
          last_name: string | null;
        };
        Insert: {
          created_at?: string;
          email: string;
          first_name?: string | null;
          id?: string;
          last_name?: string | null;
        };
        Update: {
          created_at?: string;
          email?: string;
          first_name?: string | null;
          id?: string;
          last_name?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      count_org_members: {
        Args: {
          org_id: string;
        };
        Returns: number;
      };
      get_invoices: {
        Args: Record<PropertyKey, never>;
        Returns: unknown;
      };
      get_manufacturer_pricing_plans: {
        Args: Record<PropertyKey, never>;
        Returns: Array<Database["stripe"]["Tables"]["products"]["Row"]>;
      };
      get_shop_pricing_plans: {
        Args: Record<PropertyKey, never>;
        Returns: Array<Database["stripe"]["Tables"]["products"]["Row"]>;
      };
      get_subscription: {
        Args: Record<PropertyKey, never>;
        Returns: Database["stripe"]["Tables"]["subscriptions"]["Row"];
      };
      is_org_member: {
        Args: {
          org_id: string;
        };
        Returns: boolean;
      };
      user_is_admin_or_owner: {
        Args: {
          org_id: string;
        };
        Returns: boolean;
      };
    };
    Enums: {
      organization_type: "manufacturer" | "shop";
      user_role: "owner" | "admin" | "user";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  stripe: {
    Tables: {
      customers: {
        Row: {
          attrs: Json | null;
          created: string | null;
          description: string | null;
          email: string | null;
          id: string | null;
          name: string | null;
        };
        Insert: {
          attrs?: Json | null;
          created?: string | null;
          description?: string | null;
          email?: string | null;
          id?: string | null;
          name?: string | null;
        };
        Update: {
          attrs?: Json | null;
          created?: string | null;
          description?: string | null;
          email?: string | null;
          id?: string | null;
          name?: string | null;
        };
        Relationships: [];
      };
      invoices: {
        Row: {
          attrs: Json | null;
          currency: string | null;
          customer: string | null;
          id: string | null;
          period_end: string | null;
          period_start: string | null;
          status: string | null;
          subscription: string | null;
          total: number | null;
        };
        Insert: {
          attrs?: Json | null;
          currency?: string | null;
          customer?: string | null;
          id?: string | null;
          period_end?: string | null;
          period_start?: string | null;
          status?: string | null;
          subscription?: string | null;
          total?: number | null;
        };
        Update: {
          attrs?: Json | null;
          currency?: string | null;
          customer?: string | null;
          id?: string | null;
          period_end?: string | null;
          period_start?: string | null;
          status?: string | null;
          subscription?: string | null;
          total?: number | null;
        };
        Relationships: [];
      };
      products: {
        Row: {
          active: boolean | null;
          attrs: Json | null;
          created: string | null;
          default_price: string | null;
          description: string | null;
          id: string | null;
          name: string | null;
          updated: string | null;
        };
        Insert: {
          active?: boolean | null;
          attrs?: Json | null;
          created?: string | null;
          default_price?: string | null;
          description?: string | null;
          id?: string | null;
          name?: string | null;
          updated?: string | null;
        };
        Update: {
          active?: boolean | null;
          attrs?: Json | null;
          created?: string | null;
          default_price?: string | null;
          description?: string | null;
          id?: string | null;
          name?: string | null;
          updated?: string | null;
        };
        Relationships: [];
      };
      subscriptions: {
        Row: {
          attrs: Json | null;
          currency: string | null;
          current_period_end: string | null;
          current_period_start: string | null;
          customer: string | null;
          id: string | null;
        };
        Insert: {
          attrs?: Json | null;
          currency?: string | null;
          current_period_end?: string | null;
          current_period_start?: string | null;
          customer?: string | null;
          id?: string | null;
        };
        Update: {
          attrs?: Json | null;
          currency?: string | null;
          current_period_end?: string | null;
          current_period_start?: string | null;
          customer?: string | null;
          id?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;
