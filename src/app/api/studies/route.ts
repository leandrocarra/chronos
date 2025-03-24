import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma-client";

// GET - Listar todos os estudos
export async function GET() {
  try {
    const studies = await prisma.study.findMany({
      orderBy: {
        updatedAt: 'desc',
      },
    });

    return NextResponse.json(studies);
  } catch (error) {
    console.error("Erro ao buscar os estudos:", error);
    return NextResponse.json(
      { error: "Erro ao buscar os estudos" },
      { status: 500 }
    );
  }
}

// POST - Criar um novo estudo
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { subject, userId } = body;

    // Valida os dados recebidos
    if (!subject || !userId) {
      return NextResponse.json(
        { error: "Assunto e ID do usuário são obrigatórios" },
        { status: 400 }
      );
    }

    // Cria o estudo
    const study = await prisma.study.create({
      data: {
        subject,
        userId,
      },
    });

    return NextResponse.json(study, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar estudo:", error);
    return NextResponse.json(
      { error: "Erro ao criar estudo" },
      { status: 500 }
    );
  }
} 