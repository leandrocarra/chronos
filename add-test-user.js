const { PrismaClient } = require('@prisma/client');

async function addTestUser() {
  const prisma = new PrismaClient();
  
  try {
    console.log('Verificando se já existe um usuário de teste...');
    
    // Verificar se já existe um usuário com email de teste
    const existingUser = await prisma.user.findFirst({
      where: {
        email: 'teste@example.com'
      }
    });
    
    if (existingUser) {
      console.log('Usuário de teste já existe:');
      console.log(`ID: ${existingUser.id}`);
      console.log(`Nome: ${existingUser.name}`);
      console.log(`Email: ${existingUser.email}`);
      return existingUser.id;
    }
    
    // Criar um novo usuário de teste
    console.log('Criando usuário de teste...');
    const newUser = await prisma.user.create({
      data: {
        name: 'Usuário Teste',
        email: 'teste@example.com'
      }
    });
    
    console.log('Usuário de teste criado com sucesso:');
    console.log(`ID: ${newUser.id}`);
    console.log(`Nome: ${newUser.name}`);
    console.log(`Email: ${newUser.email}`);
    
    return newUser.id;
  } catch (error) {
    console.error('Erro ao criar usuário de teste:', error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
}

// Executar a função
addTestUser().then(userId => {
  console.log('\nPara usar este ID no código, atualize a constante TEMP_USER_ID:');
  console.log(`const TEMP_USER_ID = '${userId}';`);
}); 