import { createClient } from "@supabase/supabase-js";

// Supabase link said use env vars by e.g. process.env.OPENAI_API_KEY;
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;


const supabase = createClient(supabaseUrl, supabaseKey);
//Variable supabase holds client instance returned by createClient function

export default supabase;