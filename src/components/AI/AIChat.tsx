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