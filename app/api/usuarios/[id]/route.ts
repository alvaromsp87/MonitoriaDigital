import { NextResponse } from "next/server";
import { pool } from "@monitoriadigital/lib/db";

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    await pool.query("DELETE FROM usuarios WHERE id = ?", [id]);
    return NextResponse.json({ message: "Usuário excluído com sucesso" });
  } catch (e) {
    console.error(e);
    return NextResponse.error();
  }
}
