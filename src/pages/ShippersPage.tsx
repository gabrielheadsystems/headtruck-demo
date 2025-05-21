
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Package, CheckCircle2, ArrowRight } from "lucide-react";

const ShippersPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 bg-brand-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">Para Embarcadores</h1>
              <p className="text-xl text-brand-gray max-w-3xl mx-auto">
                Reduza custos logísticos, encontre transportadores confiáveis e acompanhe suas cargas em tempo real
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-brand-blue">Otimize sua logística</h2>
                <p className="text-lg text-brand-gray mt-4">
                  A Head Truck conecta sua empresa com transportadores verificados, 
                  permitindo economizar até 30% nos custos de frete e garantindo 
                  maior segurança e rastreabilidade no transporte das suas cargas.
                </p>
                
                <div className="space-y-4 mt-6">
                  <div className="flex gap-4 items-start">
                    <div className="bg-brand-red p-2 rounded-full flex-shrink-0">
                      <CheckCircle2 className="text-white" size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-brand-blue">Economia significativa</h4>
                      <p className="text-brand-gray">Reduza seus custos logísticos aproveitando rotas de retorno.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-brand-red p-2 rounded-full flex-shrink-0">
                      <CheckCircle2 className="text-white" size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-brand-blue">Transportadores verificados</h4>
                      <p className="text-brand-gray">Todos os motoristas são verificados e avaliados pela comunidade.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-brand-red p-2 rounded-full flex-shrink-0">
                      <CheckCircle2 className="text-white" size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-brand-blue">Rastreamento em tempo real</h4>
                      <p className="text-brand-gray">Acompanhe suas cargas em tempo real do início ao fim da entrega.</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6">
                  <a href="/cadastrar" className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red/90 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                    Cadastre sua empresa
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Empresário gerenciando logística"
                  className="rounded-lg shadow-lg mx-auto object-cover h-[400px]"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShippersPage;
