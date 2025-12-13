import { SQL } from "bun";
import { drizzle } from "drizzle-orm/bun-sql";

const connectionString = process.env.DATABASE_URL;

const client = new SQL(connectionString, { prepare: false });
export const db = drizzle({ client });

export type DB = typeof db;
