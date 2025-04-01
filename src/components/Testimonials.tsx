
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "Caminhoneiro Autônomo",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    rating: 5,
    testimonial: "Desde que comecei a usar o SmartFreightMatch, reduzi em 70% minhas viagens vazias. O aplicativo encontra cargas no meu caminho de volta que combinam perfeitamente com meu caminhão."
  },
  {
    id: 2,
    name: "Ana Transportes Ltda",
    role: "Empresa de Logística",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    rating: 5,
    testimonial: "Como empresa de transporte, o SmartFreightMatch nos ajudou a otimizar nossa frota. Conseguimos reduzir custos operacionais e aumentar nossa eficiência em mais de 30%."
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">O Que Dizem Nossos Usuários</h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            Descubra como o SmartFreightMatch está transformando a logística de transporte no Brasil.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-brand-light rounded-lg p-6 shadow-sm card-hover">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-lg">{item.name}</h4>
                  <p className="text-sm text-brand-gray">{item.role}</p>
                  <div className="flex mt-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star 
                        key={index}
                        size={16}
                        className={index < item.rating ? "fill-brand-orange text-brand-orange" : "text-gray-300"}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-brand-gray italic">"{item.testimonial}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
