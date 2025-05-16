
import React, { useState } from 'react';
import Header from '@/components/Header';
import ImageUploader from '@/components/ImageUploader';
import SampleGallery from '@/components/SampleGallery';
import ResultsSection from '@/components/ResultsSection';
import { FlowerPrediction } from '@/components/FlowerCard';
import { classifyFlowerImage, loadImageFromUrl } from '@/services/flowerClassifier';
import { Button } from '@/components/ui/button';
import { Leaf } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [predictions, setPredictions] = useState<FlowerPrediction[] | null>(null);
  const [isClassifying, setIsClassifying] = useState(false);
  const { toast } = useToast();

  const handleImageUpload = async (imageData: string) => {
    try {
      setIsClassifying(true);
      setPredictions(null);
      const results = await classifyFlowerImage(imageData);
      setPredictions(results);
    } catch (error) {
      toast({
        title: "Classification Failed",
        description: "There was a problem classifying your image.",
        variant: "destructive"
      });
      console.error("Error classifying image:", error);
    } finally {
      setIsClassifying(false);
    }
  };

  const handleSampleSelect = async (imageUrl: string) => {
    try {
      setIsClassifying(true);
      setPredictions(null);
      
      // Load the image from URL and convert to base64
      const imageData = await loadImageFromUrl(imageUrl);
      
      // Classify the image
      const results = await classifyFlowerImage(imageData);
      setPredictions(results);
    } catch (error) {
      toast({
        title: "Classification Failed",
        description: "There was a problem with the sample image.",
        variant: "destructive"
      });
      console.error("Error with sample image:", error);
    } finally {
      setIsClassifying(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-nature-50/50 to-white">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 gradient-text">Flower Classification AI</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload a flower image and our AI will identify the flower species with detailed information
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <Button variant="outline" className="gap-2">
            <Leaf size={16} className="text-nature-600" />
            <span>About FloraVision AI</span>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <ImageUploader
              onImageUpload={handleImageUpload}
              isClassifying={isClassifying}
            />
          </div>
          
          <div className="md:col-span-2">
            <SampleGallery onSelectSample={handleSampleSelect} />
          </div>
        </div>
        
        <ResultsSection predictions={predictions} />
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>© 2025 FloraVision AI - Educational Demo</p>
          <p className="mt-1">
            This is a demonstration project. In a real application, it would use a trained AI model.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
