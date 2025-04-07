import { NextResponse } from "next/server";
import { pool } from "@monitoriadigital/lib/db";
import type { NextRequest } from "next/server";

export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  try {
    await pool.query("DELETE FROM usuarios WHERE id = ?", [id]);
    return NextResponse.json({ message: "Usuário excluído com sucesso" });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Erro ao excluir o usuário" }, { status: 500 });
  }
}
