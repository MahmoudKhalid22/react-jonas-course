import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ouwxphwhkmptuhetqxul.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91d3hwaHdoa21wdHVoZXRxeHVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNzEzNjAsImV4cCI6MjAzMDc0NzM2MH0.JlCnXaKuNEMmkcQdSqef3uQPQBRoxI-c4EGVXQwOkCI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
