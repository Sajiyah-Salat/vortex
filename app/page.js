"use client"

import Head from 'next/head';
import { MessageCircle } from 'lucide-react';


export default function Home() {
  const brandColors = {
    darkBg: '#0A192F',     // Dark navy background from logo
    teal: '#00F5A0',       // Bright teal from logo
    emerald: '#00D9A0',    // Emerald green from logo
    white: '#FFFFFF'
  };
  return (
<>
<div className="min-h-screen bg-[#0A192F]">
      


      {/* Hero Section */}
      <section className="pt-56 bg-gradient-to-br from-[#00F5A0]/10 to-[#00D9A0]/10">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            You're Not Alone. We're Here to Help.
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Get the support, safety, and legal guidance you need—right now.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#00F5A0] to-[#00D9A0] text-[#0A192F] px-6 py-3 rounded-lg hover:opacity-90 font-semibold">
              Find Help Now
            </button>
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
              Emergency Support
            </button>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-16 bg-[#0A192F]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Legal Help Card */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3 text-white">Legal Help</h3>
              <p className="text-gray-300 mb-4">Learn your rights and take action.</p>
              <button className="w-full bg-gradient-to-r from-[#00F5A0] to-[#00D9A0] text-[#0A192F] py-2 rounded-lg hover:opacity-90 font-semibold">
                Legal Support
              </button>
            </div>

            {/* Safe Shelter Card */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3 text-white">Safe Shelter</h3>
              <p className="text-gray-300 mb-4">Find a safe space near you.</p>
              <button className="w-full bg-gradient-to-r from-[#00F5A0] to-[#00D9A0] text-[#0A192F] py-2 rounded-lg hover:opacity-90 font-semibold">
                Find Shelter
              </button>
            </div>

            {/* Talk to Someone Card */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3 text-white">Talk to Someone</h3>
              <p className="text-gray-300 mb-4">Connect with counselors and survivors.</p>
              <button className="w-full bg-gradient-to-r from-[#00F5A0] to-[#00D9A0] text-[#0A192F] py-2 rounded-lg hover:opacity-90 font-semibold">
                Join Support Network
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chatbot Button */}
      <button className="fixed bottom-6 right-6 bg-gradient-to-r from-[#00F5A0] to-[#00D9A0] text-[#0A192F] p-4 rounded-full shadow-lg hover:opacity-90 flex items-center gap-2 font-semibold">
        <MessageCircle size={24} />
        <span>Chat Now</span>
      </button>


    </div>
</>
  );
}
