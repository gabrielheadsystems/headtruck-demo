
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Truck, CheckCircle2, ArrowRight } from "lucide-react";

const DriversPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 bg-brand-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">Para Motoristas</h1>
              <p className="text-xl text-brand-gray max-w-3xl mx-auto">
                Maximize seus lucros, elimine viagens vazias e gerencie tudo pelo nosso aplicativo
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt="Motorista usando aplicativo de fretes"
                  className="rounded-lg shadow-lg mx-auto object-cover h-[400px]"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-brand-blue">Transforme sua forma de trabalho</h2>
                <p className="text-lg text-brand-gray">
                  A Head Truck conecta você com embarcadores que precisam das suas rotas, 
                  eliminando viagens vazias e maximizando seus ganhos. Nossa plataforma 
                  simplifica todo o processo, desde a busca de cargas até o pagamento.
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="bg-brand-red p-2 rounded-full flex-shrink-0">
                      <CheckCircle2 className="text-white" size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-brand-blue">Frete garantido</h4>
                      <p className="text-brand-gray">Encontre cargas para suas rotas de retorno e elimine viagens vazias.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-brand-red p-2 rounded-full flex-shrink-0">
                      <CheckCircle2 className="text-white" size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-brand-blue">Pagamento rápido</h4>
                      <p className="text-brand-gray">Receba seus pagamentos em até 3 dias úteis, sem burocracia.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-brand-red p-2 rounded-full flex-shrink-0">
                      <CheckCircle2 className="text-white" size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-brand-blue">Gestão simplificada</h4>
                      <p className="text-brand-gray">Gerencie todas suas cargas, documentos e pagamentos em um só lugar.</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <a href="/cadastrar" className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red/90 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                    Cadastre-se como motorista
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DriversPage;
