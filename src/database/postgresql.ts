import pkg from "pg";
const { Pool } = pkg;
import "dotenv"

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
