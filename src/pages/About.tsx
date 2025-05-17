
import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-nature-50/50 to-white">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft size={16} />
            Back to Home
          </Button>
        </Link>
        
        <div className="prose prose-green max-w-none">
          <h1 className="text-3xl font-bold mb-6 gradient-text">About FloraVision AI</h1>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-nature-100 mb-8">
            <h2 className="text-xl font-semibold mb-3 text-nature-800">What is FloraVision?</h2>
            <p className="text-gray-600 mb-4">
              FloraVision is an educational demonstration project that showcases how AI can be used to identify and classify 
              flower species from images. Our simulated AI classifier can recognize common flower varieties and provide 
              detailed information about each species.
            </p>
            <p className="text-gray-600">
              While this demonstration uses simulated predictions, similar technology is used in real-world applications 
              for plant identification, biodiversity research, and educational tools.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-nature-100 mb-8">
            <h2 className="text-xl font-semibold mb-3 text-nature-800">How It Works</h2>
            <p className="text-gray-600 mb-4">
              In a real application, FloraVision would use a trained convolutional neural network (CNN) to analyze 
              uploaded flower images. The network would identify visual patterns and features that distinguish 
              between different flower species.
            </p>
            <p className="text-gray-600">
              Our demonstration simulates this process to show how such applications provide predictions with 
              confidence scores and relevant information about identified species.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-nature-100">
            <h2 className="text-xl font-semibold mb-3 text-nature-800">Flower Database</h2>
            <p className="text-gray-600 mb-4">
              The current demonstration includes information on the following common flower species:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-nature-500"></div>
                <span>Roses (Rosa)</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-nature-500"></div>
                <span>Tulips (Tulipa)</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-nature-500"></div>
                <span>Daisies (Bellis perennis)</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-nature-500"></div>
                <span>Sunflowers (Helianthus annuus)</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-nature-500"></div>
                <span>Lilies (Lilium)</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-nature-500"></div>
                <span>Orchids (Orchidaceae)</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-nature-500"></div>
                <span>Daffodils (Narcissus)</span>
              </li>
            </ul>
          </div>
        </div>
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

export default About;
