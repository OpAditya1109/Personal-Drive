const { createClient } = require("@supabase/supabase-js");

// Path to your service configuration file (replace with your actual credentials)
const supabaseUrl = "https://puibokhactpdrbwmgbpg.supabase.co"; // Your Supabase project URL
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1aWJva2hhY3RwZHJid21nYnBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUxMzQ2MjQsImV4cCI6MjA1MDcxMDYyNH0.jLTiGuQ8VmtoYC6AJNlZYHWmqIefEufrRXC4am-gJsI"; // Your public API key (anon/public key)

const supabase = createClient(supabaseUrl, supabaseKey);

// Export the initialized client to use it elsewhere in your app
module.exports = supabase;
