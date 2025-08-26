import React, { createContext, useContext, useState, ReactNode } from 'react';

interface QuoteData {
  age: number;
  gender: string;
  smokingStatus: string;
  coverageAmount: number;
  coverageLength: number;
  primaryGoals: string[];
}

interface QuoteContextType {
  quoteData: QuoteData;
  setQuoteData: (data: Partial<QuoteData>) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  isFormComplete: boolean;
  liveQuote: number;
  multiInsurerQuote: number;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};

export const QuoteProvider = ({ children }: { children: ReactNode }) => {
  const [quoteData, setQuoteDataState] = useState<QuoteData>({
    age: 35,
    gender: '',
    smokingStatus: '',
    coverageAmount: 500000,
    coverageLength: 20,
    primaryGoals: []
  });

  const [currentStep, setCurrentStep] = useState(0);

  const setQuoteData = (data: Partial<QuoteData>) => {
    setQuoteDataState(prev => ({ ...prev, ...data }));
  };

  const calculateQuote = (data: QuoteData): number => {
    if (!data.age || !data.gender || !data.smokingStatus) return 0;
    
    let baseRate = (data.age * 0.8) + (data.coverageAmount / 50000);
    
    // Smoking multipliers
    if (data.smokingStatus === 'current') baseRate *= 2.5;
    else if (data.smokingStatus === 'former') baseRate *= 1.3;
    
    // Gender multiplier
    if (data.gender === 'female') baseRate *= 0.9;
    
    // Age adjustments
    if (data.age > 55) baseRate += 25;
    else if (data.age > 40) baseRate += 15;
    
    // Coverage adjustments
    if (data.coverageAmount > 1500000) baseRate += 50;
    else if (data.coverageAmount > 1000000) baseRate += 30;
    
    return Math.round(baseRate);
  };

  const isFormComplete = quoteData.age > 0 && 
                        quoteData.gender !== '' && 
                        quoteData.smokingStatus !== '' &&
                        quoteData.primaryGoals.length > 0;

  const liveQuote = calculateQuote(quoteData);
  const multiInsurerQuote = liveQuote * 1.15; // 15% higher for comparison

  return (
    <QuoteContext.Provider value={{
      quoteData,
      setQuoteData,
      currentStep,
      setCurrentStep,
      isFormComplete,
      liveQuote,
      multiInsurerQuote
    }}>
      {children}
    </QuoteContext.Provider>
  );
};