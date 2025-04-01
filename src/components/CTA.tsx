
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 bg-brand-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para revolucionar sua logística de transporte?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Junte-se a milhares de transportadores e embarcadores que já estão economizando tempo e dinheiro com nossa plataforma inteligente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cadastrar">
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg w-full sm:w-auto">
                Começar Agora
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Link to="/contato">
              <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg w-full sm:w-auto">
                Fale Conosco
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-gray-300">
            Sem contratos de longo prazo. Cancele quando quiser.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
