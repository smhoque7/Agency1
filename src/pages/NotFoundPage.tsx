import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Shield } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4 text-center">
        {/* Error Illustration */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-blue-100 to-green-100 rounded-full mb-6">
            <Shield className="h-16 w-16 text-blue-600 floating-animation" />
          </div>
          <div className="text-8xl font-bold gradient-text mb-4">404</div>
        </div>

        {/* Content */}
        <h1 className="text-2xl font-serif font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Sorry, the page you're looking for doesn't exist. It might have been moved, 
          deleted, or you entered the wrong URL.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>

        {/* Help */}
        <div className="mt-8 p-4 bg-white rounded-lg shadow-sm">
          <p className="text-sm text-gray-600 mb-3">
            Still need help? Our team is here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm">
            <a 
              href="tel:1-800-SMARTLIFE" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Call 1-800-SMARTLIFE
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <a 
              href="mailto:help@smartlife.ca" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;