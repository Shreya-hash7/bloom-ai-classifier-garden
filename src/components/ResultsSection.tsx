
import React from 'react';
import FlowerCard, { FlowerPrediction } from './FlowerCard';

interface ResultsSectionProps {
  predictions: FlowerPrediction[] | null;
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ predictions }) => {
  if (!predictions || predictions.length === 0) return null;

  return (
    <div className="w-full mt-8">
      <h2 className="text-2xl font-bold mb-6 gradient-text">Classification Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {predictions.map((prediction, index) => (
          <FlowerCard 
            key={index}
            prediction={prediction}
            rank={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default ResultsSection;
