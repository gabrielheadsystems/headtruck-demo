
import { useState } from "react";
import { Search, MapPin, Filter, Package, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FreightSearch = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray" size={18} />
          <Input
            placeholder="Origem"
            className="pl-10"
          />
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray" size={18} />
          <Input
            placeholder="Destino"
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button 
            className="bg-brand-orange text-white hover:bg-brand-orange/90 flex-1"
            onClick={() => {}}
          >
            <Search size={18} className="mr-2" />
            Buscar
          </Button>
          <Button 
            variant="outline" 
            className="border-brand-gray text-brand-gray"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={18} />
          </Button>
        </div>
      </div>
      
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t">
          <div className="relative">
            <Package className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray" size={18} />
            <Select>
              <SelectTrigger className="pl-10">
                <SelectValue placeholder="Tipo de Carga" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="geral">Carga Geral</SelectItem>
                <SelectItem value="refrigerada">Carga Refrigerada</SelectItem>
                <SelectItem value="perigosa">Carga Perigosa</SelectItem>
                <SelectItem value="granel">Granel</SelectItem>
                <SelectItem value="liquida">Carga Líquida</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray" size={18} />
            <Input
              type="date"
              className="pl-10"
            />
          </div>
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Tipo de Veículo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="truck">Caminhão Truck</SelectItem>
                <SelectItem value="toco">Caminhão Toco</SelectItem>
                <SelectItem value="carreta">Carreta Simples</SelectItem>
                <SelectItem value="bitrem">Bitrem</SelectItem>
                <SelectItem value="rodotrem">Rodotrem</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </div>
  );
};

export default FreightSearch;
