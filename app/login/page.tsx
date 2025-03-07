"use client"; // Indica que este é um componente cliente (React)

import { useState } from "react"; // Importa o hook useState para gerenciar os estados locais
import { useRouter } from "next/navigation"; // Importa o hook useRouter do Next.js para redirecionamento de navegação
import Link from "next/link"; // Importa o Link para navegação entre páginas do Next.js

export default function Login() {
  // Estado para armazenar o e-mail e a senha do usuário
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 

  // Hook de navegação do Next.js
  const router = useRouter(); 

  // Função que será chamada ao submeter o formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Impede o comportamento padrão de envio do formulário (recarregar a página)
    console.log("Login:", { email, password }); // Loga o e-mail e a senha no console (para fins de depuração)

    // Simulação de verificação de tipo de usuário (admin, user, monitor)
    const isAdmin = email === "admin@exemplo.com" && password === "123456"; // Verifica se é um admin
    const isUser = email === "user@exemplo.com" && password === "123456";   // Verifica se é um usuário comum
    const isMonitor = email === "monitor@exemplo.com" && password === "123456"; // Verifica se é um monitor

    if (isAdmin) {
      // Se o usuário for admin, redireciona para o dashboard do admin
      router.push("/admin/dashboard");
    } else if (isUser) {
      // Se o usuário for comum, redireciona para o dashboard do usuário
      router.push("/User/dashboard");
    } else if (isMonitor) {
      // Se for monitor, redireciona para o dashboard do monitor
      router.push("/monitor/dashboard");
    } else {
      // Caso o e-mail e a senha não correspondam a nenhum usuário válido, exibe uma mensagem de erro
      alert("E-mail ou senha inválidos!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-center text-blue-600 text-2xl font-semibold mb-4">
          Monitoria Digital
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Entrar
          </button>

          <div className="mt-3 text-center">
            <Link href="/recuperar-senha" className="text-blue-500 hover:underline">
              Esqueceu sua senha?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
