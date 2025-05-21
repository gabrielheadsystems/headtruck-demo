
import { CheckCircle2, Truck, Package, Map, Clock, Zap, ArrowRight, Shield, PlusCircle, ChevronDown, ChevronRight, CalendarRange, DollarSign, Smartphone, Award } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect } from "react";

const HowItWorks = () => {
  // Adicionando efeito de rolagem suave para toda a página
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <section id="como-funciona" className="py-16 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Como Funciona</h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto font-medium">
            Nossa plataforma conecta transportadores e embarcadores de forma inteligente, 
            otimizando rotas e maximizando lucros para todos.
          </p>
        </div>
        
        <Tabs defaultValue="general" className="w-full mb-16">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-transparent">
            <TabsTrigger 
              value="general" 
              className="text-lg font-semibold py-3 data-[state=active]:border-b-4 data-[state=active]:border-brand-red rounded-none data-[state=active]:bg-transparent data-[state=active]:text-brand-blue"
            >
              Visão Geral
            </TabsTrigger>
            <TabsTrigger 
              value="drivers" 
              className="text-lg font-semibold py-3 data-[state=active]:border-b-4 data-[state=active]:border-brand-red rounded-none data-[state=active]:bg-transparent data-[state=active]:text-brand-blue"
            >
              Para Motoristas
            </TabsTrigger>
            <TabsTrigger 
              value="shippers" 
              className="text-lg font-semibold py-3 data-[state=active]:border-b-4 data-[state=active]:border-brand-red rounded-none data-[state=active]:bg-transparent data-[state=active]:text-brand-blue"
            >
              Para Embarcadores
            </TabsTrigger>
          </TabsList>
          
          {/* Visão Geral */}
          <TabsContent value="general" className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-brand-blue">Plataforma Completa de Logística</h3>
                <p className="text-lg text-brand-gray">
                  A Head Truck oferece uma solução completa para o setor de transportes,
                  conectando motoristas e embarcadores em uma plataforma única, segura e eficiente.
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="bg-brand-red p-2 rounded-full flex-shrink-0">
                      <CheckCircle2 className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-brand-blue">Tecnologia Avançada</h4>
                      <p className="text-brand-gray">Nossa plataforma usa IA para otimizar rotas e encontrar as melhores combinações de cargas.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-brand-red p-2 rounded-full flex-shrink-0">
                      <CheckCircle2 className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-brand-blue">Economia Real</h4>
                      <p className="text-brand-gray">Motoristas reduzem quilômetros rodados vazios e embarcadores economizam até 30% em fretes.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-brand-red p-2 rounded-full flex-shrink-0">
                      <CheckCircle2 className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-brand-blue">Sustentabilidade</h4>
                      <p className="text-brand-gray">Nossa solução reduz a emissão de poluentes ao evitar viagens com caminhões vazios.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt="Plataforma de logística"
                  className="rounded-lg shadow-lg mx-auto object-cover h-[400px]"
                />
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-brand-blue mb-4">Principais Benefícios</h3>
                <p className="text-brand-gray max-w-2xl mx-auto">Nossa plataforma traz vantagens tanto para transportadores quanto para embarcadores.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-brand-light rounded-lg p-6 card-hover border-t-4 border-brand-red">
                  <div className="bg-brand-blue/10 p-3 rounded-full w-fit mb-4">
                    <Truck className="text-brand-red" size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-brand-blue">Redução de Custos</h4>
                  <p className="text-brand-gray font-medium">Elimine viagens vazias e aumente seu faturamento com fretes de retorno.</p>
                </div>
                
                <div className="bg-brand-light rounded-lg p-6 card-hover border-t-4 border-brand-red">
                  <div className="bg-brand-blue/10 p-3 rounded-full w-fit mb-4">
                    <Package className="text-brand-red" size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-brand-blue">Preços Competitivos</h4>
                  <p className="text-brand-gray font-medium">Embarcadores conseguem melhores preços para transportes estratégicos.</p>
                </div>
                
                <div className="bg-brand-light rounded-lg p-6 card-hover border-t-4 border-brand-red">
                  <div className="bg-brand-blue/10 p-3 rounded-full w-fit mb-4">
                    <Map className="text-brand-red" size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-brand-blue">Otimização de Rotas</h4>
                  <p className="text-brand-gray font-medium">Algoritmos inteligentes para encontrar as melhores combinações de carga e rota.</p>
                </div>
                
                <div className="bg-brand-light rounded-lg p-6 card-hover border-t-4 border-brand-red">
                  <div className="bg-brand-blue/10 p-3 rounded-full w-fit mb-4">
                    <Clock className="text-brand-red" size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-brand-blue">Economia de Tempo</h4>
                  <p className="text-brand-gray font-medium">Processo simplificado e rápido para encontrar cargas ou transportadores.</p>
                </div>
                
                <div className="bg-brand-light rounded-lg p-6 card-hover border-t-4 border-brand-red">
                  <div className="bg-brand-blue/10 p-3 rounded-full w-fit mb-4">
                    <Zap className="text-brand-red" size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-brand-blue">Sustentabilidade</h4>
                  <p className="text-brand-gray font-medium">Reduza a emissão de poluentes ao evitar viagens com caminhões vazios.</p>
                </div>
                
                <div className="bg-brand-light rounded-lg p-6 card-hover border-t-4 border-brand-red">
                  <div className="bg-brand-blue/10 p-3 rounded-full w-fit mb-4">
                    <Shield className="text-brand-red" size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-brand-blue">Segurança</h4>
                  <p className="text-brand-gray font-medium">Transportadores e embarcadores verificados e avaliados pela comunidade.</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Para Motoristas */}
          <TabsContent value="drivers" className="space-y-12" id="para-motoristas">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1580974928064-f0aeef70895a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt="Motorista usando aplicativo de fretes"
                  className="rounded-lg shadow-lg mx-auto object-cover h-[400px]"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <h3 className="text-2xl font-bold text-brand-blue">Para Transportadores</h3>
                <p className="text-lg text-brand-gray">
                  Se você é motorista autônomo ou transportadora, a Head Truck permite que você 
                  maximize seus lucros eliminando a ociosidade do seu veículo e encontrando cargas 
                  para suas rotas de retorno.
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="bg-brand-red p-2 rounded-full flex-shrink-0">
                      <PlusCircle className="text-white" size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-brand-blue">Cadastre-se gratuitamente</h4>
                      <p className="text-brand-gray">Crie seu perfil em minutos, adicione seus veículos e esteja pronto para receber cargas.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-brand-red p-2 rounded-full flex-shrink-0">
                      <Map className="text-white" size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-brand-blue">Informe sua rota</h4>
                      <p className="text-brand-gray">Cadastre sua rota de ida e retorno, com datas e capacidade disponível.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-brand-red p-2 rounded-full flex-shrink-0">
                      <Package className="text-white" size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-brand-blue">Receba ofertas</h4>
                      <p className="text-brand-gray">Nossa IA fará o match com cargas compatíveis com sua rota e tipo de veículo.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-brand-red p-2 rounded-full flex-shrink-0">
                      <DollarSign className="text-white" size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-brand-blue">Negocie e aceite</h4>
                      <p className="text-brand-gray">Analise as propostas, negocie os valores e confirme os fretes que mais te interessam.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
              <h3 className="text-2xl font-bold text-brand-blue mb-6">Perguntas Frequentes - Motoristas</h3>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-semibold text-brand-blue">
                    Quanto custa usar a plataforma?
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-gray">
                    O cadastro e o acesso à plataforma são gratuitos para motoristas e transportadoras. 
                    Cobramos apenas uma pequena taxa sobre os fretes efetivamente realizados através da plataforma.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-semibold text-brand-blue">
                    Como recebo o pagamento pelos fretes?
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-gray">
                    Após a confirmação da entrega, o pagamento é processado em até 3 dias úteis 
                    diretamente na sua conta bancária cadastrada ou via PIX.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-semibold text-brand-blue">
                    Que tipo de veículos posso cadastrar?
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-gray">
                    Nossa plataforma aceita todos os tipos de veículos de carga, desde pequenos 
                    utilitários até grandes carretas e bi-trens. Você pode cadastrar quantos 
                    veículos desejar sob o mesmo perfil.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-semibold text-brand-blue">
                    Preciso ter dispositivo para rastreamento?
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-gray">
                    Para cargas de maior valor, embarcadores podem exigir rastreamento. 
                    Você pode usar nosso aplicativo móvel que serve como rastreador ou 
                    integrar seu sistema atual de rastreamento com nossa plataforma.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-t-4 border-brand-red">
                <CardHeader>
                  <div className="bg-brand-blue/10 p-3 rounded-full w-fit mb-2">
                    <Award className="text-brand-red" size={24} />
                  </div>
                  <CardTitle className="text-xl font-bold text-brand-blue">Classificação de Motoristas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black font-medium">
                    Construa sua reputação, receba avaliações positivas e ganhe prioridade 
                    em fretes de maior valor. Motoristas bem avaliados recebem badges 
                    especiais visíveis para embarcadores.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-brand-red">
                <CardHeader>
                  <div className="bg-brand-blue/10 p-3 rounded-full w-fit mb-2">
                    <CalendarRange className="text-brand-red" size={24} />
                  </div>
                  <CardTitle className="text-xl font-bold text-brand-blue">Planejamento Antecipado</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black font-medium">
                    Cadastre suas rotas com antecedência e receba ofertas de fretes enquanto 
                    ainda está em viagem. Otimize seu tempo e nunca fique sem carga.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-brand-red">
                <CardHeader>
                  <div className="bg-brand-blue/10 p-3 rounded-full w-fit mb-2">
                    <Smartphone className="text-brand-red" size={24} />
                  </div>
                  <CardTitle className="text-xl font-bold text-brand-blue">Aplicativo Móvel</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black font-medium">
                    Gerencie fretes, receba notificações de novas cargas, confirme coletas e 
                    entregas, tudo pelo nosso aplicativo móvel disponível para Android e iOS.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Para Embarcadores */}
          <TabsContent value="shippers" className="space-y-12" id="para-embarcadores">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Empresário gerenciando logística"
                  className="rounded-lg shadow-lg mx-auto object-cover h-[400px]"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-brand-blue">Para Embarcadores</h3>
                <p className="text-lg text-brand-gray">
                  Empresas que precisam transportar cargas encontram na Head Truck uma solução 
                  completa para reduzir custos logísticos e aumentar a eficiência no transporte.
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="bg-brand-red p-2 rounded-full flex-shrink-0">
                      <PlusCircle className="text-white" size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-brand-blue">Cadastre sua empresa</h4>
                      <p className="text-brand-gray">Processo simples, rápido e com validação de segurança para garantir a confiabilidade da plataforma.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-brand-red p-2 rounded-full flex-shrink-0">
                      <Package className="text-white" size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-brand-blue">Anuncie suas cargas</h4>
                      <p className="text-brand-gray">Publique detalhes da carga, rota, prazos e receba propostas de transportadores.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-brand-red p-2 rounded-full flex-shrink-0">
                      <Truck className="text-white" size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-brand-blue">Escolha os melhores transportadores</h4>
                      <p className="text-brand-gray">Veja avaliações, histórico e escolha transportadores verificados e confiáveis.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-brand-red p-2 rounded-full flex-shrink-0">
                      <Map className="text-white" size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-brand-blue">Acompanhe em tempo real</h4>
                      <p className="text-brand-gray">Monitore o status da entrega e a localização da sua carga durante todo o percurso.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
              <h3 className="text-2xl font-bold text-brand-blue mb-6">Perguntas Frequentes - Embarcadores</h3>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-semibold text-brand-blue">
                    Como garantem a segurança das cargas?
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-gray">
                    Todos os transportadores passam por verificação documental rigorosa. 
                    Além disso, oferecemos seguro de carga opcional e rastreamento em tempo real 
                    para maior tranquilidade no transporte.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-semibold text-brand-blue">
                    Qual a economia média nos fretes?
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-gray">
                    Nossos clientes reportam economia média de 15% a 30% nos custos de frete, 
                    principalmente em rotas de retorno onde os transportadores já estariam em 
                    deslocamento.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-semibold text-brand-blue">
                    Posso integrar com meu sistema de gestão?
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-gray">
                    Sim, oferecemos APIs de integração para os principais sistemas ERP e TMS do 
                    mercado. Nossa equipe técnica oferece suporte completo para a integração.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-semibold text-brand-blue">
                    Como funciona o pagamento aos transportadores?
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-gray">
                    Os valores são previamente acordados e após a confirmação de entrega, 
                    processamos o pagamento em até 3 dias úteis. Para empresas, oferecemos 
                    planos com faturamento mensal e prazos de pagamento estendidos.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-t-4 border-brand-red">
                <CardHeader>
                  <div className="bg-brand-blue/10 p-3 rounded-full w-fit mb-2">
                    <Shield className="text-brand-red" size={24} />
                  </div>
                  <CardTitle className="text-xl font-bold text-brand-blue">Segurança e Confiabilidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black font-medium">
                    Transportadores verificados, seguro de carga opcional e sistema de avaliações 
                    garantem a qualidade do serviço e a proteção de suas mercadorias.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-brand-red">
                <CardHeader>
                  <div className="bg-brand-blue/10 p-3 rounded-full w-fit mb-2">
                    <DollarSign className="text-brand-red" size={24} />
                  </div>
                  <CardTitle className="text-xl font-bold text-brand-blue">Economia Significativa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black font-medium">
                    Reduza custos de transporte aproveitando caminhões que já estariam na rota. 
                    Compare propostas e escolha a melhor combinação de preço e serviço.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-brand-red">
                <CardHeader>
                  <div className="bg-brand-blue/10 p-3 rounded-full w-fit mb-2">
                    <Clock className="text-brand-red" size={24} />
                  </div>
                  <CardTitle className="text-xl font-bold text-brand-blue">Agilidade Operacional</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black font-medium">
                    Encontre transportadores disponíveis em minutos, sem ligações telefônicas ou 
                    longas negociações. Todo processo é digital, rápido e eficiente.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default HowItWorks;
