"use client";
import { useState, useEffect } from "react";

export default function Agenda() {
  // Estado para armazenar as reuniões agendadas
  const [meetings, setMeetings] = useState<{ roomName: string; date: string; turma?: string }[]>([]);
  // Estado para armazenar a data da reunião
  const [meetingDate, setMeetingDate] = useState<string>("");
  // Estado para armazenar o nome da turma (opcional)
  const [turma, setTurma] = useState<string>("");

  // Hook useEffect para carregar as reuniões agendadas salvas no localStorage ao carregar o componente
  useEffect(() => {
    const storedMeetings = localStorage.getItem("meetings");
    // Se houver reuniões armazenadas, converte e armazena no estado
    if (storedMeetings) {
      setMeetings(JSON.parse(storedMeetings));
    }
  }, []); // Dependência vazia, significa que a função roda apenas uma vez após o primeiro render

  // Função para agendar uma nova reunião
  const handleSchedule = () => {
    // Verifica se a data da reunião foi preenchida
    if (!meetingDate.trim()) {
      alert("Por favor, selecione uma data e hora.");
      return; // Se não preencher, não permite o agendamento
    }

    // Cria um novo objeto de reunião com a data formatada
    const newMeeting = {
      roomName: `meeting-${Date.now()}`, // Nome da sala gerado com timestamp único
      date: new Date(meetingDate).toLocaleString(), // Formata a data no formato legível
      turma: turma.trim() ? turma : undefined, // Se a turma for fornecida, armazena, senão deixa undefined
    };

    // Atualiza a lista de reuniões com a nova reunião agendada
    const updatedMeetings = [...meetings, newMeeting];
    setMeetings(updatedMeetings);
    // Salva a lista de reuniões no localStorage para persistência
    localStorage.setItem("meetings", JSON.stringify(updatedMeetings));

    // Limpa os campos após o agendamento
    setMeetingDate("");
    setTurma("");
  };

  // Função para excluir uma reunião
  const handleDeleteMeeting = (roomName: string) => {
    // Filtra a reunião com base no nome da sala, removendo a reunião a ser excluída
    const updatedMeetings = meetings.filter(meeting => meeting.roomName !== roomName);
    setMeetings(updatedMeetings);
    // Atualiza o localStorage com a lista de reuniões atualizada
    localStorage.setItem("meetings", JSON.stringify(updatedMeetings));
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">📅 Agenda de Monitorias</h2>

      {/* Formulário de Agendamento */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-4">📌 Agendar Nova Reunião</h3>
        {/* Campo para selecionar a data e hora da reunião */}
        <input
          type="datetime-local"
          value={meetingDate}
          onChange={(e) => setMeetingDate(e.target.value)} // Atualiza a data conforme o usuário seleciona
          className="block w-full p-2 border rounded mb-4"
        />
        {/* Campo opcional para inserir a turma */}
        <input
          type="text"
          placeholder="Turma (opcional)"
          value={turma}
          onChange={(e) => setTurma(e.target.value)} // Atualiza a turma conforme o usuário digita
          className="block w-full p-2 border rounded mb-4"
        />
        {/* Botão para agendar a reunião */}
        <button
          onClick={handleSchedule} // Chama a função de agendamento ao clicar
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
        >
          Agendar Reunião
        </button>
      </div>

      {/* Lista de Reuniões Agendadas */}
      <h3 className="text-xl font-semibold mt-6 mb-4">📋 Reuniões Agendadas</h3>
      {/* Condicional para exibir mensagem caso não haja reuniões agendadas */}
      {meetings.length === 0 ? (
        <p className="text-gray-600">Nenhuma reunião agendada.</p>
      ) : (
        <ul className="space-y-4">
          {/* Mapeia as reuniões agendadas e exibe as informações de cada uma */}
          {meetings.map((meeting) => (
            <li key={meeting.roomName} className="bg-white p-4 rounded shadow-md flex justify-between items-center">
              <div>
                <p><strong>📆 Data:</strong> {meeting.date}</p>
                {/* Exibe a turma apenas se ela estiver definida */}
                {meeting.turma && <p><strong>🏫 Turma:</strong> {meeting.turma}</p>}
                <p><strong>🔗 Sala:</strong> {meeting.roomName}</p>
                {/* Link para acessar a reunião usando o nome da sala como parâmetro */}
                <a
                  href={`./Monitoria?room=${meeting.roomName}`}
                  target="_blank"
                  className="text-blue-500 underline"
                >
                  👉 Entrar na reunião
                </a>
              </div>
              {/* Botão para excluir a reunião */}
              <button
                onClick={() => handleDeleteMeeting(meeting.roomName)} // Chama a função para excluir a reunião
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
