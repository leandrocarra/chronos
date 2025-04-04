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

// GET - Buscar um estudo específico
export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const id = context.params.id;
    console.log(`🔍 API: GET /api/studies/${id} - Buscando estudo específico`);

    if (!id) {
      console.log("❌ API: ID do estudo não fornecido");
      return NextResponse.json(
        { error: "ID do estudo não fornecido" },
        { status: 400, headers: corsHeaders() }
      );
    }

    const study = await prisma.study.findUnique({
      where: { id },
    });

    if (!study) {
      console.log(`❌ API: Estudo com ID ${id} não encontrado`);
      return NextResponse.json(
        { error: "Estudo não encontrado" },
        { status: 404, headers: corsHeaders() }
      );
    }

    console.log(`✅ API: Estudo encontrado: ${study.subject}`);
    return NextResponse.json(study, { headers: corsHeaders() });
  } catch (error) {
    console.error(`❌ API: Erro ao buscar estudo com ID ${context.params.id || 'desconhecido'}:`, error);
    return NextResponse.json(
      { error: "Erro ao buscar o estudo" },
      { status: 500, headers: corsHeaders() }
    );
  }
}

// PUT - Atualizar um estudo específico
export async function PUT(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const id = context.params.id;
    console.log(`🔍 API: PUT /api/studies/${id} - Atualizando estudo`);

    if (!id) {
      console.log("❌ API: ID do estudo não fornecido");
      return NextResponse.json(
        { error: "ID do estudo não fornecido" },
        { status: 400, headers: corsHeaders() }
      );
    }

    const body = await request.json();
    console.log(`🔍 API: Dados para atualização:`, body);

    // Verifica se o estudo existe
    const existingStudy = await prisma.study.findUnique({
      where: { id },
    });

    if (!existingStudy) {
      console.log(`❌ API: Estudo com ID ${id} não encontrado para atualização`);
      return NextResponse.json(
        { error: "Estudo não encontrado" },
        { status: 404, headers: corsHeaders() }
      );
    }

    // Atualiza o estudo
    const updatedStudy = await prisma.study.update({
      where: { id },
      data: body,
    });

    console.log(`✅ API: Estudo atualizado: ${updatedStudy.subject}`);
    return NextResponse.json(updatedStudy, { headers: corsHeaders() });
  } catch (error) {
    console.error(`❌ API: Erro ao atualizar estudo com ID ${context.params.id || 'desconhecido'}:`, error);
    return NextResponse.json(
      { error: "Erro ao atualizar o estudo" },
      { status: 500, headers: corsHeaders() }
    );
  }
}

// DELETE - Excluir um estudo específico
export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const id = context.params.id;
    console.log(`🔍 API: DELETE /api/studies/${id} - Excluindo estudo`);

    if (!id) {
      console.log("❌ API: ID do estudo não fornecido para exclusão");
      return NextResponse.json(
        { error: "ID do estudo não fornecido" },
        { status: 400, headers: corsHeaders() }
      );
    }

    // Verifica se o estudo existe
    const existingStudy = await prisma.study.findUnique({
      where: { id },
    });

    if (!existingStudy) {
      console.log(`❌ API: Estudo com ID ${id} não encontrado para exclusão`);
      return NextResponse.json(
        { error: "Estudo não encontrado" },
        { status: 404, headers: corsHeaders() }
      );
    }

    // Exclui o estudo
    await prisma.study.delete({
      where: { id },
    });

    console.log(`✅ API: Estudo com ID ${id} excluído com sucesso`);
    return NextResponse.json(
      { message: "Estudo excluído com sucesso" },
      { status: 200, headers: corsHeaders() }
    );
  } catch (error) {
    console.error(`❌ API: Erro ao excluir estudo com ID ${context.params.id || 'desconhecido'}:`, error);
    return NextResponse.json(
      { error: "Erro ao excluir o estudo" },
      { status: 500, headers: corsHeaders() }
    );
  }
} 