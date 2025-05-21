
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would handle authentication
    console.log({ email, password });
    toast({
      title: "Login efetuado",
      description: "Bem-vindo de volta!",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 flex items-center justify-center bg-brand-light">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-brand-blue">Entrar</h1>
            <p className="text-brand-gray mt-2">Acesse sua conta na Head Truck</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-brand-gray font-medium mb-2">Email</label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="seu.email@exemplo.com"
                required
                className="w-full"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-brand-gray font-medium">Senha</label>
                <Link to="/recuperar-senha" className="text-sm text-brand-red hover:underline">
                  Esqueceu a senha?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="••••••••"
                required
                className="w-full"
              />
            </div>
            
            <Button type="submit" className="bg-brand-red hover:bg-brand-red/90 text-white w-full">
              Entrar
            </Button>
          </form>
          
          <div className="text-center mt-6">
            <p className="text-brand-gray">
              Não tem uma conta? {" "}
              <Link to="/cadastrar" className="text-brand-red hover:underline font-medium">
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
