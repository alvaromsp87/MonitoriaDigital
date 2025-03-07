import Link from "next/link"; // Importa o Link do Next.js

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold">Bem-vindo ao Monitoria Digital</h1>
      <p className="mt-4 text-lg">Seu app de monitoria escolar com suporte interativo.</p>

      {/* Botão de redirecionamento para a página de login */}
      <div className="mt-8">
        <Link href="/login">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Ir para Login
          </button>
        </Link>
      </div>
    </main>
  );
}
