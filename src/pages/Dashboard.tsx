
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FreightSearch from "@/components/FreightSearch";
import FreightCard, { FreightCardProps } from "@/components/FreightCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mockFreights: FreightCardProps[] = [
  {
    id: "F8273",
    origin: "São Paulo, SP",
    destination: "Rio de Janeiro, RJ",
    date: "28/10/2023",
    cargoType: "Carga Geral",
    weight: "12 ton",
    price: "R$ 2.850,00",
    distance: "430 km",
    isMatch: true
  },
  {
    id: "F8274",
    origin: "Curitiba, PR",
    destination: "São Paulo, SP",
    date: "29/10/2023",
    cargoType: "Granel",
    weight: "18 ton",
    price: "R$ 3.200,00",
    distance: "408 km",
    isMatch: true
  },
  {
    id: "F8275",
    origin: "Belo Horizonte, MG",
    destination: "Brasília, DF",
    date: "30/10/2023",
    cargoType: "Carga Refrigerada",
    weight: "8 ton",
    price: "R$ 4.100,00",
    distance: "716 km"
  },
  {
    id: "F8276",
    origin: "Salvador, BA",
    destination: "Recife, PE",
    date: "01/11/2023",
    cargoType: "Carga Geral",
    weight: "15 ton",
    price: "R$ 3.750,00",
    distance: "830 km"
  },
  {
    id: "F8277",
    origin: "Porto Alegre, RS",
    destination: "Florianópolis, SC",
    date: "02/11/2023",
    cargoType: "Granel",
    weight: "22 ton",
    price: "R$ 2.950,00",
    distance: "476 km"
  },
  {
    id: "F8278",
    origin: "Goiânia, GO",
    destination: "Brasília, DF",
    date: "03/11/2023",
    cargoType: "Carga Geral",
    weight: "10 ton",
    price: "R$ 1.850,00",
    distance: "209 km"
  }
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("todos");
  
  // Filtrar fretes baseados na aba ativa
  const filteredFreights = activeTab === "matches" 
    ? mockFreights.filter(freight => freight.isMatch) 
    : mockFreights;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-brand-light py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-brand-blue mb-6">Marketplace de Fretes</h1>
          
          <FreightSearch />
          
          <div className="mt-8">
            <Tabs defaultValue="todos" onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="todos">Todos os Fretes</TabsTrigger>
                <TabsTrigger value="matches">Matches Recomendados</TabsTrigger>
              </TabsList>
              <TabsContent value="todos" className="space-y-0">
                <p className="text-brand-gray mb-4">Mostrando {filteredFreights.length} fretes disponíveis</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredFreights.map((freight) => (
                    <FreightCard key={freight.id} {...freight} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="matches" className="space-y-0">
                <p className="text-brand-gray mb-4">Mostrando {filteredFreights.length} matches recomendados para você</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredFreights.map((freight) => (
                    <FreightCard key={freight.id} {...freight} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
