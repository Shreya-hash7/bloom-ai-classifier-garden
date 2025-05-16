
import { FlowerPrediction } from "@/components/FlowerCard";

// Mock function to simulate AI classification
export const classifyFlowerImage = async (imageData: string): Promise<FlowerPrediction[]> => {
  // In a real app, this would call an API endpoint with the image data
  // Here we'll simulate a delay and return mock results
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Generate random but realistic-looking results
  const flowerTypes = ["Rose", "Tulip", "Daisy", "Sunflower", "Lily", "Orchid", "Daffodil"];
  
  // Choose a random flower as the top prediction
  const mainFlowerIndex = Math.floor(Math.random() * flowerTypes.length);
  const mainFlower = flowerTypes[mainFlowerIndex];
  
  // Generate a random confidence score between 70% and 95% for the top prediction
  const mainConfidence = 0.7 + Math.random() * 0.25;
  
  // Create results array with the main prediction and some secondary predictions
  const results: FlowerPrediction[] = [
    {
      class: mainFlower,
      confidence: mainConfidence,
    }
  ];
  
  // Add 2-3 more predictions with lower confidence
  const remainingFlowers = flowerTypes.filter((_, index) => index !== mainFlowerIndex);
  const numSecondary = 2 + Math.floor(Math.random() * 2); // 2 or 3
  
  for (let i = 0; i < numSecondary; i++) {
    if (i < remainingFlowers.length) {
      // Each subsequent prediction has lower confidence
      const secondaryConfidence = Math.max(0.1, mainConfidence * (0.7 - (i * 0.15)));
      results.push({
        class: remainingFlowers[i],
        confidence: secondaryConfidence,
      });
    }
  }
  
  return results;
};

// Helper function to load an image from a URL and convert it to base64
export const loadImageFromUrl = async (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL("image/jpeg");
      resolve(dataURL);
    };
    img.onerror = () => {
      reject(new Error("Failed to load image"));
    };
    img.src = url;
  });
};
