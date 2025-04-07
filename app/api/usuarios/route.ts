import { NextResponse } from "next/server";
import { pool } from "@monitoriadigital/lib/db";
import type { ResultSetHeader, FieldPacket } from "mysql2";
import bcrypt from "bcrypt";

// Validação básica de e-mail
function validarEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export async function GET() {
  try {
    // Buscar usuários com seus tipos (join entre usuarios e acessos)
    const [rows] = await pool.query(`
      SELECT u.id_usuario, u.nome, u.email, a.tipo
      FROM usuarios u
      LEFT JOIN acessos a ON u.id_usuario = a.id_usuario
    `);
    
    return NextResponse.json(rows);
  } catch (e) {
    console.error("Erro ao buscar usuários:", e);
    return new NextResponse("Erro ao buscar usuários.", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      nome,
      email,
      senha,
      curso = '',
      especialidade = '',
      formacao_academica = '',
      data_nascimento = null,
      tipo = 'usuario', // valor padrão
    } = body;

    // Validações
    if (!nome || !email || !senha) {
      return new NextResponse("Nome, e-mail e senha são obrigatórios.", { status: 400 });
    }

    if (!validarEmail(email)) {
      return new NextResponse("E-mail inválido.", { status: 400 });
    }

    if (senha.length < 6) {
      return new NextResponse("A senha deve ter pelo menos 6 caracteres.", { status: 400 });
    }

    // Verifica se o e-mail já existe
    type UsuarioExistente = { id_usuario: number };

    const [existing] = await pool.query(
      "SELECT id_usuario FROM usuarios WHERE email = ?",
      [email]
    ) as [UsuarioExistente[], FieldPacket[]];
    
    if (existing.length > 0) {
      return new NextResponse("E-mail já cadastrado.", { status: 409 });
    }

    // Criptografar senha
    const hashedPassword = await bcrypt.hash(senha, 10);
    const dataCadastro = new Date().toISOString().split("T")[0]; // 'YYYY-MM-DD'

    // Inserir usuário
    const [result] = await pool.query(
      `INSERT INTO usuarios 
        (nome, email, senha, curso, especialidade, formacao_academica, data_nascimento, data_cadastro)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [nome, email, hashedPassword, curso, especialidade, formacao_academica, data_nascimento, dataCadastro]
    ) as [ResultSetHeader, FieldPacket[]];

    const idUsuario = result.insertId;

    // Inserir o tipo na tabela acessos
    await pool.query(
      `INSERT INTO acessos (id_usuario, tipo) VALUES (?, ?)`,
      [idUsuario, tipo]
    );

    return NextResponse.json({ message: "Usuário criado com sucesso", id: idUsuario });

  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    return new NextResponse("Erro interno no servidor", { status: 500 });
  }
}
