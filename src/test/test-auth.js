import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

async function testAuth() {
  console.log('Testando autenticação do Supabase...');
  
  // Cria o cliente Supabase
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  console.log(`URL: ${supabaseUrl}`);
  console.log(`Key: ${supabaseAnonKey?.substring(0, 10)}...`);
  
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  try {
    // Tenta fazer login com email/senha
    const testEmail = 'usuario.teste1743709715812@gmail.com';
    const testPassword = 'Senha123456!';
    
    console.log(`Tentando login com: ${testEmail}`);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: testEmail,
      password: testPassword,
    });
    
    if (error) {
      console.error('Erro ao fazer login:', error);
      return false;
    }
    
    console.log('Login bem-sucedido!');
    console.log('Sessão:', data.session ? 'Ativa' : 'Inativa');
    console.log('Usuário:', data.user.email);
    
    // Tentando obter o usuário da sessão atual
    const { data: userData, error: userError } = await supabase.auth.getUser();
    
    if (userError) {
      console.error('Erro ao obter usuário autenticado:', userError);
      return false;
    }
    
    console.log('Usuário recuperado da sessão:', userData);
    
    return true;
  } catch (error) {
    console.error('Erro inesperado:', error);
    return false;
  }
}

// Executa o teste
testAuth()
  .then(success => {
    if (success) {
      console.log('\n✅ Teste de autenticação concluído com sucesso!');
    } else {
      console.log('\n❌ Teste de autenticação falhou!');
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('\n❌ Erro inesperado durante o teste:', error);
    process.exit(1);
  }); 