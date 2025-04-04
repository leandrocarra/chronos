import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

async function testSupabase() {
  console.log('Testando conexão com o Supabase...');
  
  // Cria o cliente Supabase
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  console.log(`URL: ${supabaseUrl}`);
  console.log(`Key: ${supabaseAnonKey?.substring(0, 10)}...`);
  
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  try {
    // Tenta obter todos os estudos
    console.log('Buscando estudos...');
    const { data, error } = await supabase
      .from('studies')
      .select('*')
      .order('updated_at', { ascending: false });
    
    if (error) {
      console.error('Erro ao buscar estudos:', error);
      return false;
    }
    
    console.log('Estudos encontrados:', data.length);
    console.log(data);
    
    // Tenta criar um novo estudo
    console.log('\nCriando um novo estudo...');
    const { data: newStudy, error: createError } = await supabase
      .from('studies')
      .insert([
        { 
          subject: 'Teste via SDK', 
          user_id: '83e5accb-00ea-4f44-a0d3-f45e2a2ed54c',
          is_active: false,
          is_paused: true,
          seconds: 0
        }
      ])
      .select()
      .single();
    
    if (createError) {
      console.error('Erro ao criar estudo:', createError);
      return false;
    }
    
    console.log('Novo estudo criado:', newStudy);
    
    return true;
  } catch (error) {
    console.error('Erro inesperado:', error);
    return false;
  }
}

// Executa o teste
testSupabase()
  .then(success => {
    if (success) {
      console.log('\n✅ Teste Supabase concluído com sucesso!');
    } else {
      console.log('\n❌ Teste Supabase falhou!');
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('\n❌ Erro inesperado durante o teste:', error);
    process.exit(1);
  }); 