
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ExternalLink } from 'lucide-react';

export interface FlowerPrediction {
  class: string;
  confidence: number;
  description?: string;
  scientificName?: string;
  imageUrl?: string;
}

interface FlowerCardProps {
  prediction: FlowerPrediction;
  rank: number;
}

const flowerInfo: Record<string, { 
  description: string; 
  scientificName: string;
  imageUrl: string;
}> = {
  "rose": {
    scientificName: "Rosa",
    description: "Roses are perennial flowering plants known for their beauty, fragrance, and variety of colors. They are popular garden plants and symbols of love.",
    imageUrl: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  "tulip": {
    scientificName: "Tulipa",
    description: "Tulips are spring-blooming perennials with bold flowers in a cup or star shape. They come in various vibrant colors and are native to Central Asia.",
    imageUrl: "https://images.unsplash.com/photo-1523413307857-ef24c53571ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVsaXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  "daisy": {
    scientificName: "Bellis perennis",
    description: "Daisies are simple yet charming flowers with white petals surrounding a yellow center. They symbolize innocence and purity.",
    imageUrl: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFpc3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  "sunflower": {
    scientificName: "Helianthus annuus",
    description: "Sunflowers are known for their large, bright yellow flower heads that track the sun's movement. They produce edible seeds and symbolize adoration.",
    imageUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZmxvd2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  "lily": {
    scientificName: "Lilium",
    description: "Lilies are elegant flowers with prominent stamens and trumpet-shaped blooms. They often symbolize purity and refined beauty.",
    imageUrl: "https://images.unsplash.com/photo-1588616279801-a03aee50ac5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGlseXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  "orchid": {
    scientificName: "Orchidaceae",
    description: "Orchids are exotic flowers with complex structures and stunning colors. They represent luxury, beauty, and strength.",
    imageUrl: "https://images.unsplash.com/photo-1566550096460-47e8bb98fd0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JjaGlkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  "daffodil": {
    scientificName: "Narcissus",
    description: "Daffodils are spring flowers with distinctive trumpet-shaped centers surrounded by petals. They symbolize rebirth and new beginnings.",
    imageUrl: "https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFmZm9kaWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  }
};

const FlowerCard: React.FC<FlowerCardProps> = ({ prediction, rank }) => {
  // Default flower info if not found in our database
  const flowerData = flowerInfo[prediction.class.toLowerCase()] || {
    scientificName: "Unknown",
    description: "No detailed information available for this flower type.",
    imageUrl: "https://images.unsplash.com/photo-1490772888775-55fceea286b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  };

  const confidence = Math.round(prediction.confidence * 100);
  
  // For primary result vs others
  const isPrimary = rank === 1;
  
  return (
    <Card className={`flower-card overflow-hidden ${isPrimary ? 'border-nature-400' : ''}`}>
      <div className="relative h-40 overflow-hidden">
        <img 
          src={prediction.imageUrl || flowerData.imageUrl} 
          alt={prediction.class}
          className="w-full h-full object-cover"
        />
        {isPrimary && (
          <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-medium">
            Top Match
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
          <h3 className="text-white font-bold text-lg capitalize">{prediction.class}</h3>
          <p className="text-white/80 text-sm italic">{prediction.scientificName || flowerData.scientificName}</p>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Confidence</span>
          <span className="text-sm font-bold">{confidence}%</span>
        </div>
        <Progress value={confidence} className="h-2 bg-gray-100" />
        
        <p className="mt-4 text-sm text-gray-600 line-clamp-3">
          {prediction.description || flowerData.description}
        </p>
        
        <div className="mt-4 flex justify-end">
          <a 
            href={`https://en.wikipedia.org/wiki/${prediction.class}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs text-nature-600 hover:text-nature-800"
          >
            Learn more <ExternalLink size={12} className="ml-1" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default FlowerCard;
