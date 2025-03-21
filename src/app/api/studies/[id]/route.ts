import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Params = {
  params: {
    id: string;
  };
};

// GET - Buscar um estudo específico
export async function GET(request: NextRequest, { params }: Params) {
  try {
    const id = params.id;

    const study = await prisma.study.findUnique({
      where: { id },
    });

    if (!study) {
      return NextResponse.json(
        { error: "Estudo não encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(study);
  } catch (error) {
    console.error(`Erro ao buscar estudo com ID ${params.id}:`, error);
    return NextResponse.json(
      { error: "Erro ao buscar o estudo" },
      { status: 500 }
    );
  }
}

// PUT - Atualizar um estudo específico
export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const id = params.id;
    const body = await request.json();
    const { subject, seconds, isActive, isPaused } = body;

    // Verifica se o estudo existe
    const existingStudy = await prisma.study.findUnique({
      where: { id },
    });

    if (!existingStudy) {
      return NextResponse.json(
        { error: "Estudo não encontrado" },
        { status: 404 }
      );
    }

    // Atualiza o estudo
    const updatedStudy = await prisma.study.update({
      where: { id },
      data: {
        subject,
        seconds,
        isActive,
        isPaused,
      },
    });

    return NextResponse.json(updatedStudy);
  } catch (error) {
    const id = params?.id || 'desconhecido';
    console.error(`Erro ao atualizar estudo com ID ${id}:`, error);
    return NextResponse.json(
      { error: "Erro ao atualizar o estudo" },
      { status: 500 }
    );
  }
}

// DELETE - Excluir um estudo específico
export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    const id = params.id;

    // Verifica se o estudo existe
    const existingStudy = await prisma.study.findUnique({
      where: { id },
    });

    if (!existingStudy) {
      return NextResponse.json(
        { error: "Estudo não encontrado" },
        { status: 404 }
      );
    }

    // Exclui o estudo
    await prisma.study.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Estudo excluído com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    const id = params?.id || 'desconhecido';
    console.error(`Erro ao excluir estudo com ID ${id}:`, error);
    return NextResponse.json(
      { error: "Erro ao excluir o estudo" },
      { status: 500 }
    );
  }
} 