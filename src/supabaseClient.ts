// supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

// Get the Supabase URL and key from the environment variables
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL as string
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY as string

export const supabase = createClient(supabaseUrl, supabaseKey)
