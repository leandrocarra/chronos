import { createClient } from '@supabase/supabase-js';
import { type Database } from '@/types/database.types';

// Cria o cliente Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;

// Em ambiente de produção, use apenas a chave anônima
// A SERVICE_ROLE_KEY só deve ser usada no servidor e nunca exposta no cliente
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// Cria o cliente com a chave anônima para uso no browser
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    storageKey: 'chronos-auth',
    autoRefreshToken: true,
  },
}); 