import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://owgcozntuhzswklqcopr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Z2Nvem50dWh6c3drbHFjb3ByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExODUyNTYsImV4cCI6MjA0Njc2MTI1Nn0._deHgHdlLsXvuFS622uFKPJHpNbZH84-fNdtNJiII1k';

export const supabase = createClient(supabaseUrl, supabaseKey);

console.log(supabase);

