
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486551937199-baf066858de7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Estrada"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 ferrari-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-8">
            Revolucione sua Logística <span className="text-brand-red">Agora</span>
          </h2>
          <p className="text-xl text-white/80 mb-10 font-light">
            Junte-se a milhares de transportadores e embarcadores que já estão economizando tempo e dinheiro com nossa plataforma inteligente.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/cadastrar">
              <Button className="bg-brand-red hover:bg-brand-red/90 text-white px-10 py-6 text-lg uppercase tracking-wider font-medium rounded-none w-full sm:w-auto">
                Começar Agora
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Link to="/contato">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-6 text-lg uppercase tracking-wider font-medium rounded-none w-full sm:w-auto">
                Fale Conosco
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-white/60 text-sm">
            Sem contratos de longo prazo. Cancele quando quiser.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
