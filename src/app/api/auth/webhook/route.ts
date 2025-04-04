import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma-client";

// Função auxiliar para verificar se o Prisma Client está inicializado
function isPrismaInitialized() {
  try {
    // Tentativa simples de acessar o Prisma
    return !!prisma;
  } catch (error) {
    console.error("Erro ao verificar o Prisma Client:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, record } = body;
    
    // Verificar a chave de API
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }
    
    // Verificar se o token corresponde ao token secreto definido nas variáveis de ambiente
    const token = authHeader.split(' ')[1];
    if (token !== process.env.WEBHOOK_SECRET) {
      return NextResponse.json({ error: 'Token inválido' }, { status: 401 });
    }
    
    // Verificar se o Prisma Client está inicializado
    if (!isPrismaInitialized()) {
      console.error("Prisma Client não foi inicializado corretamente");
      return NextResponse.json(
        { error: 'Serviço temporariamente indisponível' },
        { status: 503 }
      );
    }
    
    // Processar eventos do Supabase Auth
    if (type === 'user.created') {
      const { id, email, user_metadata } = record;
      const name = user_metadata?.name || email?.split('@')[0] || 'Usuário';
      
      try {
        // Verificar se o usuário já existe
        const existingUser = await prisma.user.findUnique({
          where: { id },
        });
        
        if (!existingUser) {
          // Criar usuário na tabela users
          await prisma.user.create({
            data: {
              id,
              name,
              email,
            },
          });
          
          console.log(`Usuário ${id} criado com sucesso na tabela users`);
        }
      } catch (dbError) {
        console.error('Erro ao acessar o banco de dados:', dbError);
        return NextResponse.json(
          { error: 'Erro ao processar operação no banco de dados' },
          { status: 500 }
        );
      }
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro no webhook de autenticação:', error);
    return NextResponse.json(
      { error: 'Erro interno no servidor' },
      { status: 500 }
    );
  }
} 