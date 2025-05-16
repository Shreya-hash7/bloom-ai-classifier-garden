
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, ImageIcon, RefreshCw } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

interface ImageUploaderProps {
  onImageUpload: (imageData: string) => void;
  isClassifying: boolean;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, isClassifying }) => {
  const [dragOver, setDragOver] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    processFile(files[0]);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (file: File) => {
    if (!file) return;
    
    // Check if the file is an image
    if (!file.type.match('image.*')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPEG, PNG, etc.)",
        variant: "destructive"
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        const imageData = e.target.result as string;
        setPreviewImage(imageData);
        onImageUpload(imageData);
      }
    };
    reader.readAsDataURL(file);
  };

  const resetImage = () => {
    setPreviewImage(null);
  };

  return (
    <Card
      className={`p-6 border-2 border-dashed transition-colors ${
        dragOver ? 'border-nature-500 bg-nature-50' : 'border-nature-200'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {!previewImage ? (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="h-16 w-16 rounded-full bg-nature-100 flex items-center justify-center mb-4">
            <ImageIcon size={32} className="text-nature-600" />
          </div>
          <h3 className="text-xl font-medium mb-2">Upload Flower Image</h3>
          <p className="text-muted-foreground text-center max-w-md mb-4">
            Drag and drop your flower image here, or click to select a file
          </p>
          <div>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="image-upload"
              onChange={handleFileInput}
            />
            <label htmlFor="image-upload">
              <Button
                type="button"
                className="gap-2"
              >
                <Upload size={16} />
                Browse Files
              </Button>
            </label>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="relative max-w-md w-full">
            <img
              src={previewImage}
              alt="Preview"
              className="w-full h-auto rounded-md object-cover max-h-80"
            />
            {isClassifying && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-md">
                <div className="text-white flex flex-col items-center">
                  <RefreshCw size={32} className="animate-spin mb-2" />
                  <span>Classifying...</span>
                </div>
              </div>
            )}
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={resetImage}
            className="mt-4"
            disabled={isClassifying}
          >
            Choose Another Image
          </Button>
        </div>
      )}
    </Card>
  );
};

export default ImageUploader;
