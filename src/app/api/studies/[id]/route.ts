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
    const id = params?.id;

    if (!id) {
      return NextResponse.json(
        { error: "ID do estudo não fornecido" },
        { status: 400 }
      );
    }

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
    console.error(`Erro ao buscar estudo com ID ${params?.id || 'desconhecido'}:`, error);
    return NextResponse.json(
      { error: "Erro ao buscar o estudo" },
      { status: 500 }
    );
  }
}

// PUT - Atualizar um estudo específico
export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const id = params?.id;

    if (!id) {
      return NextResponse.json(
        { error: "ID do estudo não fornecido" },
        { status: 400 }
      );
    }

    const body = await request.json();

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
      data: body,
    });

    return NextResponse.json(updatedStudy);
  } catch (error) {
    console.error(`Erro ao atualizar estudo com ID ${params?.id || 'desconhecido'}:`, error);
    return NextResponse.json(
      { error: "Erro ao atualizar o estudo" },
      { status: 500 }
    );
  }
}

// DELETE - Excluir um estudo específico
export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    const id = params?.id;

    if (!id) {
      return NextResponse.json(
        { error: "ID do estudo não fornecido" },
        { status: 400 }
      );
    }

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
    console.error(`Erro ao excluir estudo com ID ${params?.id || 'desconhecido'}:`, error);
    return NextResponse.json(
      { error: "Erro ao excluir o estudo" },
      { status: 500 }
    );
  }
} 