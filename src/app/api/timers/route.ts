import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma-client";

// GET - Listar todas as sessões de timer
export async function GET() {
  try {
    const timers = await prisma.timerSession.findMany({
      include: {
        tags: true,
      },
      orderBy: {
        startedAt: 'desc',
      },
    });

    return NextResponse.json(timers);
  } catch (error) {
    console.error("Erro ao buscar as sessões de timer:", error);
    return NextResponse.json(
      { error: "Erro ao buscar as sessões de timer" },
      { status: 500 }
    );
  }
}

// POST - Criar uma nova sessão de timer
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, seconds, userId, tags } = body;

    // Valida os dados recebidos
    if (!title || !userId) {
      return NextResponse.json(
        { error: "Título e ID do usuário são obrigatórios" },
        { status: 400 }
      );
    }

    // Cria a sessão com as tags relacionadas
    const timerSession = await prisma.timerSession.create({
      data: {
        title,
        description,
        seconds,
        userId,
        tags: {
          connectOrCreate: tags?.map((tag: string) => ({
            where: { name: tag },
            create: { name: tag },
          })) || [],
        },
      },
      include: {
        tags: true,
      },
    });

    return NextResponse.json(timerSession, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar sessão de timer:", error);
    return NextResponse.json(
      { error: "Erro ao criar sessão de timer" },
      { status: 500 }
    );
  }
} 