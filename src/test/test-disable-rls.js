require('dotenv').config({ path: '../../.env' });
const { createClient } = require('@supabase/supabase-js');

async function testSupabaseWithoutRLS() {
  console.log('Preparando para testar o Supabase com RLS desativado...');
  console.log('1. Acesse o painel do Supabase');
  console.log('2. Vá para a tabela "studies"');
  console.log('3. Clique em "Disable RLS" (botão que você mostrou na captura de tela)');
  console.log('4. Pressione ENTER para continuar quando o RLS estiver desativado...');
  
  // Espera o usuário pressionar ENTER
  await new Promise(resolve => {
    process.stdin.once('data', () => {
      resolve();
    });
  });
  
  // Cria o cliente Supabase
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  console.log(`URL: ${supabaseUrl}`);
  console.log(`Key: ${supabaseAnonKey.substring(0, 10)}...`);
  
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  try {
    // Tenta obter todos os estudos
    console.log('Buscando estudos sem RLS...');
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
    console.log('\nCriando um novo estudo sem RLS...');
    const { data: newStudy, error: createError } = await supabase
      .from('studies')
      .insert([
        { 
          subject: 'Teste sem RLS', 
          user_id: '83e5accb-00ea-4f44-a0d3-f45e2a2ed543',
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
    
    console.log('\nTeste concluído. Não se esqueça de reativar o RLS para segurança!');
    
    return true;
  } catch (error) {
    console.error('Erro inesperado:', error);
    return false;
  }
}

// Executa o teste
testSupabaseWithoutRLS()
  .then(success => {
    if (success) {
      console.log('\n✅ Teste sem RLS concluído com sucesso!');
    } else {
      console.log('\n❌ Teste sem RLS falhou!');
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('\n❌ Erro inesperado durante o teste:', error);
    process.exit(1);
  }); 