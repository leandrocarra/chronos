require('dotenv').config({ path: '../../.env' });
const { createClient } = require('@supabase/supabase-js');

async function testServiceRole() {
  console.log('Testando acesso com service_role key...');
  
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY;
  
  console.log(`URL: ${supabaseUrl}`);
  console.log(`Key (primeiros 10 caracteres): ${serviceRoleKey.substring(0, 10)}...`);
  
  const supabase = createClient(supabaseUrl, serviceRoleKey);

  try {
    // Tenta obter todos os estudos
    console.log('Buscando estudos com service_role key...');
    const { data, error } = await supabase
      .from('studies')
      .select('*')
      .order('updated_at', { ascending: false });
    
    if (error) {
      console.error('Erro ao buscar estudos:', error);
      return false;
    }
    
    console.log(`✅ Estudos encontrados: ${data.length}`);
    if (data.length > 0) {
      console.log('Primeiro estudo:', data[0]);
    }
    
    // Tenta criar um novo estudo
    console.log('\nCriando um novo estudo...');
    const { data: newStudy, error: createError } = await supabase
      .from('studies')
      .insert([
        { 
          subject: 'Teste com service_role', 
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
    
    console.log('✅ Novo estudo criado:', newStudy);
    
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
      console.log('\n✅ Teste com service_role concluído com sucesso!');
      console.log('Agora você pode reiniciar o servidor Next.js para aplicar as mudanças.');
    } else {
      console.log('\n❌ Teste com service_role falhou!');
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('\n❌ Erro inesperado durante o teste:', error);
    process.exit(1);
  }); 