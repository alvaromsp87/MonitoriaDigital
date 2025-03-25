"use client"; // Indica que este é um componente cliente (React), necessário para uso de hooks no Next.js

import { useState } from "react"; // Importa o hook useState para gerenciar estados locais
import { useRouter } from "next/navigation"; // Importa o useRouter para navegação dentro do Next.js
import { motion } from "framer-motion"; // Importa motion para animações
import Image from "next/image"; // Importa o componente Image do Next.js para otimização de imagens

export default function Login() {
  // Estados para armazenar dados do usuário e alternar entre login e cadastro
  const [email, setEmail] = useState(""); // Estado para armazenar o e-mail do usuário
  const [password, setPassword] = useState(""); // Estado para armazenar a senha do usuário
  const [isSignUp, setIsSignUp] = useState(false); // Estado para alternar entre login e cadastro

  const router = useRouter(); // Instância do roteador para redirecionamento de páginas

  // Função que será executada quando o formulário for enviado
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário de recarregar a página

    // Simulação de autenticação com base em e-mail e senha fixos
    const isAdmin = email === "admin@exemplo.com" && password === "123456"; // Verifica se o usuário é admin
    const isUser = email === "user@exemplo.com" && password === "123456"; // Verifica se é um usuário comum
    const isMonitor = email === "monitor@exemplo.com" && password === "123456"; // Verifica se é um monitor

    // Redireciona o usuário para a página correspondente ao seu tipo de conta
    if (isAdmin) router.push("/admin/dashboard");
    else if (isUser) router.push("/User/dashboard");
    else if (isMonitor) router.push("/monitor/dashboard");
    else alert("E-mail ou senha inválidos!"); // Exibe um alerta caso as credenciais estejam erradas
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Container principal que contém a imagem e o formulário */}
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-[900px]">
        
        {/* Seção da imagem - Visível apenas em telas médias para cima (md:block) */}
        <div className="hidden md:block w-1/2 relative">
          <Image
            src="/image/login.png" // Caminho da imagem dentro da pasta public
            alt="Imagem de login" // Texto alternativo para acessibilidade
            layout="fill" // Faz a imagem ocupar todo o espaço disponível do contêiner
            objectFit="cover" // Ajusta a imagem para cobrir toda a área disponível sem distorção
          />
        </div>

        {/* Seção do formulário - Responsiva (ocupa 100% em telas pequenas e 50% em maiores) */}
        <motion.div 
          className="w-full md:w-1/2 p-8 flex flex-col justify-center"
          initial={{ opacity: 0, x: isSignUp ? 100 : -100 }} // Define o estado inicial da animação (deslocado para o lado)
          animate={{ opacity: 1, x: 0 }} // Define a animação ao montar o componente (traz para posição normal)
          transition={{ duration: 0.5 }} // Tempo de duração da animação
        >
          {/* Título da seção, mudando conforme o estado de login/cadastro */}
          <h3 className="text-center text-blue-600 text-2xl font-semibold mb-4">
            {isSignUp ? "Cadastro" : "Monitoria Digital"}
          </h3>
          
          {/* Formulário de login/cadastro */}
          <form onSubmit={handleSubmit}>
            {/* Campo de entrada do e-mail */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium">E-mail</label>
              <input
                type="email"
                id="email"
                value={email} // Controlado pelo estado email
                onChange={(e) => setEmail(e.target.value)} // Atualiza o estado ao digitar
                placeholder="Digite seu e-mail"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required // Campo obrigatório
              />
            </div>

            {/* Campo de entrada da senha */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-medium">Senha</label>
              <input
                type="password"
                id="password"
                value={password} // Controlado pelo estado password
                onChange={(e) => setPassword(e.target.value)} // Atualiza o estado ao digitar
                placeholder="Digite sua senha"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required // Campo obrigatório
              />
            </div>

            {/* Botão de envio do formulário */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              {isSignUp ? "Cadastrar" : "Entrar"} {/* Alterna entre Entrar e Cadastrar */}
            </button>
          </form>

          {/* Botão para alternar entre login e cadastro */}
          <div className="mt-4 text-center">
            <button onClick={() => setIsSignUp(!isSignUp)} className="text-blue-600 hover:underline">
              {isSignUp ? "Já tem uma conta? Entrar" : "Não tem uma conta? Cadastre-se"}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
