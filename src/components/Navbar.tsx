
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when navigating to a new page
    setIsMenuOpen(false);
  }, [location]);

  // Função para rolar suavemente para uma seção na mesma página
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black py-3' : 'bg-transparent py-6'}`}>
      <div className="ferrari-container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Head Truck" className="h-10" />
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
          <button 
            onClick={() => scrollToSection("como-funciona")} 
            className="ferrari-nav-link text-white"
          >
            Como Funciona
          </button>
          <button 
            onClick={() => scrollToSection("para-motoristas")} 
            className="ferrari-nav-link text-white"
          >
            Para Motoristas
          </button>
          <button 
            onClick={() => scrollToSection("para-embarcadores")} 
            className="ferrari-nav-link text-white"
          >
            Para Embarcadores
          </button>
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
              <button 
                onClick={() => scrollToSection("como-funciona")} 
                className="py-3 text-white ferrari-nav-link text-left"
              >
                Como Funciona
              </button>
              <button 
                onClick={() => scrollToSection("para-motoristas")} 
                className="py-3 text-white ferrari-nav-link text-left"
              >
                Para Motoristas
              </button>
              <button 
                onClick={() => scrollToSection("para-embarcadores")} 
                className="py-3 text-white ferrari-nav-link text-left"
              >
                Para Embarcadores
              </button>
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
