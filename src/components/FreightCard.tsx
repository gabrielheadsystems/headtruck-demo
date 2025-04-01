
import { MapPin, Calendar, TruckIcon, Package, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface FreightCardProps {
  id: string;
  origin: string;
  destination: string;
  date: string;
  cargoType: string;
  weight: string;
  price: string;
  distance: string;
  isMatch?: boolean;
}

const FreightCard = ({
  id,
  origin,
  destination,
  date,
  cargoType,
  weight,
  price,
  distance,
  isMatch = false
}: FreightCardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 card-hover ${isMatch ? 'border-2 border-brand-orange' : ''}`}>
      {isMatch && (
        <Badge className="bg-brand-orange mb-4">Match Recomendado</Badge>
      )}
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="bg-brand-light p-3 rounded-full">
            <TruckIcon className="text-brand-blue" size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Frete #{id}</h3>
            <div className="flex items-center text-sm text-brand-gray gap-1">
              <Calendar size={14} />
              <span>{date}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-brand-blue">{price}</div>
          <div className="text-sm text-brand-gray">{distance}</div>
        </div>
      </div>
      
      <div className="space-y-3 mb-4">
        <div className="flex items-start gap-2">
          <MapPin className="text-brand-orange flex-shrink-0 mt-1" size={18} />
          <div>
            <div className="text-sm text-brand-gray">Origem</div>
            <div className="font-medium">{origin}</div>
          </div>
        </div>
        
        <div className="flex items-start gap-2">
          <MapPin className="text-brand-blue flex-shrink-0 mt-1" size={18} />
          <div>
            <div className="text-sm text-brand-gray">Destino</div>
            <div className="font-medium">{destination}</div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between text-sm mb-4">
        <div className="flex items-center gap-1">
          <Package size={14} className="text-brand-gray" />
          <span className="text-brand-gray">{cargoType}</span>
        </div>
        <div className="flex items-center gap-1">
          <DollarSign size={14} className="text-brand-gray" />
          <span className="text-brand-gray">{weight}</span>
        </div>
      </div>
      
      <div className="flex gap-2">
        <Button variant="outline" className="flex-1 border-brand-blue text-brand-blue hover:bg-brand-blue/10">
          Detalhes
        </Button>
        <Button className="flex-1 bg-brand-blue text-white hover:bg-brand-blue/90">
          Contatar
        </Button>
      </div>
    </div>
  );
};

export default FreightCard;
