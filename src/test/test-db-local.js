import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function testDatabase() {
  console.log('Testando conexão com o banco de dados...');
  console.log('URL do banco de dados:', process.env.DATABASE_URL ? 'Configurada' : 'Não configurada');
  
  try {
    console.log('Tentando buscar usuários...');
    const users = await prisma.user.findMany({
      take: 5,
    });
    
    console.log(`✅ Conexão bem-sucedida! Encontrados ${users.length} usuários.`);
    if (users.length > 0) {
      console.log('Exemplo de usuário:', {
        id: users[0].id,
        name: users[0].name,
        email: users[0].email,
      });
    }
    
    console.log('\nTentando buscar estudos...');
    const studies = await prisma.study.findMany({
      take: 5,
      orderBy: {
        updatedAt: 'desc',
      },
    });
    
    console.log(`✅ Encontrados ${studies.length} estudos.`);
    if (studies.length > 0) {
      console.log('Exemplo de estudo:', {
        id: studies[0].id,
        subject: studies[0].subject,
        userId: studies[0].userId,
      });
    }
    
    console.log('\nTentando criar um estudo de teste...');
    const userId = users.length > 0 ? users[0].id : '83e5accb-00ea-4f44-a0d3-f45e2a2ed54c';
    
    const testStudy = await prisma.study.create({
      data: {
        subject: `Teste de Conexão ${new Date().toISOString()}`,
        userId: userId,
        seconds: 0,
        isActive: false,
        isPaused: true,
      },
    });
    
    console.log('✅ Estudo criado com sucesso:', {
      id: testStudy.id,
      subject: testStudy.subject,
    });
    
    console.log('\nExcluindo estudo de teste...');
    await prisma.study.delete({
      where: {
        id: testStudy.id,
      },
    });
    
    console.log('✅ Estudo excluído com sucesso!');
    
    return true;
  } catch (error) {
    console.error('❌ Erro na conexão com o banco de dados:', error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}

// Executar o teste
testDatabase()
  .then(success => {
    if (success) {
      console.log('\n✅✅✅ Todos os testes de banco de dados concluídos com sucesso!');
    } else {
      console.log('\n❌❌❌ Alguns testes de banco de dados falharam!');
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('Erro inesperado:', error);
    process.exit(1);
  }); 