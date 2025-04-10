
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black py-3' : 'bg-transparent py-6'}`}>
      <div className="ferrari-container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Truck size={28} className="text-brand-red" />
          <span className="text-xl font-bold text-white uppercase tracking-wider">Head Truck</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        
        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className="ferrari-nav-link text-white">
            Início
          </Link>
          <Link to="/como-funciona" className="ferrari-nav-link text-white">
            Como Funciona
          </Link>
          <Link to="/motoristas" className="ferrari-nav-link text-white">
            Para Motoristas
          </Link>
          <Link to="/embarcadores" className="ferrari-nav-link text-white">
            Para Embarcadores
          </Link>
          <Link to="/contato" className="ferrari-nav-link text-white">
            Contato
          </Link>
        </div>
        
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/entrar">
            <Button variant="outline" className="border-white text-white hover:bg-white/10 uppercase text-sm tracking-wider font-medium rounded-none">
              Entrar
            </Button>
          </Link>
          <Link to="/cadastrar">
            <Button className="bg-brand-red text-white hover:bg-brand-red/90 uppercase text-sm tracking-wider font-medium rounded-none">
              Cadastrar
            </Button>
          </Link>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed top-16 left-0 right-0 bg-black z-50 animate-fade-in">
            <div className="flex flex-col p-6">
              <Link 
                to="/" 
                className="py-3 text-white ferrari-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/como-funciona" 
                className="py-3 text-white ferrari-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Como Funciona
              </Link>
              <Link 
                to="/motoristas" 
                className="py-3 text-white ferrari-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Para Motoristas
              </Link>
              <Link 
                to="/embarcadores" 
                className="py-3 text-white ferrari-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Para Embarcadores
              </Link>
              <Link 
                to="/contato" 
                className="py-3 text-white ferrari-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <div className="flex gap-4 mt-6">
                <Link to="/entrar" className="flex-1" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white/10 uppercase text-sm tracking-wider font-medium rounded-none">
                    Entrar
                  </Button>
                </Link>
                <Link to="/cadastrar" className="flex-1" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-brand-red text-white hover:bg-brand-red/90 uppercase text-sm tracking-wider font-medium rounded-none">
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
