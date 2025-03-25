// components/AuthForm.tsx
interface AuthFormProps {
    isSignUp: boolean;
  }
  
  export default function AuthForm({ isSignUp }: AuthFormProps) {
    return (
      <form className="space-y-4">
        {isSignUp && (
          <input type="text" placeholder="Nome" className="w-full px-4 py-2 border rounded-md" />
        )}
        <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md" />
        <input type="password" placeholder="Senha" className="w-full px-4 py-2 border rounded-md" />
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          {isSignUp ? "Cadastrar" : "Entrar"}
        </button>
      </form>
    );
  }
  