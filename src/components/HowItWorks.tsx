
import { CheckCircle2, Truck, Package, Map, Clock, Zap } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Como Funciona</h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            Nossa plataforma conecta transportadores e embarcadores de forma inteligente, 
            otimizando rotas e maximizando lucros para todos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1591375372061-47043053dc5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              alt="Smartphone mostrando app de fretes"
              className="rounded-lg shadow-md mx-auto"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-brand-blue">Para Transportadores</h3>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="text-brand-orange flex-shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-medium text-lg">Cadastre-se gratuitamente</h4>
                  <p className="text-brand-gray">Crie seu perfil, adicione seus veículos e defina suas preferências de carga e rotas.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="text-brand-orange flex-shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-medium text-lg">Informe sua rota</h4>
                  <p className="text-brand-gray">Indique seu destino e quando estará disponível para o frete de retorno.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="text-brand-orange flex-shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-medium text-lg">Receba matches personalizados</h4>
                  <p className="text-brand-gray">Nossa IA sugere as melhores cargas compatíveis com sua rota e veículo.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="text-brand-orange flex-shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-medium text-lg">Negocie e confirme</h4>
                  <p className="text-brand-gray">Entre em contato, negocie valores e confirme o transporte diretamente pelo app.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1 space-y-6">
            <h3 className="text-2xl font-semibold text-brand-blue">Para Embarcadores</h3>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="text-brand-orange flex-shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-medium text-lg">Cadastre sua empresa</h4>
                  <p className="text-brand-gray">Crie seu perfil empresarial e comece a cadastrar suas cargas.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="text-brand-orange flex-shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-medium text-lg">Publique suas cargas</h4>
                  <p className="text-brand-gray">Informe origem, destino, tipo de carga, peso, dimensões e prazos.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="text-brand-orange flex-shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-medium text-lg">Receba propostas qualificadas</h4>
                  <p className="text-brand-gray">Encontre transportadores verificados já na rota ideal para sua carga.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="text-brand-orange flex-shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-medium text-lg">Economize e acompanhe</h4>
                  <p className="text-brand-gray">Reduza custos com fretes e acompanhe sua carga em tempo real.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Empresário gerenciando logística"
              className="rounded-lg shadow-md mx-auto"
            />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-semibold text-brand-blue mb-4">Principais Benefícios</h3>
            <p className="text-brand-gray max-w-2xl mx-auto">Nossa plataforma traz vantagens tanto para transportadores quanto para embarcadores.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-brand-light rounded-lg p-6 card-hover">
              <div className="bg-brand-blue/10 p-3 rounded-full w-fit mb-4">
                <Truck className="text-brand-blue" size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-brand-blue">Redução de Custos</h4>
              <p className="text-brand-gray">Elimine viagens vazias e aumente seu faturamento com fretes de retorno.</p>
            </div>
            
            <div className="bg-brand-light rounded-lg p-6 card-hover">
              <div className="bg-brand-blue/10 p-3 rounded-full w-fit mb-4">
                <Package className="text-brand-blue" size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-brand-blue">Preços Competitivos</h4>
              <p className="text-brand-gray">Embarcadores conseguem melhores preços para transportes estratégicos.</p>
            </div>
            
            <div className="bg-brand-light rounded-lg p-6 card-hover">
              <div className="bg-brand-blue/10 p-3 rounded-full w-fit mb-4">
                <Map className="text-brand-blue" size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-brand-blue">Otimização de Rotas</h4>
              <p className="text-brand-gray">Algoritmos inteligentes para encontrar as melhores combinações de carga e rota.</p>
            </div>
            
            <div className="bg-brand-light rounded-lg p-6 card-hover">
              <div className="bg-brand-blue/10 p-3 rounded-full w-fit mb-4">
                <Clock className="text-brand-blue" size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-brand-blue">Economia de Tempo</h4>
              <p className="text-brand-gray">Processo simplificado e rápido para encontrar cargas ou transportadores.</p>
            </div>
            
            <div className="bg-brand-light rounded-lg p-6 card-hover">
              <div className="bg-brand-blue/10 p-3 rounded-full w-fit mb-4">
                <Zap className="text-brand-blue" size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-brand-blue">Sustentabilidade</h4>
              <p className="text-brand-gray">Reduza a emissão de poluentes ao evitar viagens com caminhões vazios.</p>
            </div>
            
            <div className="bg-brand-light rounded-lg p-6 card-hover">
              <div className="bg-brand-blue/10 p-3 rounded-full w-fit mb-4">
                <CheckCircle2 className="text-brand-blue" size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-brand-blue">Segurança</h4>
              <p className="text-brand-gray">Transportadores e embarcadores verificados e avaliados pela comunidade.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
