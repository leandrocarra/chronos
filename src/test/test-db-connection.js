require('dotenv').config({ path: '../../.env' });
const { PrismaClient } = require('@prisma/client');

async function testConnection() {
  const prisma = new PrismaClient();
  
  try {
    console.log('Tentando conectar ao banco de dados...');
    
    // Tentativa simples de consulta para verificar a conexão
    const userCount = await prisma.user.count();
    
    console.log('✅ Conexão bem-sucedida!');
    console.log(`Número de usuários no banco de dados: ${userCount}`);
    
    // Tentar acessar outros modelos também
    const timerSessionCount = await prisma.timerSession.count();
    console.log(`Número de sessões de timer: ${timerSessionCount}`);
    
    const tagCount = await prisma.tag.count();
    console.log(`Número de tags: ${tagCount}`);
    
    return true;
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco de dados:');
    console.error(error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}

// Executar o teste
testConnection()
  .then(success => {
    if (success) {
      console.log('Teste de conexão concluído com sucesso.');
    } else {
      console.log('Teste de conexão falhou.');
      process.exit(1);
    }
  })
  .catch(e => {
    console.error('Erro inesperado durante o teste:', e);
    process.exit(1);
  }); 