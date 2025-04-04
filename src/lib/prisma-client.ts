import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

// Função para criar uma nova instância do Prisma Client
function createPrismaClient() {
  try {
    return new PrismaClient();
  } catch (error) {
    console.error("Erro ao criar instância do Prisma Client:", error);
    // Aguardar um breve momento e tentar novamente
    setTimeout(() => createPrismaClient(), 50);
    // Retornar uma instância vazia para evitar erros de referência nula
    return new PrismaClient();
  }
}

// Exportamos o PrismaClient com uma inicialização que funciona tanto em desenvolvimento quanto em produção
export const prisma = global.prisma || createPrismaClient();

// Em ambientes que não são de produção, salvamos a referência para evitar múltiplas conexões
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
} 