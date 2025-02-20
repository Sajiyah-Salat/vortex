import React from 'react'

function Footer() {
  return (
    
    <footer className="bg-gray-900/30 py-8 mt-16 border-t border-gray-800">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold mb-3 text-white">Emergency Contacts</h4>
          <p className="text-gray-300">📞 1-800-SAFE-NOW</p>
          <p className="text-gray-300">help@survivorsteps.org</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-white">Resources</h4>
          <ul className="text-gray-300">
            <li>Legal Help</li>
            <li>Shelters</li>
            <li>Mental Health</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-white">About Us</h4>
          <p className="text-gray-300">Our mission is to provide support and resources to survivors.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-white">Accessibility</h4>
          <button className="text-gray-300 hover:text-[#00F5A0]">Increase Font Size</button>
        </div>
      </div>
      <div className="text-center text-gray-300 mt-8">
        © 2025 Survivor Steps. Your safety is our priority.
      </div>
    </div>
  </footer>
  )
}

export default Footer
