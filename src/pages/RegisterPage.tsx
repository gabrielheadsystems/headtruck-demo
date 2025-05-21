
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("driver");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Erro",
        description: "As senhas não coincidem.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real application, this would handle registration
    console.log({ name, email, password, userType, acceptTerms });
    toast({
      title: "Cadastro realizado",
      description: "Sua conta foi criada com sucesso!",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 flex items-center justify-center bg-brand-light py-12">
        <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-brand-blue">Criar Conta</h1>
            <p className="text-brand-gray mt-2">Junte-se à plataforma Head Truck</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-brand-gray font-medium mb-2">Nome Completo</label>
              <Input 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Seu nome completo"
                required
                className="w-full"
              />
            </div>
            
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="password" className="block text-brand-gray font-medium mb-2">Senha</label>
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
              
              <div>
                <label htmlFor="confirmPassword" className="block text-brand-gray font-medium mb-2">Confirmar Senha</label>
                <Input 
                  id="confirmPassword" 
                  type="password" 
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)} 
                  placeholder="••••••••"
                  required
                  className="w-full"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-brand-gray font-medium mb-3">Tipo de Usuário</label>
              <RadioGroup value={userType} onValueChange={setUserType} className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="driver" id="driver" />
                  <Label htmlFor="driver" className="text-brand-gray">Motorista / Transportador</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="shipper" id="shipper" />
                  <Label htmlFor="shipper" className="text-brand-gray">Embarcador / Empresa</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox 
                id="terms" 
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked as boolean)} 
                required
              />
              <label 
                htmlFor="terms" 
                className="text-sm text-brand-gray cursor-pointer"
              >
                Eu concordo com os <Link to="/termos" className="text-brand-red hover:underline">Termos de Uso</Link> e <Link to="/privacidade" className="text-brand-red hover:underline">Política de Privacidade</Link>.
              </label>
            </div>
            
            <Button 
              type="submit" 
              className="bg-brand-red hover:bg-brand-red/90 text-white w-full"
              disabled={!acceptTerms}
            >
              Criar Conta
            </Button>
          </form>
          
          <div className="text-center mt-6">
            <p className="text-brand-gray">
              Já tem uma conta? {" "}
              <Link to="/entrar" className="text-brand-red hover:underline font-medium">
                Entrar
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterPage;
