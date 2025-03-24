import { createClient } from '@supabase/supabase-js';

// Cria o cliente Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;

// ATENÇÃO: Usar a SERVICE_ROLE_KEY é apenas uma solução temporária para desenvolvimento
// Em produção, você deve usar a ANON_KEY e configurar corretamente as políticas RLS
// Para desenvolvimento/teste, substitua a variável abaixo pela sua SERVICE_ROLE_KEY
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey); 