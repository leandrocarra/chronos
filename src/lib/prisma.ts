import { PrismaClient } from '@prisma/client';

// PrismaClient é anexado ao objeto global em desenvolvimento para evitar
// múltiplas instâncias do Prisma Client em hot reloading
declare global {
  var prisma: PrismaClient | undefined;
}

// Sempre use o prisma importado deste arquivo
export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
} 