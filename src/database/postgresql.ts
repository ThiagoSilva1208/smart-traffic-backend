import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  connectionString: "postgresql://postgres:sMARTtRAFFICdATABASE@2023@db.nzpfzwjizvzfizpepvwf.supabase.co:5432/postgres",
  ssl: {
    rejectUnauthorized: false
  }
});
