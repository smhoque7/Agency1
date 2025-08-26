import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Shield, Users, CheckCircle, ArrowRight, Star } from 'lucide-react';
import QuoteModal from '../components/Common/QuoteModal';

const HomePage = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const features = [
    {
      icon: Calculator,
      title: 'Instant Estimates',
      description: 'Get personalized quotes in real-time',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'AI-Powered Recommendations',
      description: 'Smart matching to perfect coverage',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Licensed professionals ready to help',
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  const trustIndicators = [
    'Licensed & Regulated in Canada',
    '10+ Years of Excellence',
    '50,000+ Satisfied Customers',
    'A+ Better Business Bureau Rating'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg-hero text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            {/* Floating Elements */}
            <div className="absolute top-10 left-10 floating-animation opacity-20">
              <Shield className="h-16 w-16" />
            </div>
            <div className="absolute top-20 right-20 floating-animation opacity-20" style={{ animationDelay: '2s' }}>
              <Calculator className="h-12 w-12" />
            </div>
            <div className="absolute bottom-20 left-20 floating-animation opacity-20" style={{ animationDelay: '4s' }}>
              <Users className="h-14 w-14" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Smart Life Insurance
              <br />
              <span className="bg-white text-transparent bg-clip-text">Made Simple</span>
            </h1>
            
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
              Get AI-powered life insurance estimates in minutes. Built for Canadians who value transparency and simplicity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={() => setShowQuoteModal(true)}
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 glow-shadow flex items-center gap-2"
              >
                Get Your Quote
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <Link
                to="/products"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                View Products
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm opacity-90">
              <CheckCircle className="h-4 w-4 text-green-300" />
              <span>✓ No hidden fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
              Why Choose SmartLife?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with human expertise to make life insurance accessible and affordable for every Canadian family.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Trusted by Canadians Nationwide
              </h3>
              <div className="flex justify-center items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-gray-600 font-medium">4.9/5 Customer Rating</span>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center gap-2 justify-center sm:justify-start">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{indicator}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
            Ready to Protect Your Family's Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of Canadian families who trust SmartLife for their life insurance needs.
          </p>
          <button
            onClick={() => setShowQuoteModal(true)}
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 glow-shadow"
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={showQuoteModal} 
        onClose={() => setShowQuoteModal(false)} 
      />
    </div>
  );
};

export default HomePage;