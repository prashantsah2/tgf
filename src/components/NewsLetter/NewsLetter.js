'use client';
import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="pb-3 md:pb-16  flex items-center justify-center p-4">

      
      <div className="w-full max-w-[1391px]">
        <div className="bg-blue-800 rounded-2xl p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-3">
              <h2 className="text-3xl font-semibold font-lora">
                Subscribe our newsletter
              </h2>
              <p className="text-sm leading-relaxed opacity-95 font-outfit">
                Subscribe to our newsletter and be the first to receive insights, updates, and expert tips on optimizing your financial management.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-white text-xs font-medium">Stay up to date</p>
              
              <div className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white text-sm placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-white/50 focus:border-white/50 transition-all"
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                />
                
                <button
                  onClick={handleSubmit}
                  className="w-full bg-white hover:bg-gray-50 text-teal-600 font-medium py-3 px-6 rounded-lg transition-all text-sm"
                >
                  {isSubmitted ? 'Subscribed ✓' : 'Subscribe'}
                </button>
              </div>

              <p className="text-white/70 text-xs text-center">
                By subscribing you agree to our{' '}
                <span className="underline cursor-pointer">
                  Privacy Policy
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}