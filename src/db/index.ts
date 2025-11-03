import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";

const sql = postgres(
  process.env.DATABASE_URL ||
    "postgres://notes_user:notes_pass@localhost:5432/notes_db"
);

export const db = drizzle(sql, { schema });
