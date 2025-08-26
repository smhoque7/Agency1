@@ .. @@
 import React from 'react';
-import './App.css';
+import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
+import Header from './components/Layout/Header';
+import HomePage from './pages/HomePage';
+import QuotePage from './pages/QuotePage';
+import ProductsPage from './pages/ProductsPage';
+import AboutPage from './pages/AboutPage';
+import CookiePolicyPage from './pages/CookiePolicyPage';
+import BrokerLoginPage from './pages/BrokerLoginPage';
+import NotFoundPage from './pages/NotFoundPage';
+import AIChat from './components/AI/AIChat';
+import CookieBanner from './components/Common/CookieBanner';
+import { QuoteProvider } from './contexts/QuoteContext';
+import './App.css';
 
 function App() {
   return (
-    <div className="min-h-screen bg-gray-50">
-      <p>Start prompting (or editing) to see magic happen :)</p>
-    </div>
+    <QuoteProvider>
+      <Router>
+        <div className="min-h-screen bg-gray-50">
+          <Header />
+          <main>
+            <Routes>
+              <Route path="/" element={<HomePage />} />
+              <Route path="/quote" element={<QuotePage />} />
+              <Route path="/products" element={<ProductsPage />} />
+              <Route path="/about" element={<AboutPage />} />
+              <Route path="/cookie-policy" element={<CookiePolicyPage />} />
+              <Route path="/broker-login" element={<BrokerLoginPage />} />
+              <Route path="*" element={<NotFoundPage />} />
+            </Routes>
+          </main>
+          <AIChat />
+          <CookieBanner />
+        </div>
+      </Router>
+    </QuoteProvider>
   );
 }
 
 export default App;