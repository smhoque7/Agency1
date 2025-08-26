import React, { useState, useEffect } from 'react';
import { Brain, Check } from 'lucide-react';

interface LoadingModalProps {
  isOpen: boolean;
}

const LoadingModal = ({ isOpen }: LoadingModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    'Analyzing your profile...',
    'Comparing insurance providers...',
    'Calculating personalized rates...',
    'Preparing recommendations...'
  ];

  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 750);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
        <div className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75"></div>

        <div className="inline-block w-full max-w-md p-8 my-8 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Brain className="h-8 w-8 text-blue-600 ai-pulse" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              AI Processing Your Quote
            </h3>
            <p className="text-gray-600">
              Our AI is analyzing thousands of policies to find your perfect match
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                  index < currentStep ? 'bg-green-500' : 
                  index === currentStep ? 'bg-blue-500' : 'bg-gray-200'
                }`}>
                  {index < currentStep ? (
                    <Check className="h-4 w-4 text-white" />
                  ) : index === currentStep ? (
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  ) : (
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  )}
                </div>
                <span className={`text-left ${
                  index <= currentStep ? 'text-gray-900 font-medium' : 'text-gray-500'
                }`}>
                  {step}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="progress-bar h-2 rounded-full transition-all duration-750"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;