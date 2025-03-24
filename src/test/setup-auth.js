require('dotenv').config({ path: '../../.env' });
const { createClient } = require('@supabase/supabase-js');

async function setupAuth() {
  console.log('Configurando autenticação no Supabase...');
  
  // Cria o cliente Supabase
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  console.log(`URL: ${supabaseUrl}`);
  console.log(`Key: ${supabaseAnonKey.substring(0, 10)}...`);
  
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  try {
    // Registra um novo usuário de teste
    console.log('Registrando usuário de teste...');
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: 'teste@example.com',
      password: 'senha123',
    });
    
    if (authError) {
      console.error('Erro ao registrar usuário:', authError);
      return false;
    }
    
    console.log('Usuário registrado:', authData);
    
    // Fazer login com o usuário
    console.log('\nFazendo login...');
    const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
      email: 'teste@example.com',
      password: 'senha123',
    });
    
    if (loginError) {
      console.error('Erro ao fazer login:', loginError);
      return false;
    }
    
    console.log('Login bem-sucedido!');
    console.log('Token de acesso:', loginData.session.access_token.substring(0, 20) + '...');
    
    return true;
  } catch (error) {
    console.error('Erro inesperado:', error);
    return false;
  }
}

// Executa a configuração
setupAuth()
  .then(success => {
    if (success) {
      console.log('\n✅ Configuração de autenticação concluída com sucesso!');
    } else {
      console.log('\n❌ Configuração de autenticação falhou!');
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('\n❌ Erro inesperado durante a configuração:', error);
    process.exit(1);
  }); 