import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Lista de assuntos para criar estudos
const subjects = [
  'Matemática',
  'Física',
  'Química',
  'Biologia',
  'História',
  'Geografia',
  'Português',
  'Inglês',
  'Programação',
  'Banco de Dados',
  'Inteligência Artificial',
  'Machine Learning',
  'Desenvolvimento Web',
  'DevOps',
  'Cloud Computing'
];

// Função para gerar tempo aleatório entre 0 e 3600 segundos (1 hora)
function getRandomSeconds() {
  return Math.floor(Math.random() * 3600);
}

// Função para gerar boolean aleatório
function getRandomBoolean() {
  return Math.random() > 0.5;
}

async function testDatabaseWrite() {
  console.log('Iniciando teste de gravação no banco de dados...');
  
  try {
    // 1. Buscar usuário para associar os estudos
    console.log('Buscando usuário...');
    const user = await prisma.user.findFirst();
    
    if (!user) {
      console.error('❌ Nenhum usuário encontrado para associar aos estudos.');
      return false;
    }
    
    console.log(`✅ Usuário encontrado: ${user.name} (${user.id})`);
    
    // 2. Excluir estudos existentes do usuário para teste limpo
    console.log(`\nLimpando estudos existentes do usuário ${user.id}...`);
    await prisma.study.deleteMany({
      where: {
        userId: user.id
      }
    });
    
    console.log('✅ Estudos anteriores excluídos.');
    
    // 3. Criar múltiplos estudos para o usuário
    console.log(`\nCriando ${subjects.length} estudos para o usuário...`);
    
    const studiesData = subjects.map(subject => ({
      subject,
      userId: user.id,
      seconds: getRandomSeconds(),
      isActive: getRandomBoolean(),
      isPaused: getRandomBoolean()
    }));
    
    const result = await prisma.study.createMany({
      data: studiesData
    });
    
    console.log(`✅ ${result.count} estudos criados com sucesso!`);
    
    // 4. Verificar se os estudos foram criados
    const createdStudies = await prisma.study.findMany({
      where: {
        userId: user.id
      },
      orderBy: {
        subject: 'asc'
      }
    });
    
    console.log(`\nListando ${createdStudies.length} estudos criados:`);
    createdStudies.forEach((study, index) => {
      console.log(`${index + 1}. ${study.subject} - ${study.seconds} segundos (ID: ${study.id})`);
    });
    
    // 5. Atualizar alguns estudos
    console.log('\nAtualizando os primeiros 3 estudos...');
    
    if (createdStudies.length >= 3) {
      for (let i = 0; i < 3; i++) {
        const study = createdStudies[i];
        await prisma.study.update({
          where: { id: study.id },
          data: {
            seconds: study.seconds + 300, // Adiciona 5 minutos
            updatedAt: new Date()
          }
        });
        console.log(`✅ Estudo "${study.subject}" atualizado.`);
      }
    }
    
    return true;
  } catch (error) {
    console.error('❌ Erro na gravação no banco de dados:', error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}

// Executar o teste
console.time('Tempo de execução');

testDatabaseWrite()
  .then(success => {
    console.timeEnd('Tempo de execução');
    if (success) {
      console.log('\n✅✅✅ Teste de gravação concluído com sucesso!');
    } else {
      console.log('\n❌❌❌ Teste de gravação falhou!');
      process.exit(1);
    }
  })
  .catch(error => {
    console.timeEnd('Tempo de execução');
    console.error('Erro inesperado:', error);
    process.exit(1);
  }); 