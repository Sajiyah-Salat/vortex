"use client"

import React from 'react'
import { MessageCircle, Phone, MapPin, Lock, Plus, ThumbsUp, MessageSquare } from 'lucide-react';

function page() {
     // Sample shelter data
  const shelters = [
    {
      id: 1,
      name: "Safe Haven Center",
      location: "Portland, OR",
      contact: "503-555-0123",
      availability: "Space available",
    },
    {
      id: 2,
      name: "New Beginning House",
      location: "Seattle, WA",
      contact: "206-555-0123",
      availability: "Limited space",
    },
    {
      id: 3,
      name: "Hope Forward Shelter",
      location: "Vancouver, WA",
      contact: "360-555-0123",
      availability: "Space available",
    }
  ];

  // Sample forum threads
  const threads = [
    {
      id: 1,
      title: "How did you leave an abusive situation?",
      replies: 23,
      upvotes: 45,
      author: "Anonymous_Survivor",
      timeAgo: "2 hours ago"
    },
    {
      id: 2,
      title: "Resources for financial independence",
      replies: 15,
      upvotes: 32,
      author: "Hope_Seeker",
      timeAgo: "4 hours ago"
    },
    {
      id: 3,
      title: "Dealing with legal system - my experience",
      replies: 18,
      upvotes: 38,
      author: "Healing_Journey",
      timeAgo: "1 day ago"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A192F]">
  



    {/* Hero Section */}
    <section className="pt-20 bg-gradient-to-br from-[#00F5A0]/10 to-[#00D9A0]/10">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Find Safe Spaces & Support. You're Not Alone.
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Get help from shelters, financial aid, and survivor communities.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-gradient-to-r from-[#00F5A0] to-[#00D9A0] text-[#0A192F] px-6 py-3 rounded-lg hover:opacity-90 font-semibold">
            Find a Shelter
          </button>
          <button className="bg-white/10 text-white border border-[#00F5A0] px-6 py-3 rounded-lg hover:bg-white/20">
            Join Support Group
          </button>
        </div>
      </div>
    </section>

    {/* Shelters & Financial Aid Section */}
    <section className="py-16 bg-[#0A192F]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-4">Find Safe Housing & Financial Assistance</h2>
        <p className="text-gray-300 mb-8">Locate nearby shelters, emergency housing, and support programs tailored to your situation.</p>
        
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Enter city or zip code..."
            className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
          />
        </div>

        {/* Map Placeholder */}
        <div className="bg-gray-800 rounded-lg h-64 mb-8 flex items-center justify-center">
          <MapPin className="text-[#00F5A0] mr-2" />
          <span className="text-gray-300">Interactive Map Coming Soon</span>
        </div>

        {/* Shelter Listings */}
        <div className="grid md:grid-cols-3 gap-6">
          {shelters.map(shelter => (
            <div key={shelter.id} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-2">{shelter.name}</h3>
              <p className="text-gray-300 mb-1"><MapPin className="inline mr-2" size={16} />{shelter.location}</p>
              <p className="text-gray-300 mb-4"><Phone className="inline mr-2" size={16} />{shelter.contact}</p>
              <span className="text-[#00F5A0] text-sm mb-4 block">{shelter.availability}</span>
              <button className="w-full bg-gradient-to-r from-[#00F5A0] to-[#00D9A0] text-[#0A192F] py-2 rounded-lg hover:opacity-90 font-semibold">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Peer Support Network Section */}
    <section className="py-16 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-4">Connect with Others Who Understand</h2>
        <p className="text-gray-300 mb-8">Join an anonymous, safe space to share experiences and seek advice from fellow survivors.</p>

        {/* Safety Warning Box */}
        <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4 mb-8 flex items-start">
          <Lock className="text-[#00F5A0] mr-3 mt-1" />
          <p className="text-gray-300">Your privacy matters. Use a secure device and avoid sharing personal details.</p>
        </div>

        {/* Forum Threads */}
        <div className="space-y-4 mb-8">
          {threads.map(thread => (
            <div key={thread.id} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-2">{thread.title}</h3>
              <p className="text-gray-400 text-sm mb-4">Posted by {thread.author} • {thread.timeAgo}</p>
              <div className="flex items-center gap-4 text-gray-300">
                <span className="flex items-center"><MessageSquare className="mr-1" size={16} /> {thread.replies} replies</span>
                <span className="flex items-center"><ThumbsUp className="mr-1" size={16} /> {thread.upvotes} upvotes</span>
              </div>
              <button className="mt-4 w-full bg-white/10 text-white border border-[#00F5A0] py-2 rounded-lg hover:bg-white/20">
                Join Discussion
              </button>
            </div>
          ))}
        </div>

        <button className="w-full md:w-auto bg-gradient-to-r from-[#00F5A0] to-[#00D9A0] text-[#0A192F] px-6 py-3 rounded-lg hover:opacity-90 font-semibold flex items-center justify-center">
          <Plus className="mr-2" /> Start a New Discussion
        </button>
      </div>
    </section>

    {/* Emergency Hotlines Section (Sticky) */}
    <div className="fixed bottom-0 left-0 w-full bg-red-900/95 py-4 z-40">
      <div className="container mx-auto px-4">
        <h3 className="text-white font-semibold mb-2">Need Urgent Help? Call a Trusted Support Line</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <button className="bg-red-700 text-white py-2 px-4 rounded flex items-center justify-center hover:bg-red-800">
            <Phone className="mr-2" /> Domestic Violence Hotline
          </button>
          <button className="bg-red-700 text-white py-2 px-4 rounded flex items-center justify-center hover:bg-red-800">
            <Phone className="mr-2" /> Mental Health Helpline
          </button>
          <button className="bg-red-700 text-white py-2 px-4 rounded flex items-center justify-center hover:bg-red-800">
            <Phone className="mr-2" /> Legal Aid Number
          </button>
        </div>
      </div>
    </div>

    {/* AI Chatbot Button */}
    <button className="fixed bottom-24 right-6 bg-gradient-to-r from-[#00F5A0] to-[#00D9A0] text-[#0A192F] p-4 rounded-full shadow-lg hover:opacity-90 flex items-center gap-2 font-semibold">
      <MessageCircle size={24} />
      <span>Chat Now</span>
    </button>
  </div>
  )
}

export default page
