import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuote } from '../contexts/QuoteContext';
import QuoteForm from '../components/Quote/QuoteForm';
import LiveQuoteDisplay from '../components/Quote/LiveQuoteDisplay';
import LoadingModal from '../components/Common/LoadingModal';
import ProductRecommendations from '../components/Quote/ProductRecommendations';

const QuotePage = () => {
  const navigate = useNavigate();
  const { isFormComplete, quoteData } = useQuote();
  const [isProcessing, setIsProcessing] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleSubmit = async () => {
    if (!isFormComplete) return;
    
    setIsProcessing(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsProcessing(false);
    setShowRecommendations(true);
  };

  if (showRecommendations) {
    return <ProductRecommendations onBack={() => setShowRecommendations(false)} />;
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
            Get Your Personalized Quote
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Answer a few questions and get instant life insurance estimates tailored to your needs.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Quote Form */}
          <div className="lg:flex-1">
            <QuoteForm onSubmit={handleSubmit} />
          </div>

          {/* Live Quote Display */}
          <div className="lg:w-96">
            <LiveQuoteDisplay />
          </div>
        </div>
      </div>

      <LoadingModal isOpen={isProcessing} />
    </div>
  );
};

export default QuotePage;