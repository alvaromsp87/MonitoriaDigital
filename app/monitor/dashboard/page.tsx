"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Importa a biblioteca Chart.js para criar gráficos

export default function Dashboard() {
  // Cria uma referência para o elemento canvas onde o gráfico será desenhado
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  // Hook useEffect para rodar apenas uma vez após o primeiro render
  useEffect(() => {
    // Verifica se o canvas (chartRef.current) existe
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d"); // Obtém o contexto 2D do canvas

      // Se o contexto for válido, cria o gráfico
      if (ctx) {
        new Chart(ctx, {
          type: "bar", // Define o tipo de gráfico como barra
          data: {
            labels: ["PW 2", "BD 2", "PAM", "APS", "DS 1", "SE"], // Labels (eixo X) do gráfico
            datasets: [
              {
                label: "Desempenho (%)", // Título da série de dados
                data: [80, 70, 85, 60, 90, 30], // Dados (eixo Y) do gráfico
                backgroundColor: ["#3b82f6", "#10b981", "#facc15", "#ef4444", "#8b5cf6", "#6b7280"], // Cores para as barras
              },
            ],
          },
          options: {
            responsive: true, // Faz o gráfico responsivo (ajustando o tamanho conforme a tela)
            maintainAspectRatio: false, // Permite que o gráfico ajuste a altura e largura de forma independente
            scales: {
              y: { beginAtZero: true }, // Define que o eixo Y começará em 0
            },
          },
        });
      }
    }
  }, []); // A dependência vazia faz com que o efeito seja executado apenas uma vez após o primeiro render

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <nav className="bg-red-800 text-white w-64 p-6 shadow-md">
        <h4 className="text-center text-xl font-semibold mb-6">Monitoria Digital</h4>
        <h5 className="text-center text-xl font-semibold mb-6">Monitor</h5>
        <ul className="space-y-3">
          <li>
            <a className="block px-4 py-2 rounded hover:bg-blue-600 transition" href="./agenda">Agenda</a>
          </li>
          <li>
            <a className="block px-4 py-2 rounded hover:bg-blue-600 transition" href="./monitoria">Monitorias</a>
          </li>
          <li>
            <a className="block px-4 py-2 rounded hover:bg-blue-600 transition" href="\">Sair</a> {/* Link para sair */}
          </li>
        </ul>
      </nav>

      {/* Conteúdo Principal */}
      <div className="flex-1 p-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Bem-vindo ao Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Agenda Placeholder */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h5 className="text-lg font-semibold mb-4">Agenda de Monitorias</h5>
            <div className="flex justify-center items-center bg-gray-100 border h-52 text-gray-500 text-lg">
              Calendário Placeholder {/* Placeholder para o calendário */}
            </div>
          </div>

          {/* Gráfico de Desempenho */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h5 className="text-lg font-semibold mb-4">Desempenho dos Alunos</h5>
            <div className="h-52">
              {/* Canvas para desenhar o gráfico */}
              <canvas ref={chartRef}></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
