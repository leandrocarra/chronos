import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

async function testSignUp() {
  console.log('Testando criação de usuário no Supabase...');
  
  // Cria o cliente Supabase
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  console.log(`URL: ${supabaseUrl}`);
  console.log(`Key: ${supabaseAnonKey?.substring(0, 10)}...`);
  
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  try {
    // Gera um email de teste único
    const testEmail = `usuario.teste${Date.now()}@gmail.com`;
    const testPassword = 'Senha123456!';
    
    console.log(`Criando usuário de teste: ${testEmail}`);
    const { data, error } = await supabase.auth.signUp({
      email: testEmail,
      password: testPassword,
      options: {
        data: {
          name: 'Usuário de Teste',
        },
      },
    });
    
    if (error) {
      console.error('Erro ao criar usuário:', error);
      return false;
    }
    
    console.log('Usuário criado com sucesso!');
    console.log('ID:', data.user.id);
    console.log('Email:', data.user.email);
    console.log('Metadata:', data.user.user_metadata);
    
    return true;
  } catch (error) {
    console.error('Erro inesperado:', error);
    return false;
  }
}

// Executa o teste
testSignUp()
  .then(success => {
    if (success) {
      console.log('\n✅ Teste de criação de usuário concluído com sucesso!');
    } else {
      console.log('\n❌ Teste de criação de usuário falhou!');
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('\n❌ Erro inesperado durante o teste:', error);
    process.exit(1);
  }); 