"use client"

import { MessageCircle, Upload, Shield, X } from 'lucide-react';
import { useState } from 'react';

function page() {
    const [showChat, setShowChat] = useState(false);
  

  return (
    <div className="min-h-screen bg-[#0A192F] text-white relative">


    {/* Hero Section */}
    <div className="container mx-auto px-4 pt-48">
      <div className="text-center max-w-3xl mx-auto">
        <Shield className="w-16 h-16 mx-auto mb-6 text-[#00F5A0]" />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Report Abuse Anonymously & Get Help
        </h1>
        <p className="text-gray-300 mb-8">
          Your safety matters. Use this form to report abuse or connect with emergency services.
        </p>
      </div>
    </div>

    {/* Main Content Grid */}
    <div className="container mx-auto px-4 py-8 grid md:grid-cols-2 gap-8">
      {/* Report Form Section */}
      <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
        <h2 className="text-xl font-semibold mb-6">Submit a Report</h2>
        <form className="space-y-6">
          <div>
            <label className="block mb-2">What happened?</label>
            <textarea 
              className="w-full bg-gray-800 rounded-lg p-3 min-h-32"
              placeholder="Share your experience..."
            />
          </div>
          
          <div>
            <label className="block mb-2">Where did it happen?</label>
            <select className="w-full bg-gray-800 rounded-lg p-3">
              <option>Select location</option>
              <option>Home</option>
              <option>Work</option>
              <option>Public Place</option>
              <option>Online</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Do you need immediate help?</label>
            <div className="flex gap-4">
              <button type="button" className="flex-1 bg-red-600 py-2 rounded-lg hover:bg-red-700">Yes</button>
              <button type="button" className="flex-1 bg-gray-700 py-2 rounded-lg hover:bg-gray-600">No</button>
            </div>
          </div>

          <div>
            <label className="block mb-2">Upload Evidence (Optional)</label>
            <button className="w-full bg-gray-800 p-3 rounded-lg flex items-center justify-center gap-2">
              <Upload size={20} />
              Choose Files
            </button>
          </div>

          <div>
            <label className="block mb-2">Contact Information (Optional)</label>
            <input 
              type="email"
              placeholder="Email (or leave blank to stay anonymous)"
              className="w-full bg-gray-800 rounded-lg p-3"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-[#00F5A0] to-[#00D9A0] text-[#0A192F] py-3 rounded-lg font-semibold hover:opacity-90"
          >
            Submit Report Securely
          </button>
        </form>
      </div>

      {/* Emergency Contacts Section */}
      <div className="space-y-6">
        <div className="bg-red-600/20 p-6 rounded-xl border border-red-500">
          <h2 className="text-xl font-semibold mb-4">Emergency Contacts</h2>
          <div className="space-y-4">
            <button className="w-full bg-red-600 py-3 rounded-lg hover:bg-red-700 font-semibold">
              Call Emergency Services (911)
            </button>
            <div className="border-t border-red-500/30 pt-4">
              <h3 className="font-semibold mb-2">Crisis Hotlines:</h3>
              <ul className="space-y-2">
                <li>Domestic Violence: 1-800-799-SAFE</li>
                <li>Sexual Assault: 1-800-656-HOPE</li>
                <li>Mental Health: 1-800-273-8255</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-4">Local Support Services</h2>
          <ul className="space-y-4">
            <li>
              <button className="w-full bg-gray-800 py-2 rounded-lg hover:bg-gray-700 text-left px-4">
                Find Nearby Shelters
              </button>
            </li>
            <li>
              <button className="w-full bg-gray-800 py-2 rounded-lg hover:bg-gray-700 text-left px-4">
                Legal Aid Resources
              </button>
            </li>
            <li>
              <button className="w-full bg-gray-800 py-2 rounded-lg hover:bg-gray-700 text-left px-4">
                Counseling Services
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* AI Chatbot */}
    <button 
      onClick={() => setShowChat(!showChat)}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-[#00F5A0] to-[#00D9A0] text-[#0A192F] p-4 rounded-full shadow-lg hover:opacity-90 flex items-center gap-2 font-semibold"
    >
      <MessageCircle size={24} />
      <span>Chat for Support</span>
    </button>
  </div>
  )
}

export default page
