import React, { useState } from 'react';
import { useQuote } from '../../contexts/QuoteContext';
import { ArrowLeft, Shield, TrendingUp, Building, Calendar, Check, ExternalLink } from 'lucide-react';
import AppointmentModal from '../Common/AppointmentModal';

interface ProductRecommendationsProps {
  onBack: () => void;
}

const ProductRecommendations = ({ onBack }: ProductRecommendationsProps) => {
  const { quoteData, liveQuote } = useQuote();
  const [showAppointment, setShowAppointment] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  const products = [
    {
      id: 'term',
      name: 'Term Life Insurance',
      icon: Shield,
      premium: liveQuote,
      recommended: true,
      description: 'Perfect for temporary needs like mortgage protection',
      features: [
        'Guaranteed renewable to age 100',
        'Convertible to permanent insurance',
        'Most affordable option',
        'Coverage for 10, 20, or 30 years'
      ],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 'whole',
      name: 'Whole Life Insurance',
      icon: TrendingUp,
      premium: Math.round(liveQuote * 4.5),
      recommended: false,
      description: 'Lifetime coverage with cash value growth',
      features: [
        'Coverage for entire lifetime',
        'Builds cash value over time',
        'Dividends may be paid annually',
        'Can borrow against cash value'
      ],
      gradient: 'from-green-500 to-green-600'
    },
    {
      id: 'universal',
      name: 'Universal Life Insurance',
      icon: Building,
      premium: Math.round(liveQuote * 3.2),
      recommended: false,
      description: 'Flexible permanent insurance with investment component',
      features: [
        'Flexible premium payments',
        'Investment account options',
        'Tax-sheltered growth potential',
        'Adjustable death benefit'
      ],
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  const handleGetQuote = (productId: string) => {
    setSelectedProduct(productId);
    setShowAppointment(true);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Quote Form
          </button>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Check className="h-4 w-4" />
              Quote Complete
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
              Your Personalized Recommendations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Based on your profile, here are the best life insurance options we found for you.
            </p>
          </div>
        </div>

        {/* User Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Profile Summary</h2>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Age:</span>
              <div className="font-semibold">{quoteData.age} years old</div>
            </div>
            <div>
              <span className="text-gray-600">Coverage:</span>
              <div className="font-semibold">${quoteData.coverageAmount?.toLocaleString()}</div>
            </div>
            <div>
              <span className="text-gray-600">Term:</span>
              <div className="font-semibold">{quoteData.coverageLength} years</div>
            </div>
            <div>
              <span className="text-gray-600">Status:</span>
              <div className="font-semibold capitalize">
                {quoteData.smokingStatus === 'never' ? 'Non-smoker' : 
                 quoteData.smokingStatus === 'former' ? 'Former smoker' : 'Current smoker'}
              </div>
            </div>
          </div>
        </div>

        {/* Product Recommendations */}
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                product.recommended ? 'ring-2 ring-blue-500 transform scale-105' : ''
              }`}
            >
              {product.recommended && (
                <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-center py-2 font-semibold">
                  ⭐ Recommended for You
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 bg-gradient-to-r ${product.gradient} text-white rounded-xl`}>
                    <product.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-gray-600 text-sm">{product.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    ${product.premium}/month
                  </div>
                  <p className="text-sm text-gray-600">
                    Estimated premium based on your profile
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-900">Key Features:</h4>
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => handleGetQuote(product.id)}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
                      product.recommended
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-800 text-white hover:bg-gray-900'
                    }`}
                  >
                    Get This Quote
                  </button>
                  
                  <button className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 mt-12">
          <div className="text-center">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Schedule a free consultation with one of our licensed insurance professionals 
              to discuss your options and complete your application.
            </p>
            <button
              onClick={() => setShowAppointment(true)}
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
            >
              <Calendar className="h-5 w-5" />
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>

      <AppointmentModal
        isOpen={showAppointment}
        onClose={() => setShowAppointment(false)}
        selectedProduct={selectedProduct}
      />
    </div>
  );
};

export default ProductRecommendations;