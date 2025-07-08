import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
    throw new Error('No DATABASE_URL set');
}

export default defineConfig({
  out: './drizzle',
  schema: './lib/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
