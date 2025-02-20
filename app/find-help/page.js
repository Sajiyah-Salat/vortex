"use client"

import React , {useState} from 'react'
import { MessageCircle, Shield, Users, DollarSign, Phone, MapPin, AlertCircle } from 'lucide-react';

function page() {
  const [helpType, setHelpType] = useState('');
  const [isSafe, setIsSafe] = useState('');
  const [resources, setResources] = useState([]);
  return (
    <div className="min-h-screen bg-[#0A192F]">




      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-[#00F5A0]/10 to-[#00D9A0]/10">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Find the Help You Need, When You Need It
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Personalized guidance on legal rights, shelters, and mental health support.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#00F5A0] to-[#00D9A0] text-[#0A192F] px-6 py-3 rounded-lg hover:opacity-90 font-semibold">
              Start My Action Plan
            </button>
            <button className="bg-white/10 text-white border border-[#00F5A0] px-6 py-3 rounded-lg hover:bg-white/20">
              Talk to a Counselor
            </button>
          </div>
        </div>
      </section>

      {/* Personalized Action Plan */}
      <section className="py-16 bg-[#0A192F]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Create Your Personalized Plan</h2>
          <p className="text-gray-300 mb-8">Answer a few questions, and we'll guide you to the right resources.</p>
          
          <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
            <form className="space-y-6">
              <div>
                <label className="block text-white mb-2">What type of help do you need?</label>
                <select 
                  className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
                  value={helpType}
                  onChange={(e) => setHelpType(e.target.value)}
                >
                  <option value="">Select type of help...</option>
                  <option value="legal">Legal Support</option>
                  <option value="shelter">Shelter</option>
                  <option value="mental">Mental Health</option>
                  <option value="financial">Financial Aid</option>
                </select>
              </div>

              <div>
                <label className="block text-white mb-2">Do you feel safe at home?</label>
                <div className="space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="safety"
                      value="yes"
                      className="form-radio text-[#00F5A0]"
                      onChange={(e) => setIsSafe(e.target.value)}
                    />
                    <span className="ml-2 text-white">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="safety"
                      value="no"
                      className="form-radio text-[#00F5A0]"
                      onChange={(e) => setIsSafe(e.target.value)}
                    />
                    <span className="ml-2 text-white">No</span>
                  </label>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-[#00F5A0] to-[#00D9A0] text-[#0A192F] py-3 rounded-lg hover:opacity-90 font-semibold">
                Generate My Action Plan
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Legal Rights & Support */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Know Your Legal Rights</h2>
          <p className="text-gray-300 mb-8">Understand your rights regarding protection, custody, and financial aid.</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <Shield className="text-[#00F5A0] mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-white">Protective Orders</h3>
              <p className="text-gray-300 mb-4">Learn how to file for a restraining order.</p>
              <button className="w-full bg-white/10 text-white border border-[#00F5A0] py-2 rounded-lg hover:bg-white/20">
                Learn More
              </button>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <Users className="text-[#00F5A0] mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-white">Custody & Child Support</h3>
              <p className="text-gray-300 mb-4">Understand your legal rights as a parent.</p>
              <button className="w-full bg-white/10 text-white border border-[#00F5A0] py-2 rounded-lg hover:bg-white/20">
                Learn More
              </button>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <DollarSign className="text-[#00F5A0] mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-white">Financial Independence</h3>
              <p className="text-gray-300 mb-4">Find out about financial aid and employment resources.</p>
              <button className="w-full bg-white/10 text-white border border-[#00F5A0] py-2 rounded-lg hover:bg-white/20">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mental Health Resources */}
      <section className="py-16 bg-[#0A192F]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Support for Your Well-Being</h2>
          <p className="text-gray-300 mb-8">Access therapists, self-help tools, and support groups.</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3 text-white">Find a Therapist</h3>
              <p className="text-gray-300 mb-4">Connect with licensed professionals specializing in trauma support.</p>
              <button className="w-full bg-gradient-to-r from-[#00F5A0] to-[#00D9A0] text-[#0A192F] py-2 rounded-lg hover:opacity-90 font-semibold">
                Talk to a Therapist Now
              </button>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3 text-white">Self-Help Tools</h3>
              <p className="text-gray-300 mb-4">Access meditation guides, journaling prompts, and breathing exercises.</p>
              <button className="w-full bg-gradient-to-r from-[#00F5A0] to-[#00D9A0] text-[#0A192F] py-2 rounded-lg hover:opacity-90 font-semibold">
                Explore Tools
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation & Emergency Help */}
      <section className="py-16 bg-red-900/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Need Immediate Help?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <button className="bg-red-600 p-6 rounded-xl text-white hover:bg-red-700 flex flex-col items-center">
              <Phone size={32} className="mb-2" />
              <span>Call a Hotline</span>
            </button>
            <button className="bg-red-600 p-6 rounded-xl text-white hover:bg-red-700 flex flex-col items-center">
              <MapPin size={32} className="mb-2" />
              <span>Find a Safe Place</span>
            </button>
            <button className="bg-red-600 p-6 rounded-xl text-white hover:bg-red-700 flex flex-col items-center">
              <AlertCircle size={32} className="mb-2" />
              <span>Report an Incident</span>
            </button>
          </div>
        </div>
      </section>

      {/* AI Chatbot Button */}
      <button className="fixed bottom-6 right-6 bg-gradient-to-r from-[#00F5A0] to-[#00D9A0] text-[#0A192F] p-4 rounded-full shadow-lg hover:opacity-90 flex items-center gap-2 font-semibold">
        <MessageCircle size={24} />
        <span>Chat Now</span>
      </button>
    </div>
  )
}

export default page
