
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Package, Map, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="hero-gradient text-white">
      {/* Main Hero */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Otimize seu frete de retorno e aumente sua lucratividade
            </h1>
            <p className="text-xl text-gray-200 max-w-xl">
              Conectamos transportadores a cargas disponíveis utilizando inteligência artificial para encontrar as melhores oportunidades no seu caminho de volta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/cadastrar">
                <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg w-full sm:w-auto">
                  Começar Agora
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link to="/como-funciona">
                <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg w-full sm:w-auto">
                  Como Funciona
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-brand-orange rounded-full opacity-20"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-orange rounded-full opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80" 
              alt="Caminhão em estrada"
              className="rounded-lg shadow-2xl max-w-full animate-fade-in"
            />
          </div>
        </div>
      </div>
      
      {/* Features */}
      <div className="bg-white/10 backdrop-blur-sm py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors">
              <div className="bg-brand-orange/20 p-3 rounded-full w-fit mb-4">
                <Truck className="text-brand-orange" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Encontre Cargas</h3>
              <p className="text-gray-200">Acesse milhares de oportunidades de frete disponíveis para o seu retorno.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors">
              <div className="bg-brand-orange/20 p-3 rounded-full w-fit mb-4">
                <Package className="text-brand-orange" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Match Inteligente</h3>
              <p className="text-gray-200">Nossa IA encontra as cargas mais adequadas para sua rota e preferências.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors">
              <div className="bg-brand-orange/20 p-3 rounded-full w-fit mb-4">
                <Map className="text-brand-orange" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Otimize Rotas</h3>
              <p className="text-gray-200">Planeje seus percursos com eficiência maximizando sua rentabilidade.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors">
              <div className="bg-brand-orange/20 p-3 rounded-full w-fit mb-4">
                <Clock className="text-brand-orange" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Economize Tempo</h3>
              <p className="text-gray-200">Reduza o tempo ocioso e aumente o tempo produtivo da sua frota.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
