# BoltVersion — Full Repo Dump



## `package.json`

```json
{
  "name": "vite-react-typescript-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit -p tsconfig.json",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.1",
    "date-fns": "^4.1.0",
    "framer-motion": "^12.23.12",
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.62.0",
    "react-router-dom": "^7.8.2",
    "yup": "^1.7.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}
```


## `postcss.config.js`

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

```


## `tsconfig.node.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}

```


## `eslint.config.js`

```javascript
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);

```


## `vite.config.ts`

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

```


## `.gitignore`

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
.env

# Dependencies
node_modules/

# Build output
dist/
.vite/

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Editor
.vscode/
.idea/

# Env
.env
.env.*

```


## `tsconfig.app.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}

```


## `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

```


## `README.md`

```markdown
# BoltVersion

A modern **Vite + React + TypeScript + Tailwind CSS** starter, already wired with **React Router v7**, **React Hook Form + Yup** validation, **Framer Motion** for animations, and **Lucide** icons.

This repository is GitHub‑ready: CI for lint/build, code style with Prettier & ESLint, and community health files are included.

---

## ✨ Tech Stack

- **React 18** with **TypeScript**
- **Vite 5** for fast dev & builds
- **Tailwind CSS 3** + PostCSS/Autoprefixer
- **React Router v7**
- **React Hook Form** with **Yup** resolver
- **Framer Motion** animations
- **ESLint** (flat config) + **Prettier**

## 🧰 Prerequisites

- **Node.js 18+** (LTS 20 recommended)
- **npm** (comes with Node). You can also use **pnpm** or **yarn** if you prefer.

## 🚀 Getting Started

> Optional: to enable `npm run format` scripts, install Prettier once:
>
> ```bash
> npm i -D prettier
> ```

```bash
# 1) Install deps
npm ci

# 2) Start dev server (http://localhost:5173 by default)
npm run dev

# 3) Type-check
npm run typecheck

# 4) Lint (and fix)
npm run lint
npm run lint:fix

# 5) Format
npm run format
npm run format:check

# 6) Build & preview production
npm run build
npm run preview
```

## 📁 Project Structure (high level)

```
/src
  /assets        # static assets (images, etc.)
  /components    # shared UI components
  /pages         # route-based components
  /hooks         # custom hooks
  /lib           # utilities, API clients
  /styles        # Tailwind base/styles (if applicable)
index.html
tailwind.config.js
postcss.config.js
tsconfig*.json
vite.config.ts
```

> Note: Exact folders may differ based on the current code. The stack above matches the dependencies present in `package.json`.

## 🧪 Quality & DX

- **ESLint** ensures consistent, modern React/TS best practices.
- **Prettier** enforces formatting.
- **TypeScript** strictness via `tsconfig`.
- **GitHub Actions** CI to lint & build on PRs.

## 🛫 Deployment

- **Static hosting** (e.g., Netlify, Vercel, Cloudflare Pages): run `npm run build` and deploy the `dist/` folder.
- **Vercel**: import the repo; framework preset: *Vite*; build command `npm run build`, output `dist`.

## 🔧 Environment Variables

If you add runtime secrets (e.g., API keys), create a `.env` file and reference via `import.meta.env`. Example:

```
VITE_API_BASE_URL=https://api.example.com
```

Never commit actual secrets—use GitHub Actions / host‑level secrets.

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for setup, coding standards, and PR guidelines.

## 📄 License

This project is licensed under the **MIT License** (see [LICENSE](LICENSE)). Feel free to change to a different license as needed.

```


## `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SmartLife Insurance Website</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```


## `tsconfig.json`

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}

```


## `src/App.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Georgia:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap');

:root {
  --color-trust-blue: 0 128 231;
  --color-success-green: 34 197 94;
  --color-warning: 251 146 60;
  --color-error: 239 68 68;
  --color-gray-50: 249 250 251;
  --color-gray-100: 243 244 246;
  --color-gray-200: 229 231 235;
  --color-gray-300: 209 213 219;
  --color-gray-400: 156 163 175;
  --color-gray-500: 107 114 128;
  --color-gray-600: 75 85 99;
  --color-gray-700: 55 65 81;
  --color-gray-800: 31 41 55;
  --color-gray-900: 17 24 39;
}

.font-serif {
  font-family: 'Georgia', serif;
}

.font-sans {
  font-family: 'Inter', sans-serif;
}

.gradient-text {
  background: linear-gradient(135deg, hsl(var(--color-trust-blue)), hsl(var(--color-success-green)));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-bg-primary {
  background: linear-gradient(135deg, 
    hsla(var(--color-trust-blue), 0.1), 
    hsla(var(--color-success-green), 0.05)
  );
}

.gradient-bg-hero {
  background: linear-gradient(135deg, 
    hsla(var(--color-trust-blue), 0.8), 
    hsla(var(--color-success-green), 0.6)
  );
}

.floating-animation {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(3deg); }
}

.slide-in-left {
  animation: slideInLeft 0.6s ease-out forwards;
}

.slide-in-right {
  animation: slideInRight 0.6s ease-out forwards;
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.glow-shadow {
  box-shadow: 0 10px 40px hsla(var(--color-trust-blue), 0.1);
}

.progress-bar {
  background: linear-gradient(90deg, hsl(var(--color-trust-blue)), hsl(var(--color-success-green)));
}

.ai-pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```


## `src/App.tsx`

```tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import HomePage from './pages/HomePage';
import QuotePage from './pages/QuotePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import BrokerLoginPage from './pages/BrokerLoginPage';
import NotFoundPage from './pages/NotFoundPage';
import AIChat from './components/AI/AIChat';
import CookieBanner from './components/Common/CookieBanner';
import { QuoteProvider } from './contexts/QuoteContext';
import './App.css';

function App() {
  return (
    <QuoteProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/quote" element={<QuotePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/cookie-policy" element={<CookiePolicyPage />} />
              <Route path="/broker-login" element={<BrokerLoginPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <AIChat />
          <CookieBanner />
        </div>
      </Router>
    </QuoteProvider>
  );
}

export default App;
```


## `src/components/AI/AIChat.tsx`

```tsx
import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);

  const initialMessage: Message = {
    id: '1',
    text: `Hi! Here are key reasons to consider life insurance:

1) Financial security for your loved ones
2) Income replacement protection  
3) Debt and mortgage coverage
4) Children's education funding
5) Estate planning benefits
6) Tax advantages

I can help you explore these benefits and find the right coverage. What interests you most?`,
    isBot: true,
    timestamp: new Date()
  };

  const quickResponses = [
    'Tell me about term vs whole life',
    'How much coverage do I need?',
    'What factors affect my premium?',
    'How do I apply?'
  ];

  const botResponses = {
    'term vs whole': 'Term life insurance provides temporary coverage for a specific period (10-30 years) at lower premiums. Whole life insurance provides permanent coverage with cash value that grows over time, but at higher premiums. Term is great for temporary needs like mortgage protection, while whole life is better for permanent estate planning needs.',
    'coverage amount': 'A common rule of thumb is 10-12 times your annual income, but it depends on your specific situation. Consider your debts, mortgage, children\'s education costs, and how long your family would need income replacement. Our quote tool can help you determine the right amount based on your goals.',
    'premium factors': 'Your premium is based on several factors: age, gender, health status, smoking habits, coverage amount, and type of policy. Younger, healthier non-smokers pay the lowest rates. Medical exams may be required for larger amounts, but many policies up to $500K can be issued without one.',
    'apply process': 'The application process is simple: 1) Get your quote online 2) Complete the application with a licensed agent 3) Undergo medical screening if required 4) Review and sign your policy 5) Coverage begins once approved. Most applications are processed within 2-4 weeks.'
  };

  const handleOpen = () => {
    setIsOpen(true);
    if (!isInitialized) {
      setMessages([initialMessage]);
      setIsInitialized(true);
    }
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Generate bot response
    setTimeout(() => {
      let botResponse = "I'd be happy to help you with that! For detailed information about your specific situation, I recommend speaking with one of our licensed insurance professionals. You can schedule a free consultation through our quote form.";

      // Check for keywords in the message
      const lowerText = text.toLowerCase();
      if (lowerText.includes('term') || lowerText.includes('whole')) {
        botResponse = botResponses['term vs whole'];
      } else if (lowerText.includes('coverage') || lowerText.includes('amount') || lowerText.includes('much')) {
        botResponse = botResponses['coverage amount'];
      } else if (lowerText.includes('premium') || lowerText.includes('cost') || lowerText.includes('price')) {
        botResponse = botResponses['premium factors'];
      } else if (lowerText.includes('apply') || lowerText.includes('process') || lowerText.includes('how')) {
        botResponse = botResponses['apply process'];
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleQuickResponse = (response: string) => {
    handleSendMessage(response);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={isOpen ? () => setIsOpen(false) : handleOpen}
        className="fixed bottom-6 left-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center z-40"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-40 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
              <Bot className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-semibold">SmartLife Assistant</h3>
              <p className="text-xs text-blue-100">Here to help with life insurance</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                {message.isBot && (
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-blue-600" />
                  </div>
                )}
                <div
                  className={`max-w-[280px] p-3 rounded-2xl ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                </div>
                {!message.isBot && (
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
            ))}

            {/* Quick Response Buttons */}
            {messages.length === 1 && (
              <div className="space-y-2">
                <p className="text-xs text-gray-500 px-3">Quick questions:</p>
                {quickResponses.map((response, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickResponse(response)}
                    className="block w-full text-left p-2 text-sm text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    {response}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;
```


## `src/components/Common/AppointmentModal.tsx`

```tsx
import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct: string;
}

const AppointmentModal = ({ isOpen, onClose, selectedProduct }: AppointmentModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
        <div className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-50" onClick={resetAndClose}></div>

        <div className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          {!isSubmitted ? (
            <>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Schedule Your Consultation
                </h3>
                <button
                  onClick={resetAndClose}
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      {...register('firstName', { required: 'First name is required' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      {...register('lastName', { required: 'Last name is required' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    {...register('phone', { required: 'Phone number is required' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* Preferred Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      {...register('preferredDate', { required: 'Preferred date is required' })}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time
                    </label>
                    <select
                      {...register('preferredTime', { required: 'Preferred time is required' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Communication Preference */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How would you like to meet?
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'phone', label: 'Phone Call', icon: Phone },
                      { value: 'video', label: 'Video Call', icon: Calendar },
                      { value: 'email', label: 'Email Follow-up', icon: Mail }
                    ].map(option => (
                      <label key={option.value} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          value={option.value}
                          {...register('communicationMethod', { required: 'Please select a communication method' })}
                          className="mr-3 h-4 w-4 text-blue-600"
                        />
                        <option.icon className="h-4 w-4 text-gray-600 mr-2" />
                        <span className="text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Schedule Appointment
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Appointment Scheduled!
              </h3>
              <p className="text-gray-600 mb-6">
                Thank you for scheduling your consultation. We'll send you a confirmation email shortly with all the details.
              </p>
              <button
                onClick={resetAndClose}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
```


## `src/components/Common/CookieBanner.tsx`

```tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('smartlife-cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('smartlife-cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('smartlife-cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Cookie className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-gray-700">
              <p className="mb-1">
                We use cookies to enhance your experience and provide personalized insurance quotes.
              </p>
              <p>
                By continuing to use our site, you agree to our use of cookies.{' '}
                <Link to="/cookie-policy" className="text-blue-600 hover:text-blue-700 underline">
                  Learn more
                </Link>
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Accept Cookies
            </button>
            <button
              onClick={handleDecline}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
```


## `src/components/Common/LoadingModal.tsx`

```tsx
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
```


## `src/components/Common/QuoteModal.tsx`

```tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
        <div className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-50" onClick={onClose}></div>

        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Know what you want?
            </h3>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 text-green-600 mb-4">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">✓ No hidden fees</span>
            </div>
            
            <p className="text-gray-600 mb-4">
              Browse our products first or get a personalized quote based on your specific needs.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              to="/products"
              onClick={onClose}
              className="w-full px-4 py-3 text-center font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
            >
              View Products
            </Link>
            
            <Link
              to="/quote"
              onClick={onClose}
              className="w-full px-4 py-3 text-center font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              Get Personalized Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
```


## `src/components/Layout/Header.tsx`

```tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Shield className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
            <span className="text-2xl font-bold gradient-text">SmartLife</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/quote"
              className={`font-medium transition-colors ${
                isActive('/quote') 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Get Quote
            </Link>
            <Link
              to="/products"
              className={`font-medium transition-colors ${
                isActive('/products') 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About
            </Link>
          </nav>

          {/* Broker Login Button */}
          <div className="hidden md:block">
            <Link
              to="/broker-login"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Broker Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`font-medium ${
                  isActive('/') ? 'text-blue-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/quote"
                className={`font-medium ${
                  isActive('/quote') ? 'text-blue-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
              <Link
                to="/products"
                className={`font-medium ${
                  isActive('/products') ? 'text-blue-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/about"
                className={`font-medium ${
                  isActive('/about') ? 'text-blue-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/broker-login"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Broker Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
```


## `src/components/Quote/LiveQuoteDisplay.tsx`

```tsx
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
```


## `src/components/Quote/ProductRecommendations.tsx`

```tsx
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
```


## `src/components/Quote/QuoteForm.tsx`

```tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuote } from '../../contexts/QuoteContext';
import { User, Heart, Target, DollarSign, Clock, CheckCircle } from 'lucide-react';

interface QuoteFormProps {
  onSubmit: () => void;
}

const QuoteForm = ({ onSubmit }: QuoteFormProps) => {
  const { quoteData, setQuoteData, isFormComplete } = useQuote();
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: quoteData
  });

  const watchedValues = watch();
  
  React.useEffect(() => {
    setQuoteData(watchedValues);
  }, [watchedValues, setQuoteData]);

  const handleFormSubmit = () => {
    if (isFormComplete) {
      onSubmit();
    }
  };

  const primaryGoalOptions = [
    'Family protection',
    'Debt coverage',
    'Income replacement',
    'Estate planning',
    'Business protection',
    'Other'
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
        {/* Age Input */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <User className="h-5 w-5 text-blue-600" />
            </div>
            <label htmlFor="age" className="text-lg font-semibold text-gray-900">
              What's your age?
            </label>
          </div>
          <div className="ml-12">
            <input
              id="age"
              type="number"
              min="18"
              max="85"
              {...register('age', { required: 'Age is required', min: 18, max: 85 })}
              className="w-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="35"
            />
            {errors.age && (
              <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
            )}
          </div>
        </div>

        {/* Gender Selection */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <User className="h-5 w-5 text-green-600" />
            </div>
            <label className="text-lg font-semibold text-gray-900">
              Gender
            </label>
          </div>
          <div className="ml-12 grid grid-cols-3 gap-3">
            {['male', 'female', 'other'].map((gender) => (
              <label key={gender} className="relative cursor-pointer">
                <input
                  type="radio"
                  value={gender}
                  {...register('gender', { required: 'Gender selection is required' })}
                  className="sr-only"
                />
                <div className={`p-3 border-2 rounded-lg text-center font-medium transition-all ${
                  watchedValues.gender === gender
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 text-gray-700 hover:border-gray-300'
                }`}>
                  {gender.charAt(0).toUpperCase() + gender.slice(1)}
                </div>
              </label>
            ))}
          </div>
          {errors.gender && (
            <p className="text-red-500 text-sm ml-12">{errors.gender.message}</p>
          )}
        </div>

        {/* Smoking Status */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <Heart className="h-5 w-5 text-red-600" />
            </div>
            <label className="text-lg font-semibold text-gray-900">
              Smoking Status
            </label>
          </div>
          <div className="ml-12 space-y-2">
            {[
              { value: 'never', label: 'Never smoked' },
              { value: 'former', label: 'Former smoker (quit 12+ months ago)' },
              { value: 'current', label: 'Current smoker' }
            ].map((option) => (
              <label key={option.value} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  value={option.value}
                  {...register('smokingStatus', { required: 'Smoking status is required' })}
                  className="mr-3 h-4 w-4 text-blue-600"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
          {errors.smokingStatus && (
            <p className="text-red-500 text-sm ml-12">{errors.smokingStatus.message}</p>
          )}
        </div>

        {/* Coverage Amount */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <DollarSign className="h-5 w-5 text-purple-600" />
            </div>
            <label className="text-lg font-semibold text-gray-900">
              Coverage Amount
            </label>
          </div>
          <div className="ml-12">
            <div className="mb-4">
              <input
                type="range"
                min="100000"
                max="2000000"
                step="50000"
                {...register('coverageAmount')}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer progress-bar"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>$100K</span>
                <span className="font-semibold text-lg text-gray-900">
                  ${(watchedValues.coverageAmount || 500000).toLocaleString()}
                </span>
                <span>$2M</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Length */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Clock className="h-5 w-5 text-orange-600" />
            </div>
            <label className="text-lg font-semibold text-gray-900">
              Coverage Length
            </label>
          </div>
          <div className="ml-12">
            <div className="mb-4">
              <input
                type="range"
                min="10"
                max="30"
                step="5"
                {...register('coverageLength')}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer progress-bar"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>10 years</span>
                <span className="font-semibold text-lg text-gray-900">
                  {watchedValues.coverageLength || 20} years
                </span>
                <span>30 years</span>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Goals */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Target className="h-5 w-5 text-teal-600" />
            </div>
            <label className="text-lg font-semibold text-gray-900">
              Primary Goals (Select all that apply)
            </label>
          </div>
          <div className="ml-12 grid grid-cols-2 gap-3">
            {primaryGoalOptions.map((goal) => (
              <label key={goal} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value={goal}
                  {...register('primaryGoals', { required: 'Select at least one goal' })}
                  className="mr-3 h-4 w-4 text-blue-600 rounded"
                />
                <span className="text-gray-700">{goal}</span>
              </label>
            ))}
          </div>
          {errors.primaryGoals && (
            <p className="text-red-500 text-sm ml-12">{errors.primaryGoals.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-6 border-t border-gray-200">
          <button
            type="submit"
            disabled={!isFormComplete}
            className={`w-full py-4 px-6 rounded-lg font-semibold transition-all ${
              isFormComplete
                ? 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            } flex items-center justify-center gap-2`}
          >
            {isFormComplete && <CheckCircle className="h-5 w-5" />}
            Get My Personalized Quote
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
```


## `src/contexts/QuoteContext.tsx`

```tsx
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
```


## `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

```


## `src/main.tsx`

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

```


## `src/pages/AboutPage.tsx`

```tsx
import React from 'react';
import { Shield, Users, Award, MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: '10+', label: 'Years of Excellence' },
    { number: '50,000+', label: 'Satisfied Customers' },
    { number: '15+', label: 'Insurance Partners' },
    { number: '99.2%', label: 'Customer Satisfaction' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We believe in complete transparency with no hidden fees or surprises. Every quote is clear and honest.',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your needs come first. We provide personalized service and support throughout your insurance journey.',
      color: 'text-green-600'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from our technology to our customer service.',
      color: 'text-purple-600'
    }
  ];

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '15+ years in insurance industry, former VP at major Canadian insurer'
    },
    {
      name: 'David Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in AI and fintech, previously at leading tech companies'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Customer Success',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Licensed insurance professional with 12+ years of client relations'
    }
  ];

  const licenses = [
    'Licensed in all 10 Canadian provinces',
    'Member of Insurance Brokers Association of Canada',
    'Registered with FSRA (Financial Services Regulatory Authority)',
    'Compliant with PIPEDA privacy regulations'
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-6">
              About SmartLife
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing life insurance in Canada with AI-powered technology, transparent pricing, and exceptional customer service. Our mission is to make life insurance accessible, affordable, and understandable for every Canadian family.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  SmartLife was founded in 2014 with a simple vision: make life insurance simple, transparent, and accessible for every Canadian. We recognized that traditional insurance processes were outdated, complicated, and often left customers confused about their coverage.
                </p>
                <p>
                  By combining cutting-edge AI technology with human expertise, we've created a platform that delivers personalized quotes in minutes while maintaining the personal touch that insurance decisions require.
                </p>
                <p>
                  Today, we're proud to serve over 50,000 Canadian families and work with 15+ top-rated insurance providers to ensure our customers get the best rates and coverage options available.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                <Shield className="h-12 w-12 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we serve our customers.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className={`inline-flex p-4 rounded-xl bg-white shadow-md mb-6 ${value.color}`}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to transforming the life insurance industry.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licensing & Compliance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Licensed & Compliant
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                SmartLife operates under the highest regulatory standards to ensure your protection and peace of mind. We maintain all required licenses and certifications across Canada.
              </p>
              <ul className="space-y-3">
                {licenses.map((license, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{license}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900">Headquarters</p>
                    <p className="text-gray-600">Toronto, Ontario, Canada</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">1-800-SMARTLIFE</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">hello@smartlife.ca</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900">Business Hours</p>
                    <p className="text-gray-600">Mon-Fri 8AM-8PM EST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
```


## `src/pages/BrokerLoginPage.tsx`

```tsx
import React, { useState } from 'react';
import { Shield, Eye, EyeOff, Lock, User, Building } from 'lucide-react';
import { useForm } from 'react-hook-form';

const BrokerLoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Login attempt:', data);
    setIsLoading(false);
    // In a real app, handle authentication here
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-md w-full mx-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold gradient-text">SmartLife</span>
          </div>
          <h1 className="text-2xl font-serif font-bold text-gray-900 mb-2">
            Broker Portal
          </h1>
          <p className="text-gray-600">
            Access your professional dashboard
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', { 
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters'
                    }
                  })}
                  className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  {...register('remember')}
                  className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Remember me</span>
              </label>
              <button
                type="button"
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
                isLoading
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Signing in...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative bg-white px-4">
                <span className="text-sm text-gray-500">New broker?</span>
              </div>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Request broker access
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Building className="h-5 w-5 text-blue-600" />
            Broker Portal Features
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
              Manage client quotes and applications
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
              Access commission reports and tracking
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
              Marketing materials and resources
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2"></div>
              Training and certification tools
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Need help? Contact broker support at{' '}
          <a href="tel:1-800-SMARTLIFE" className="text-blue-600 hover:text-blue-700">
            1-800-SMARTLIFE
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrokerLoginPage;
```


## `src/pages/CookiePolicyPage.tsx`

```tsx
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
```


## `src/pages/HomePage.tsx`

```tsx
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
```


## `src/pages/NotFoundPage.tsx`

```tsx
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
```


## `src/pages/ProductsPage.tsx`

```tsx
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
```


## `src/pages/QuotePage.tsx`

```tsx
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
```


## `src/vite-env.d.ts`

```ts
/// <reference types="vite/client" />

```