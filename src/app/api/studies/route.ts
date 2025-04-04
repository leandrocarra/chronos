import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma-client";

// Middleware para adicionar cabeçalhos CORS
function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

// Manipulador de requisições OPTIONS para preflight CORS
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders() });
}

// GET - Listar todos os estudos
export async function GET() {
  try {
    console.log("🔍 API: GET /api/studies - Iniciando busca de estudos");
    const studies = await prisma.study.findMany({
      orderBy: {
        updatedAt: 'desc',
      },
    });
    
    console.log(`🔍 API: Encontrados ${studies.length} estudos`);
    return NextResponse.json(studies, { headers: corsHeaders() });
  } catch (error) {
    console.error("❌ API: Erro ao buscar os estudos:", error);
    return NextResponse.json(
      { error: "Erro ao buscar os estudos" },
      { status: 500, headers: corsHeaders() }
    );
  }
}

// POST - Criar um novo estudo
export async function POST(request: NextRequest) {
  try {
    console.log("🔍 API: POST /api/studies - Iniciando criação de estudo");
    const body = await request.json();
    let { subject, userId } = body;

    console.log("🔍 API: Dados recebidos:", { subject, userId });

    // Valida os dados recebidos
    if (!subject) {
      console.log("❌ API: Dados inválidos - subject ausente");
      return NextResponse.json(
        { error: "Assunto é obrigatório" },
        { status: 400, headers: corsHeaders() }
      );
    }

    // Define um ID de usuário padrão se não for fornecido
    if (!userId) {
      userId = "83e5accb-00ea-4f44-a0d3-f45e2a2ed543"; // ID do usuário padrão
      console.log("🔍 API: Usando ID de usuário padrão:", userId);
    }

    // Cria o estudo
    const study = await prisma.study.create({
      data: {
        subject,
        userId,
      },
    });

    console.log("✅ API: Estudo criado com sucesso:", { id: study.id, subject: study.subject });
    return NextResponse.json(study, { status: 201, headers: corsHeaders() });
  } catch (error) {
    console.error("❌ API: Erro ao criar estudo:", error);
    return NextResponse.json(
      { error: "Erro ao criar estudo" },
      { status: 500, headers: corsHeaders() }
    );
  }
} 