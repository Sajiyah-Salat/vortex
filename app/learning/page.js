"use client"

import React , {useState} from 'react'
import { MessageCircle, Trophy, Flag, Shield, Users, Upload, Mic, FileText, BarChart, Play, CheckCircle } from 'lucide-react';


function page() {
    const [activeQuest, setActiveQuest] = useState(null);
    const [analysisText, setAnalysisText] = useState('');
  
    const quests = [
      {
        id: 1,
        title: "Understanding Consent",
        description: "Learn what consent means in different situations.",
        icon: <Shield size={32} className="text-orange-400" />,
        progress: 75,
        type: "Mini Quiz"
      },
      {
        id: 2,
        title: "Recognizing Red Flags",
        description: "Identify warning signs of unhealthy relationships.",
        icon: <Flag size={32} className="text-emerald-400" />,
        progress: 50,
        type: "Scenario Quiz"
      },
      {
        id: 3,
        title: "Safety Planning",
        description: "Steps to create a safety escape plan.",
        icon: <CheckCircle size={32} className="text-blue-400" />,
        progress: 25,
        type: "Checklist"
      },
      {
        id: 4,
        title: "How to Support Others",
        description: "How to help a friend in need.",
        icon: <Users size={32} className="text-purple-400" />,
        progress: 0,
        type: "Video Guide"
      }
    ];
  return (
    <div className="min-h-screen bg-[#0A192F]">


      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-[#00F5A0]/10 to-[#00D9A0]/10">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Learn, Empower, and Stay Safe
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Understand boundaries, consent, and safety through interactive learning.
          </p>
          <button className="bg-gradient-to-r from-[#00F5A0] to-[#00D9A0] text-[#0A192F] px-8 py-4 rounded-lg hover:opacity-90 font-semibold">
            Start Learning Now
          </button>
        </div>
      </section>

      {/* Interactive Quests Section */}
      <section className="py-16 bg-[#0A192F]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Your Learning Journey Begins Here</h2>
              <p className="text-gray-300">Complete quests, earn badges, and learn how to stay safe.</p>
            </div>
            <div className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-lg">
              <Trophy className="text-[#00F5A0]" />
              <span className="text-white">2/4 Completed</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quests.map(quest => (
              <div key={quest.id} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                <div className="flex justify-between items-start mb-4">
                  {quest.icon}
                  <span className="text-sm text-gray-400">{quest.type}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{quest.title}</h3>
                <p className="text-gray-300 mb-4">{quest.description}</p>
                <div className="bg-gray-800 h-2 rounded-full mb-4">
                  <div 
                    className="bg-[#00F5A0] h-2 rounded-full" 
                    style={{width: `${quest.progress}%`}}
                  />
                </div>
                <button className="w-full bg-white/10 text-white border border-[#00F5A0] py-2 rounded-lg hover:bg-white/20">
                  {quest.progress === 0 ? 'Start Quest' : 'Continue Quest'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Analysis Section */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-2">AI Safety Check</h2>
          <p className="text-gray-300 mb-8">Use our AI-powered tool to analyze conversations or voice inputs for potential risks.</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">Text Analysis</h3>
              <textarea
                className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700 mb-4"
                placeholder="Enter text to analyze..."
                rows={4}
                value={analysisText}
                onChange={(e) => setAnalysisText(e.target.value)}
              />
              <button className="w-full bg-gradient-to-r from-[#00F5A0] to-[#00D9A0] text-[#0A192F] py-2 rounded-lg hover:opacity-90 font-semibold">
                Analyze Text
              </button>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">Voice Analysis</h3>
              <div className="flex items-center justify-center h-32 bg-gray-800 rounded-lg border border-gray-700 mb-4">
                <button className="flex items-center gap-2 text-[#00F5A0]">
                  <Mic size={32} />
                  <span>Click to Record</span>
                </button>
              </div>
              <button className="w-full bg-gradient-to-r from-[#00F5A0] to-[#00D9A0] text-[#0A192F] py-2 rounded-lg hover:opacity-90 font-semibold">
                Start Voice Analysis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#0A192F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Your safety and knowledge are powerful. Keep learning!</h2>
          <div className="flex gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#00F5A0] to-[#00D9A0] text-[#0A192F] px-6 py-3 rounded-lg hover:opacity-90 font-semibold">
              Restart Quests
            </button>
            <button className="bg-white/10 text-white border border-[#00F5A0] px-6 py-3 rounded-lg hover:bg-white/20">
              Find More Resources
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
