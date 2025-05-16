
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface SampleImage {
  url: string;
  name: string;
}

interface SampleGalleryProps {
  onSelectSample: (imageUrl: string) => void;
}

const SampleGallery: React.FC<SampleGalleryProps> = ({ onSelectSample }) => {
  const sampleImages: SampleImage[] = [
    {
      url: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      name: "Red Rose"
    },
    {
      url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      name: "Tulips"
    },
    {
      url: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      name: "Daisy"
    },
    {
      url: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      name: "Sunflower"
    }
  ];

  return (
    <div className="w-full">
      <h3 className="text-lg font-medium mb-3">Try with Sample Images</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {sampleImages.map((image, index) => (
          <Card
            key={index}
            className="overflow-hidden cursor-pointer hover:ring-2 hover:ring-nature-400 transition-all"
            onClick={() => onSelectSample(image.url)}
          >
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <img
                  src={image.url}
                  alt={image.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                  <p className="text-white text-xs font-medium">{image.name}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SampleGallery;
