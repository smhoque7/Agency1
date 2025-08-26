import React from 'react';
import { useQuote } from '../../contexts/QuoteContext';
import { DollarSign, TrendingUp, Cross as Progress } from 'lucide-react';

const LiveQuoteDisplay = () => {
  const { liveQuote, multiInsurerQuote, isFormComplete, currentStep } = useQuote();

  const progressPercentage = (currentStep / 5) * 100;

  return (
    <div className="sticky top-24">
      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
        {/* Progress */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <Progress className="h-5 w-5 text-blue-600" />
              Progress
            </h3>
            <span className="text-sm text-gray-600">{currentStep}/5 fields</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="progress-bar h-2 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Live Estimate */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 slide-in-left">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-600 rounded-lg">
              <DollarSign className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Live Estimate</h3>
          </div>
          
          {liveQuote > 0 ? (
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">
                ${liveQuote}/month
              </div>
              <p className="text-sm text-gray-600">
                Based on your current selections
              </p>
              <div className="text-xs text-gray-500 bg-white/70 rounded-lg p-2">
                ✓ No medical exam required for most applicants
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-gray-400 mb-2">
                <DollarSign className="h-12 w-12 mx-auto" />
              </div>
              <p className="text-gray-600">
                Complete the form to see your estimate
              </p>
            </div>
          )}
        </div>

        {/* Multi-Insurer Rate */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 slide-in-right">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-600 rounded-lg">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Multi-Insurer Rate</h3>
          </div>
          
          {multiInsurerQuote > 0 ? (
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">
                ${Math.round(multiInsurerQuote)}/month
              </div>
              <p className="text-sm text-gray-600">
                Compare rates from 15+ insurers
              </p>
              <div className="text-xs text-gray-500 bg-white/70 rounded-lg p-2">
                ✓ Find the best rates available in Canada
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-gray-400 mb-2">
                <TrendingUp className="h-12 w-12 mx-auto" />
              </div>
              <p className="text-gray-600">
                See rates from multiple insurers
              </p>
            </div>
          )}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2 text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Licensed in all provinces</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>No hidden fees guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>30-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveQuoteDisplay;