Documentação do Projeto - Monitoria Digital
Descrição do Projeto
O projeto Monitoria Digital é uma plataforma destinada ao gerenciamento de monitorias, permitindo a criação de reuniões, visualização de desempenho dos alunos, agendamento de atividades e coleta de feedbacks após as reuniões. O sistema foi desenvolvido utilizando Next.js para o frontend, com TailwindCSS para estilização e Chart.js para gerar gráficos de desempenho.

Estrutura do Projeto
A estrutura do código do projeto foi organizada da seguinte forma:

Estrutura de Pastas

app/
├── admin/
│   ├── cadastro/
│   │   └── page.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   ├── feedbacks/
│   │   └── page.tsx
│   └── monitoria/
│       └── page.tsx
├── login/
│   └── page.tsx
├── monitor/
│   ├── agenda/
│   │   └── page.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   └── monitoria/
│       └── page.tsx
├── recuperar-sents/
│   └── page.tsx
├── user/
│   ├── agenda/
│   │   └── page.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   └── monitoria/
│       └── page.tsx
├── favicon.ico
├── globals.css
└── page.tsx
Descrição das Pastas
admin/: Contém páginas exclusivas para a área administrativa, como cadastro de usuários, dashboard administrativo, feedbacks, e monitorias.

cadastro/page.tsx: Página de cadastro de novos usuários.
dashboard/page.tsx: Dashboard administrativo para monitoramento geral.
feedbacks/page.tsx: Página para visualizar os feedbacks dos alunos.
monitoria/page.tsx: Página para gerenciar as monitorias.
login/: Página de login do sistema.

page.tsx: Formulário de login.
monitor/: Contém páginas voltadas para a gestão das monitorias.

agenda/page.tsx: Página para visualizar e agendar atividades.
dashboard/page.tsx: Dashboard para o monitor exibir dados relevantes.
monitoria/page.tsx: Página específica para gerenciar monitorias.
recuperar-sents/: Página para recuperação de senhas.

page.tsx: Formulário para recuperação de senha.
user/: Contém páginas para o usuário final (estudante).

agenda/page.tsx: Página para o aluno visualizar seu agendamento de monitorias.
dashboard/page.tsx: Dashboard para o aluno exibir seu desempenho e outras informações.
monitoria/page.tsx: Página para o aluno participar das monitorias.
favicon.ico: Ícone do site.

globals.css: Arquivo de estilos globais.

page.tsx: Página principal do sistema, que pode servir de rota inicial ou estrutura base.

Dependências
O projeto utiliza as seguintes dependências:

Dependências Principais
@tailwindcss/vite: Plugin para utilizar o TailwindCSS com Vite.
chart.js: Biblioteca para criar gráficos dinâmicos, utilizada no dashboard e páginas de monitoramento de desempenho.
next: Framework React utilizado para criar as páginas e gerenciar rotas do projeto.
react e react-dom: Bibliotecas fundamentais para a criação de interfaces com o React.
Dependências de Desenvolvimento
@eslint/eslintrc: Ferramenta para configuração do ESLint.
@tailwindcss/postcss: Integração do TailwindCSS com o PostCSS.
@types/node, @types/react, @types/react-dom: Tipagens para trabalhar com Node.js e React no TypeScript.
eslint: Linter para garantir a qualidade do código.
eslint-config-next: Configuração padrão de linting para Next.js.
tailwindcss: Framework CSS para estilização das páginas.
typescript: Suporte a TypeScript no projeto.
Funcionalidade das Páginas
Páginas de Admin
Cadastro: Permite o cadastro de novos usuários (monitorias e alunos).
Dashboard: Exibe o desempenho global das monitorias, incluindo gráficos e informações analíticas.
Feedbacks: Exibe os feedbacks dos alunos sobre as monitorias realizadas.
Monitoria: Gerencia e organiza as monitorias, como criação de novas sessões.
Páginas de Login e Recuperação
Login: Permite que os usuários façam login no sistema.
Recuperar Senha: Permite que os usuários recuperem suas senhas caso tenham esquecido.
Páginas de Monitor
Agenda: Exibe e organiza a agenda de monitorias.
Dashboard: Exibe um painel com informações sobre as monitorias, desempenho e outras métricas.
Monitoria: Permite que o monitor gerencie as sessões de monitoria em andamento.
Páginas de Usuário (Estudante)
Agenda: Exibe a agenda de monitorias agendadas para o aluno.
Dashboard: Exibe o desempenho acadêmico do aluno, incluindo gráficos e análises.
Monitoria: Página onde o aluno pode participar das monitorias agendadas.
Como Rodar o Projeto
Instalação
Clone o repositório para o seu computador:


git clone <url-do-repositorio>
cd monitoriadigital
Instale as dependências:


npm install
Rodando o Projeto em Desenvolvimento

Inicie o servidor de desenvolvimento:

npm run dev
O projeto estará disponível em http://localhost:3000.
Build do Projeto
Para criar uma versão de produção:
npm run build
Para iniciar o servidor de produção:
npm run start
Contribuições
Sinta-se à vontade para contribuir com este projeto. Se você deseja adicionar uma nova funcionalidade ou corrigir um bug, siga os passos abaixo:

Faça um fork deste repositório.
Crie uma nova branch (git checkout -b feature/nome-da-sua-funcionalidade).
Faça suas modificações e adicione testes, se necessário.
Envie um pull request.
Monitoria Digital é um projeto com o objetivo de melhorar a experiência de aprendizado por meio de monitorias e acompanhamento do desempenho. Esperamos que este projeto seja útil e fácil de usar!