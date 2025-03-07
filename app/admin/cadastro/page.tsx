"use client"; // Indica que o código é executado no lado do cliente em um projeto Next.js

import { useState } from "react"; // Importa o hook useState do React para gerenciar estados

export default function Cadastro() {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    curso: "",
    especialidade: "",
    formacao_academica: "",
    data_nascimento: "",
    tipo: "aluno", // Valor padrão do tipo de usuário é "aluno"
  });

  // Função para manipular as mudanças nos campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // Atualiza o estado do formData com o valor do campo
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Impede o comportamento padrão de recarregar a página ao enviar o formulário

    // Simula o cadastro de usuário com um alerta
    alert("Usuário cadastrado com sucesso!");

    // Reseta os dados do formulário após o envio
    setFormData({
      nome: "",
      email: "",
      senha: "",
      curso: "",
      especialidade: "",
      formacao_academica: "",
      data_nascimento: "",
      tipo: "aluno",
    });
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar - Barra lateral de navegação */}
      <nav className="bg-gray-900 text-white w-64 p-6">
        <h3 className="text-center text-xl font-semibold mb-6">Monitoria Digital Adm</h3>
        <ul className="space-y-3">
          {/* Links de navegação */}
          <li><a className="block px-4 py-2 rounded hover:bg-gray-700" href="/admin/dashboard">Dashboard</a></li>
          <li><a className="bg-gray-700 px-4 py-2 rounded" href="./cadastro">Cadastro de Usuários</a></li>
          <li><a className="block px-4 py-2 rounded hover:bg-gray-700" href="./feedbacks">Feedbacks</a></li>
          <li><a className="block px-4 py-2 rounded hover:bg-gray-700" href="./monitoria">Cadastrar Monitorias</a></li>
          <li><a className="block px-4 py-2 rounded hover:bg-red-600 mt-4" href="\">Sair</a></li>
        </ul>
      </nav>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-10">
        <h2 className="text-center text-2xl font-semibold text-gray-800">Cadastrar Usuário</h2>
        <form onSubmit={handleSubmit} className="mt-6 bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto">
          
          {/* Campo para Nome Completo */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Nome Completo</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Campo para E-mail */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Campo para Senha */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Senha</label>
            <input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Campo para Curso */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Curso</label>
            <input
              type="text"
              name="curso"
              value={formData.curso}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Campo para Especialidade */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Especialidade</label>
            <input
              type="text"
              name="especialidade"
              value={formData.especialidade}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Campo para Formação Acadêmica */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Formação Acadêmica</label>
            <input
              type="text"
              name="formacao_academica"
              value={formData.formacao_academica}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Campo para Data de Nascimento */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Data de Nascimento</label>
            <input
              type="date"
              name="data_nascimento"
              value={formData.data_nascimento}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Campo para Tipo de Usuário */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Tipo de Usuário</label>
            <select
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            >
              <option value="aluno">Aluno</option>
              <option value="monitor">Monitor</option>
              <option value="admin">Administrador</option>
            </select>
          </div>

          {/* Botões de Enviar e Limpar */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Cadastrar
            </button>
            <button
              type="reset"
              className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition"
              onClick={() => setFormData({
                nome: "",
                email: "",
                senha: "",
                curso: "",
                especialidade: "",
                formacao_academica: "",
                data_nascimento: "",
                tipo: "aluno",
              })}
            >
              Limpar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
