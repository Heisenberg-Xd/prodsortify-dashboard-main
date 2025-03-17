
import React from 'react';
import { Check } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface Algorithm {
  id: string;
  name: string;
  description: string;
}

interface AlgorithmSelectorProps {
  selectedAlgorithm: string;
  onChange: (value: string) => void;
}

const algorithms: Algorithm[] = [
  {
    id: 'kmeans',
    name: 'K-Means Clustering',
    description: 'Popular for segmentation based on numerical values'
  },
  {
    id: 'hierarchical',
    name: 'Hierarchical Clustering',
    description: 'Creates clusters based on distance between data points'
  },
  {
    id: 'dbscan',
    name: 'DBSCAN',
    description: 'Density-based clustering for varying cluster shapes'
  },
  {
    id: 'gaussian',
    name: 'Gaussian Mixture',
    description: 'Probabilistic model for complex data distributions'
  }
];

const AlgorithmSelector: React.FC<AlgorithmSelectorProps> = ({ selectedAlgorithm, onChange }) => {
  return (
    <div className="rounded-lg border border-border bg-background p-6">
      <h3 className="text-lg font-medium mb-4">Select Segmentation Algorithm</h3>
      <RadioGroup 
        value={selectedAlgorithm} 
        onValueChange={onChange}
        className="gap-3"
      >
        {algorithms.map((algorithm) => (
          <div 
            key={algorithm.id} 
            className={`flex items-start gap-3 p-3 rounded-lg border transition-all cursor-pointer hover:border-primary/30 hover:bg-primary/5 ${
              selectedAlgorithm === algorithm.id ? 'border-primary bg-primary/5' : 'border-border'
            }`}
            onClick={() => onChange(algorithm.id)}
          >
            <RadioGroupItem value={algorithm.id} id={algorithm.id} className="mt-1" />
            <div className="flex-1">
              <Label 
                htmlFor={algorithm.id} 
                className="font-medium cursor-pointer"
              >
                {algorithm.name}
              </Label>
              <p className="text-sm text-muted-foreground">
                {algorithm.description}
              </p>
            </div>
            {selectedAlgorithm === algorithm.id && (
              <div className="bg-primary text-white rounded-full p-1">
                <Check size={14} />
              </div>
            )}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default AlgorithmSelector;
