
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80" 
          alt="Caminhão em estrada"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center ferrari-container">
        <div className="max-w-2xl space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-white">
            Head Truck
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light">
            Otimize seu frete de retorno e aumente sua lucratividade com inteligência artificial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Link to="/cadastrar">
              <Button className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-6 text-lg uppercase tracking-wider font-medium rounded-none w-full sm:w-auto">
                Começar Agora
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Banner - Ferrari style horizontal stripe */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm py-10 z-10">
        <div className="ferrari-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <h3 className="feature-title text-brand-red mb-2">Encontre Cargas</h3>
              <p className="text-white/80 text-sm">Acesse milhares de oportunidades de frete disponíveis para o seu retorno.</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <h3 className="feature-title text-brand-red mb-2">Match Inteligente</h3>
              <p className="text-white/80 text-sm">Nossa IA encontra as cargas mais adequadas para sua rota e preferências.</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
              <h3 className="feature-title text-brand-red mb-2">Otimize Rotas</h3>
              <p className="text-white/80 text-sm">Planeje seus percursos com eficiência maximizando sua rentabilidade.</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{animationDelay: '0.8s'}}>
              <h3 className="feature-title text-brand-red mb-2">Economize Tempo</h3>
              <p className="text-white/80 text-sm">Reduza o tempo ocioso e aumente o tempo produtivo da sua frota.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
