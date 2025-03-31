"use client";
// Importa componentes essenciais do React e Next.js
import Link from "next/link";
import { useState } from "react";

// Importa ícones do Heroicons para os botões
import { UserIcon, AcademicCapIcon, UsersIcon, VideoCameraIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  // Estados para controlar a expansão de cada seção
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Função para alternar a expansão da seção clicada
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <nav className="bg-fundo text-titulo shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo do Monitoria Digital */}
        <h1 className="text-2xl font-bold">Monitoria Digital</h1>

        {/* Menu principal - Flexível e responsivo */}
        <div className="flex space-x-4">
          {/* Botão Administrador */}
          <button className="flex items-center space-x-2 border p-2 rounded-md bg-secundario hover:bg-destaque transition"
            onClick={() => toggleSection("admin")}>
            <UserIcon className="w-5 h-5" />
            <span>Administrador</span>
            <PlusIcon className="w-4 h-4" />
          </button>

          {/* Botão Aluno */}
          <button className="flex items-center space-x-2 border p-2 rounded-md bg-secundario hover:bg-destaque transition"
            onClick={() => toggleSection("aluno")}>
            <AcademicCapIcon className="w-5 h-5" />
            <span>Aluno</span>
            <PlusIcon className="w-4 h-4" />
          </button>

          {/* Botão Monitor */}
          <button className="flex items-center space-x-2 border p-2 rounded-md bg-secundario hover:bg-destaque transition"
            onClick={() => toggleSection("monitor")}>
            <UsersIcon className="w-5 h-5" />
            <span>Monitor</span>
            <PlusIcon className="w-4 h-4" />
          </button>

          {/* Botão Aula Interativa */}
          <button className="flex items-center space-x-2 border p-2 rounded-md bg-secundario hover:bg-destaque transition"
            onClick={() => toggleSection("aula")}>
            <VideoCameraIcon className="w-5 h-5" />
            <span>Aula Interativa</span>
            <PlusIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Botão de Acesso */}
        <Link href="/login">
          <a className="bg-terciario text-white px-4 py-2 rounded-md shadow-md hover:bg-avc transition">
            Acesso
          </a>
        </Link>
      </div>

      {/* Seções Expansíveis */}
      <div className="mt-4 space-y-2">
        {expandedSection === "admin" && (
          <div className="p-4 border rounded-md bg-secundario text-white">
            <p>Gerencie usuários e atividades administrativas da plataforma.</p>
          </div>
        )}
        {expandedSection === "aluno" && (
          <div className="p-4 border rounded-md bg-secundario text-white">
            <p>Acesse conteúdos, participe de aulas e interaja com monitores.</p>
          </div>
        )}
        {expandedSection === "monitor" && (
          <div className="p-4 border rounded-md bg-secundario text-white">
            <p>Gerencie suas sessões de monitoria e acompanhe alunos.</p>
          </div>
        )}
        {expandedSection === "aula" && (
          <div className="p-4 border rounded-md bg-secundario text-white">
            <p>Conecte-se em tempo real para aulas interativas e suporte imediato.</p>
          </div>
        )}
      </div>
    </nav>
  );
}
