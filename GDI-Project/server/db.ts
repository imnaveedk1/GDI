import pg from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from "@shared/schema";

const { Pool } = pg;

// Use the environment variable DATABASE_URL or fallback to the Render PostgreSQL URL
const databaseUrl = process.env.DATABASE_URL || 
  "postgresql://gdi_7mbl_user:lT1mmco4SIWbduRm6Z6MaWcVAWcFzuxt@dpg-cvv0tube5dus73e4o6p0-a/gdi_7mbl";

// Create a PostgreSQL pool with SSL configuration for Render
export const pool = new Pool({ 
  connectionString: databaseUrl,
  ssl: process.env.NODE_ENV === 'production' ? {
    rejectUnauthorized: false // Required for Render PostgreSQL
  } : undefined
});

// Create drizzle instance
export const db = drizzle(pool, { schema });
