import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Params = {
  params: {
    id: string;
  };
};

// GET - Buscar um timer específico
export async function GET(request: NextRequest, { params }: Params) {
  try {
    const { id } = params;

    const timer = await prisma.timerSession.findUnique({
      where: { id },
      include: {
        tags: true,
      },
    });

    if (!timer) {
      return NextResponse.json(
        { error: "Sessão de timer não encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(timer);
  } catch (error) {
    console.error(`Erro ao buscar sessão de timer com ID ${params.id}:`, error);
    return NextResponse.json(
      { error: "Erro ao buscar a sessão de timer" },
      { status: 500 }
    );
  }
}

// PUT - Atualizar um timer específico
export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const { id } = params;
    const body = await request.json();
    const { title, description, seconds, endedAt, tags } = body;

    // Verifica se o timer existe
    const existingTimer = await prisma.timerSession.findUnique({
      where: { id },
    });

    if (!existingTimer) {
      return NextResponse.json(
        { error: "Sessão de timer não encontrada" },
        { status: 404 }
      );
    }

    // Atualiza o timer
    const updatedTimer = await prisma.timerSession.update({
      where: { id },
      data: {
        title,
        description,
        seconds,
        endedAt,
        tags: tags
          ? {
              set: [],
              connectOrCreate: tags.map((tag: string) => ({
                where: { name: tag },
                create: { name: tag },
              })),
            }
          : undefined,
      },
      include: {
        tags: true,
      },
    });

    return NextResponse.json(updatedTimer);
  } catch (error) {
    console.error(`Erro ao atualizar sessão de timer com ID ${params.id}:`, error);
    return NextResponse.json(
      { error: "Erro ao atualizar a sessão de timer" },
      { status: 500 }
    );
  }
}

// DELETE - Excluir um timer específico
export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    const { id } = params;

    // Verifica se o timer existe
    const existingTimer = await prisma.timerSession.findUnique({
      where: { id },
    });

    if (!existingTimer) {
      return NextResponse.json(
        { error: "Sessão de timer não encontrada" },
        { status: 404 }
      );
    }

    // Desconecta as tags antes de excluir
    await prisma.timerSession.update({
      where: { id },
      data: {
        tags: {
          set: [],
        },
      },
    });

    // Exclui o timer
    await prisma.timerSession.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Sessão de timer excluída com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    console.error(`Erro ao excluir sessão de timer com ID ${params.id}:`, error);
    return NextResponse.json(
      { error: "Erro ao excluir a sessão de timer" },
      { status: 500 }
    );
  }
} 