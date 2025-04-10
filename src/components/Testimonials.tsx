
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "Caminhoneiro Autônomo",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    rating: 5,
    testimonial: "Desde que comecei a usar o Head Truck, reduzi em 70% minhas viagens vazias. O aplicativo encontra cargas no meu caminho de volta que combinam perfeitamente com meu caminhão."
  },
  {
    id: 2,
    name: "Ana Transportes Ltda",
    role: "Empresa de Logística",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    rating: 5,
    testimonial: "Como empresa de transporte, o Head Truck nos ajudou a otimizar nossa frota. Conseguimos reduzir custos operacionais e aumentar nossa eficiência em mais de 30%."
  },
  {
    id: 3,
    name: "Roberto Santos",
    role: "Gestor de Logística",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 4,
    testimonial: "Nossa empresa precisava de uma solução para encontrar transportadores confiáveis rapidamente. A plataforma nos conectou com profissionais verificados e reduziu nossos custos com frete."
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-black">
      <div className="ferrari-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <h2 className="section-title text-white mb-6 md:mb-0">
            Depoimentos
          </h2>
          <p className="text-white/70 max-w-lg">
            Descubra como o Head Truck está transformando a logística de transporte no Brasil, com histórias reais de quem já utiliza nossa plataforma.
          </p>
        </div>
        
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-brand-gray p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-brand-red"
                    />
                    <div>
                      <h4 className="font-semibold text-lg text-white">{item.name}</h4>
                      <p className="text-sm text-white/70">{item.role}</p>
                      <div className="flex mt-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star 
                            key={index}
                            size={16}
                            className={index < item.rating ? "fill-brand-red text-brand-red" : "text-gray-600"}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80 italic flex-grow">"{item.testimonial}"</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 bg-black text-white border-brand-red hover:bg-brand-red hover:text-white" />
          <CarouselNext className="right-0 bg-black text-white border-brand-red hover:bg-brand-red hover:text-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
