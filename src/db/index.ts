import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "@/db/schema";

// Supabase Postgres connection
const sql = postgres(process.env.DATABASE_POSTGRES_URL || "", {
  ssl: { rejectUnauthorized: false }, // Supabase requires SSL
});

export const db = drizzle(sql, { schema });
