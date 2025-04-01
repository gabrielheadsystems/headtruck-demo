
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Truck size={28} className="text-brand-blue" />
          <span className="text-xl font-bold text-brand-blue">SmartFreightMatch</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-brand-gray" />
          ) : (
            <Menu className="h-6 w-6 text-brand-gray" />
          )}
        </button>
        
        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className="text-brand-gray hover:text-brand-blue transition-colors">
            Início
          </Link>
          <Link to="/como-funciona" className="text-brand-gray hover:text-brand-blue transition-colors">
            Como Funciona
          </Link>
          <Link to="/motoristas" className="text-brand-gray hover:text-brand-blue transition-colors">
            Para Motoristas
          </Link>
          <Link to="/embarcadores" className="text-brand-gray hover:text-brand-blue transition-colors">
            Para Embarcadores
          </Link>
          <Link to="/contato" className="text-brand-gray hover:text-brand-blue transition-colors">
            Contato
          </Link>
        </div>
        
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/entrar">
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
              Entrar
            </Button>
          </Link>
          <Link to="/cadastrar">
            <Button className="bg-brand-blue text-white hover:bg-brand-blue/90">
              Cadastrar
            </Button>
          </Link>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50 animate-fade-in">
            <div className="flex flex-col p-4">
              <Link 
                to="/" 
                className="py-2 text-brand-gray hover:text-brand-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/como-funciona" 
                className="py-2 text-brand-gray hover:text-brand-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Como Funciona
              </Link>
              <Link 
                to="/motoristas" 
                className="py-2 text-brand-gray hover:text-brand-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Para Motoristas
              </Link>
              <Link 
                to="/embarcadores" 
                className="py-2 text-brand-gray hover:text-brand-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Para Embarcadores
              </Link>
              <Link 
                to="/contato" 
                className="py-2 text-brand-gray hover:text-brand-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <div className="flex gap-4 mt-4">
                <Link to="/entrar" className="flex-1" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                    Entrar
                  </Button>
                </Link>
                <Link to="/cadastrar" className="flex-1" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-brand-blue text-white hover:bg-brand-blue/90">
                    Cadastrar
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
