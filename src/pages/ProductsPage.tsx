import React from 'react';
import { Shield, TrendingUp, Building, Check, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const products = [
    {
      id: 'term',
      name: 'Term Life Insurance',
      icon: Shield,
      startingPrice: 25,
      description: 'Affordable protection for a specific period',
      idealFor: 'Young families, mortgage protection, temporary needs',
      features: [
        'Guaranteed renewable to age 100',
        'Convertible to permanent insurance',
        'Level premiums during term',
        'No medical exam for amounts up to $500K',
        'Coverage terms: 10, 20, or 30 years'
      ],
      benefits: [
        'Most affordable life insurance option',
        'Perfect for temporary financial obligations',
        'Easy to qualify for',
        'Flexible coverage amounts'
      ],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 'whole',
      name: 'Whole Life Insurance',
      icon: TrendingUp,
      startingPrice: 120,
      description: 'Permanent coverage with guaranteed cash value growth',
      idealFor: 'Estate planning, long-term financial goals, tax strategies',
      features: [
        'Lifetime coverage guarantee',
        'Guaranteed cash value growth',
        'Annual dividend payments',
        'Ability to borrow against cash value',
        'Tax-advantaged growth'
      ],
      benefits: [
        'Coverage never expires',
        'Builds wealth over time',
        'Provides living benefits',
        'Estate planning tool'
      ],
      gradient: 'from-green-500 to-green-600'
    },
    {
      id: 'universal',
      name: 'Universal Life Insurance',
      icon: Building,
      startingPrice: 85,
      description: 'Flexible permanent insurance with investment options',
      idealFor: 'Business owners, high-income earners, investment-minded individuals',
      features: [
        'Flexible premium payments',
        'Investment account options',
        'Adjustable death benefit',
        'Tax-sheltered investment growth',
        'Transparent fees and charges'
      ],
      benefits: [
        'Premium payment flexibility',
        'Potential for higher returns',
        'Customizable coverage',
        'Tax advantages'
      ],
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  const comparisonFeatures = [
    { feature: 'Coverage Duration', term: '10-30 years', whole: 'Lifetime', universal: 'Lifetime' },
    { feature: 'Premium Cost', term: 'Lowest', whole: 'Highest', universal: 'Moderate' },
    { feature: 'Cash Value', term: 'None', whole: 'Guaranteed growth', universal: 'Variable growth' },
    { feature: 'Premium Flexibility', term: 'Fixed', whole: 'Fixed', universal: 'Flexible' },
    { feature: 'Investment Options', term: 'None', whole: 'Conservative', universal: 'Multiple options' }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-6">
              Life Insurance Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose from our comprehensive range of life insurance products designed to meet every Canadian's unique needs and budget.
            </p>
            <div className="flex items-center justify-center gap-2 text-green-600">
              <Star className="h-5 w-5 fill-current" />
              <span className="font-medium">Rated A+ by Better Business Bureau</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${product.gradient} text-white p-6`}>
                  <div className="flex items-center gap-3 mb-4">
                    <product.icon className="h-8 w-8" />
                    <div>
                      <h3 className="text-2xl font-bold">{product.name}</h3>
                      <p className="text-white/90">{product.description}</p>
                    </div>
                  </div>
                  <div className="text-3xl font-bold">
                    Starting at ${product.startingPrice}/month
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Ideal For:</h4>
                    <p className="text-gray-600 text-sm">{product.idealFor}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/quote"
                    className="w-full py-3 px-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    Get Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Product Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Compare our life insurance products side by side to find the perfect fit for your needs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-6 font-semibold text-gray-900">Feature</th>
                  <th className="text-center p-6 font-semibold text-blue-600">Term Life</th>
                  <th className="text-center p-6 font-semibold text-green-600">Whole Life</th>
                  <th className="text-center p-6 font-semibold text-purple-600">Universal Life</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr key={index} className="border-t border-gray-100">
                    <td className="p-6 font-medium text-gray-900">{row.feature}</td>
                    <td className="p-6 text-center text-gray-700">{row.term}</td>
                    <td className="p-6 text-center text-gray-700">{row.whole}</td>
                    <td className="p-6 text-center text-gray-700">{row.universal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get personalized quotes from multiple insurers in minutes. No obligations, no hidden fees.
          </p>
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Your Free Quote
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;