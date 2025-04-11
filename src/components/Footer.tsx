
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <p className="text-gray-300 mb-4">
              Conectando transportadores a cargas disponíveis. Economize tempo e dinheiro otimizando suas viagens de retorno.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com" className="text-gray-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/como-funciona" className="text-gray-300 hover:text-white transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link to="/motoristas" className="text-gray-300 hover:text-white transition-colors">
                  Para Motoristas
                </Link>
              </li>
              <li>
                <Link to="/embarcadores" className="text-gray-300 hover:text-white transition-colors">
                  Para Embarcadores
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/marketplace" className="text-gray-300 hover:text-white transition-colors">
                  Marketplace de Fretes
                </Link>
              </li>
              <li>
                <Link to="/frete-retorno" className="text-gray-300 hover:text-white transition-colors">
                  Frete de Retorno
                </Link>
              </li>
              <li>
                <Link to="/match-inteligente" className="text-gray-300 hover:text-white transition-colors">
                  Match Inteligente
                </Link>
              </li>
              <li>
                <Link to="/rastreamento" className="text-gray-300 hover:text-white transition-colors">
                  Rastreamento de Cargas
                </Link>
              </li>
              <li>
                <Link to="/app" className="text-gray-300 hover:text-white transition-colors">
                  Aplicativo Móvel
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>R. João Alves Ferreira, 322 - Esmeraldas, Sete Lagoas, MG, Brasil</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} />
                <span>(31) 9999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} />
                <span>contato@headtruck.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Head Truck. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
