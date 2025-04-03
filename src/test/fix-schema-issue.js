// Este script deve ser executado apenas com a SERVICE_ROLE_KEY do Supabase
// Esta chave é mais privilegiada que a chave anônima
// Você pode encontrá-la no painel do Supabase > Project Settings > API

import { createClient } from '@supabase/supabase-js';
require('dotenv').config({ path: '../../.env' });

async function fixSchemaIssue() {
  console.log('Instruções para obter a SERVICE_ROLE_KEY:');
  console.log('1. Acesse o painel do Supabase em https://supabase.com/dashboard');
  console.log('2. Selecione seu projeto');
  console.log('3. Vá para Project Settings > API');
  console.log('4. Copie a chave "service_role key (secret)"');
  console.log('5. Cole a chave abaixo quando solicitado');
  
  // Solicita a SERVICE_ROLE_KEY do usuário
  process.stdout.write('Cole a SERVICE_ROLE_KEY: ');
  const serviceRoleKey = await new Promise(resolve => {
    process.stdin.once('data', data => {
      // Não mostre a chave no console, apenas confirme que foi recebida
      process.stdout.write('\nChave recebida. Não preocupe, não mostramos a chave por segurança.\n');
      resolve(data.toString().trim());
    });
  });
  
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabase = createClient(supabaseUrl, serviceRoleKey);
  
  try {
    // Tenta executar uma consulta SQL para conceder permissões ao schema public para o role anon
    console.log('Tentando conceder permissões de schema...');
    
    const { error: schemaError } = await supabase.rpc('grant_permissions_to_anon', {});
    
    if (schemaError) {
      console.error('Erro ao tentar conceder permissões via RPC:', schemaError);
      console.log('\nTentando criar a função RPC...');
      
      // Se a função não existir, cria-a
      const createFunctionSQL = `
      CREATE OR REPLACE FUNCTION grant_permissions_to_anon()
      RETURNS void
      LANGUAGE plpgsql
      SECURITY DEFINER
      AS $$
      BEGIN
        -- Conceder permissões do schema public para o role anon
        GRANT USAGE ON SCHEMA public TO anon;
        GRANT ALL ON ALL TABLES IN SCHEMA public TO anon;
        GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon;
        GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO anon;
        
        -- Garantir que as tabelas futuras tenham as mesmas permissões
        ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO anon;
        ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO anon;
        ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON FUNCTIONS TO anon;
      END;
      $$;
      `;
      
      const { error: createError } = await supabase.rpc('exec_sql', { sql: createFunctionSQL });
      
      if (createError) {
        console.error('Erro ao criar função RPC:', createError);
        console.log('\nTalvez a função exec_sql não exista. Vamos tentar um método alternativo.');
        
        // Tenta fazer uma consulta direta para verificar as permissões existentes
        const { data: tableData, error: tableError } = await supabase
          .from('studies')
          .select('count(*)')
          .limit(1);
        
        if (tableError) {
          console.error('Erro ao acessar tabela studies:', tableError);
        } else {
          console.log('✅ Conseguimos acessar a tabela studies!');
          console.log(tableData);
        }
        
        return false;
      }
      
      console.log('Função RPC criada com sucesso!');
      
      // Chama a função novamente
      const { error: callError } = await supabase.rpc('grant_permissions_to_anon', {});
      
      if (callError) {
        console.error('Erro ao chamar a função:', callError);
        return false;
      }
      
      console.log('✅ Permissões concedidas com sucesso!');
    } else {
      console.log('✅ Permissões concedidas com sucesso!');
    }
    
    // Verifica se agora conseguimos acessar a tabela
    console.log('\nVerificando acesso à tabela studies...');
    const { data, error } = await supabase
      .from('studies')
      .select('*')
      .limit(5);
    
    if (error) {
      console.error('Erro ao acessar tabela studies:', error);
      return false;
    }
    
    console.log('✅ Conseguimos acessar a tabela studies!');
    console.log(`Encontrados ${data.length} registros.`);
    
    // Agora, vamos testar com a chave anônima normal
    console.log('\nTeste com a chave anônima...');
    const anonSupabase = createClient(supabaseUrl, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    
    const { data: anonData, error: anonError } = await anonSupabase
      .from('studies')
      .select('*')
      .limit(5);
    
    if (anonError) {
      console.error('Erro ao acessar com chave anônima:', anonError);
      console.log('Recomendações finais:');
      console.log('1. Verifique se o RLS está desativado');
      console.log('2. Adicione a política RLS para permitir acesso anônimo');
      console.log('3. Reinicie seu servidor Next.js');
      return false;
    }
    
    console.log('✅ Acesso com chave anônima bem-sucedido!');
    console.log(`Encontrados ${anonData.length} registros.`);
    
    return true;
  } catch (error) {
    console.error('Erro inesperado:', error);
    return false;
  }
}

// Executa a correção
fixSchemaIssue()
  .then(success => {
    if (success) {
      console.log('\n✅ Problema de permissão resolvido com sucesso!');
      console.log('Agora você deve conseguir acessar o Supabase a partir de sua aplicação.');
    } else {
      console.log('\n❌ Não foi possível resolver o problema automaticamente.');
      console.log('Recomendamos:');
      console.log('1. Verificar as permissões do seu projeto Supabase');
      console.log('2. Contatar o suporte do Supabase para assistência');
      console.log('3. Ou como alternativa temporária, usar a chave service_role em vez da anon key para desenvolvimento (não recomendado para produção)');
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('\n❌ Erro inesperado durante a execução:', error);
    process.exit(1);
  }); 