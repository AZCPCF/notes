import path from "path";
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";

const dbPath = path.resolve(process.cwd(), process.env.DATABASE_URL!);
const sqlite = new Database(dbPath);
export const db = drizzle(sqlite, { schema });
