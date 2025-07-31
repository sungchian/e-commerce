// src/supabase.ts
import { createClient } from '@supabase/supabase-js';

//TODO
const supabaseUrl = 'https://aqikadphxlxzzrfyonpw.supabase.co'; // 例如：https://abcde12345.supabase.co
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxaWthZHBoeGx4enpyZnlvbnB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4MTA5NjUsImV4cCI6MjA2OTM4Njk2NX0.4wRAHeDkvmn7m2x-OrLTs0DKei-3q8HAuj3InrT4T5Q'; // 從 Supabase Dashboard -> Project Settings -> API 中獲取

export const supabase = createClient(supabaseUrl, supabaseAnonKey);