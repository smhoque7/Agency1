import React from 'react';
import { Cookie, Shield, Settings, Eye } from 'lucide-react';

const CookiePolicyPage = () => {
  const cookieTypes = [
    {
      icon: Shield,
      title: 'Essential Cookies',
      description: 'Required for basic website functionality',
      examples: ['Login sessions', 'Form submissions', 'Security features'],
      retention: 'Session or 30 days',
      canDisable: false
    },
    {
      icon: Settings,
      title: 'Functional Cookies',
      description: 'Enhance user experience and remember preferences',
      examples: ['Language preferences', 'Quote progress', 'Chat history'],
      retention: '1 year',
      canDisable: true
    },
    {
      icon: Eye,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website',
      examples: ['Page views', 'User journeys', 'Performance metrics'],
      retention: '2 years',
      canDisable: true
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Cookie className="h-8 w-8 text-amber-600" />
            <h1 className="text-3xl font-serif font-bold text-gray-900">Cookie Policy</h1>
          </div>
          <p className="text-lg text-gray-600">
            Learn how SmartLife uses cookies to enhance your experience
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: January 2025
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies?</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences, 
              enabling certain functionality, and helping us understand how our website is used.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Cookies</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At SmartLife, we use cookies for several purposes:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>To provide essential website functionality</li>
              <li>To remember your quote progress and preferences</li>
              <li>To analyze website performance and user behavior</li>
              <li>To provide personalized content and recommendations</li>
              <li>To ensure security and prevent fraud</li>
            </ul>
          </div>
        </div>

        {/* Cookie Types */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-serif font-bold text-gray-900 text-center mb-8">
            Types of Cookies We Use
          </h2>
          
          {cookieTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-green-100 rounded-xl">
                  <type.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      type.canDisable 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {type.canDisable ? 'Optional' : 'Required'}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{type.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {type.examples.map((example, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Retention Period:</h4>
                      <p className="text-sm text-gray-600">{type.retention}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Managing Cookies */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              You have control over the cookies we use on your device. Here are your options:
            </p>
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Browser Settings</h3>
              <p className="text-blue-800 text-sm">
                Most web browsers allow you to control cookies through their settings. You can typically 
                set your browser to refuse all cookies, accept only certain cookies, or alert you when 
                cookies are being sent.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-2">Our Cookie Banner</h3>
              <p className="text-green-800 text-sm">
                When you first visit our website, you'll see a cookie banner that allows you to accept 
                or decline non-essential cookies. You can change your preferences at any time.
              </p>
            </div>
            <p className="text-sm">
              <strong>Note:</strong> Disabling essential cookies may affect website functionality and 
              prevent you from using certain features like our quote calculator.
            </p>
          </div>
        </div>

        {/* Third Party Cookies */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
          <p className="text-gray-600 mb-4">
            We may use third-party services that also set cookies on your device:
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-gray-900">Google Analytics</p>
                <p className="text-sm text-gray-600">For website analytics and performance monitoring</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-gray-900">Customer Support Chat</p>
                <p className="text-sm text-gray-600">To provide real-time customer assistance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Questions About Our Cookie Policy?</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about how we use cookies or our privacy practices, 
            we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:privacy@smartlife.ca"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Email Us
            </a>
            <a
              href="tel:1-800-SMARTLIFE"
              className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;