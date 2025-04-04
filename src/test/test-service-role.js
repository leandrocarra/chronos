import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

async function testServiceRole() {
  console.log('Testando conexão com o Supabase usando Service Role Key...');
  
  // Cria o cliente Supabase com a chave de serviço
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY;
  
  console.log(`URL: ${supabaseUrl}`);
  console.log(`Service Key: ${supabaseServiceKey?.substring(0, 10)}...`);
  
  if (!supabaseServiceKey) {
    console.error('❌ Erro: NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY não está definida!');
    return false;
  }
  
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  try {
    // Tenta obter todos os estudos
    console.log('Buscando estudos com chave de serviço...');
    const { data, error } = await supabase
      .from('studies')
      .select('*')
      .order('updated_at', { ascending: false });
    
    if (error) {
      console.error('Erro ao buscar estudos com chave de serviço:', error);
      return false;
    }
    
    console.log('Estudos encontrados:', data.length);
    
    // Tenta buscar todos os usuários
    console.log('\nBuscando usuários...');
    const { data: users, error: usersError } = await supabase
      .from('users')
      .select('*');
    
    if (usersError) {
      console.error('Erro ao buscar usuários:', usersError);
      return false;
    }
    
    console.log('Usuários encontrados:', users.length);
    console.log('Exemplo de usuário:', users[0]);
    
    // Tenta criar um novo estudo
    console.log('\nCriando um novo estudo...');
    const userId = users.length > 0 ? users[0].id : '83e5accb-00ea-4f44-a0d3-f45e2a2ed54c';
    
    const { data: newStudy, error: createError } = await supabase
      .from('studies')
      .insert([
        { 
          subject: 'Teste via Service Role', 
          user_id: userId,
          is_active: false,
          is_paused: true,
          seconds: 0
        }
      ])
      .select()
      .single();
    
    if (createError) {
      console.error('Erro ao criar estudo com chave de serviço:', createError);
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
testServiceRole()
  .then(success => {
    if (success) {
      console.log('\n✅ Teste com Service Role concluído com sucesso!');
    } else {
      console.log('\n❌ Teste com Service Role falhou!');
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('\n❌ Erro inesperado durante o teste:', error);
    process.exit(1);
  }); 