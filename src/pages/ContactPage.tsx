
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log({ name, email, message });
    toast({
      title: "Mensagem enviada",
      description: "Entraremos em contato em breve!",
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 bg-brand-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">Contato</h1>
              <p className="text-xl text-brand-gray max-w-3xl mx-auto">
                Estamos aqui para ajudar. Entre em contato com nossa equipe para mais informações.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-brand-blue mb-6">Envie uma mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-brand-gray font-medium mb-2">Nome</label>
                    <Input 
                      id="name" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      placeholder="Seu nome"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-brand-gray font-medium mb-2">Email</label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder="seu.email@exemplo.com"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-brand-gray font-medium mb-2">Mensagem</label>
                    <Textarea 
                      id="message" 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)} 
                      placeholder="Como podemos ajudar?"
                      required
                      className="w-full min-h-[150px]"
                    />
                  </div>
                  <Button type="submit" className="bg-brand-red hover:bg-brand-red/90 text-white w-full">
                    <Send className="mr-2 h-4 w-4" /> Enviar mensagem
                  </Button>
                </form>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-brand-blue mb-6">Informações de contato</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-brand-blue/10 p-3 rounded-full">
                        <Phone className="text-brand-red h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-blue">Telefone</h3>
                        <p className="text-brand-gray">(31) 9999-9999</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-brand-blue/10 p-3 rounded-full">
                        <Mail className="text-brand-red h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-blue">Email</h3>
                        <p className="text-brand-gray">contato@headtruck.com.br</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-brand-blue/10 p-3 rounded-full">
                        <MapPin className="text-brand-red h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-blue">Endereço</h3>
                        <p className="text-brand-gray">R. João Alves Ferreira, 322 - Esmeraldas, Sete Lagoas, MG, Brasil</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-brand-blue mb-4">Horário de atendimento</h2>
                  <p className="text-brand-gray mb-4">Estamos disponíveis nos seguintes horários:</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-brand-blue">Segunda - Sexta</span>
                      <span className="text-brand-gray">08:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-brand-blue">Sábado</span>
                      <span className="text-brand-gray">09:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-brand-blue">Domingo</span>
                      <span className="text-brand-gray">Fechado</span>
                    </div>
                  </div>
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

export default ContactPage;
