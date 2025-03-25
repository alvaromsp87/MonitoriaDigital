
// pages/index.jsx (Página inicial)
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 text-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Bem-vindo ao Monitoria Digital</h1>
        <p className="mt-4 text-lg">Seu app de monitoria escolar com suporte interativo.</p>
        <div className="mt-8">
          <Link href="/login">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Ir para Login
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}