import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://iaqrbclvxokopyeugxmf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhcXJiY2x2eG9rb3B5ZXVneG1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0NDMxNjUsImV4cCI6MjAyMzAxOTE2NX0.ki-0qqRjR9hn13_ppL8YLfCfmTvSEE3B_59iwLDpo8k'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
// import.meta.env