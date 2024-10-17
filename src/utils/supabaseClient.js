import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://obunsfaagyududcyoikc.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9idW5zZmFhZ3l1ZHVkY3lvaWtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0NjM0NzgsImV4cCI6MjA0MjAzOTQ3OH0.i6gBQASRm9ynHv7tYk7V0spycxR7dRwwaJaWgsk6INA";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
