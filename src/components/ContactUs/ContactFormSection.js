'use client'

import { useState } from 'react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactReasons: [],
    budget: 3000,
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (reason) => {
    setFormData(prev => ({
      ...prev,
      contactReasons: prev.contactReasons.includes(reason)
        ? prev.contactReasons.filter(r => r !== reason)
        : [...prev.contactReasons, reason]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full max-w-[800px] mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
        {/* Full Name */}
        <div>
          <label className="block text-white font-barlow font-medium text-base sm:text-lg md:text-[18px] mb-2 sm:mb-3">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Type here"
            className="w-full px-4 py-3 sm:py-4 bg-[#1E293B] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#57BB6D] text-sm sm:text-base"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-white font-barlow font-medium text-base sm:text-lg md:text-[18px] mb-2 sm:mb-3">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Type here"
            className="w-full px-4 py-3 sm:py-4 bg-[#1E293B] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#57BB6D] text-sm sm:text-base"
          />
        </div>

        {/* Why are you contacting us? */}
        <div>
          <label className="block text-white font-barlow font-medium text-base sm:text-lg md:text-[18px] mb-2 sm:mb-3">
            Why are you contacting us?
          </label>
          <div className="space-y-2 sm:space-y-3">
            {['Web Design', 'Mobile App Design', 'Collaboration', 'Others'].map((reason) => (
              <label key={reason} className="flex items-center space-x-3 cursor-pointer py-1">
                <input
                  type="checkbox"
                  checked={formData.contactReasons.includes(reason)}
                  onChange={() => handleCheckboxChange(reason)}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#57BB6D] bg-[#1E293B] border-gray-600 rounded focus:ring-[#57BB6D] flex-shrink-0"
                />
                <span className="text-white font-barlow text-sm sm:text-base md:text-[16px]">{reason}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Your Budget */}
        <div>
          <label className="block text-white font-barlow font-medium text-base sm:text-lg md:text-[18px] mb-2 sm:mb-3">
            Your Budget
          </label>
          <div className="space-y-2 sm:space-y-3">
            <p className="text-gray-400 text-xs sm:text-sm">Slide to indicate your budget range</p>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex-1 relative">
                <input
                  type="range"
                  name="budget"
                  min="1000"
                  max="5000"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full h-2 bg-[#1E293B] rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #57BB6D 0%, #57BB6D ${((formData.budget - 1000) / 4000) * 100}%, #1E293B ${((formData.budget - 1000) / 4000) * 100}%, #1E293B 100%)`
                  }}
                />
                <div className="flex justify-between text-xs sm:text-sm text-gray-400 mt-1">
                  <span>$1000</span>
                  <span>$5000</span>
                </div>
              </div>
              <div className="text-center sm:text-right">
                <span className="text-[#57BB6D] font-barlow font-medium text-lg sm:text-xl md:text-[18px]">
                  ${formData.budget}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Your Message */}
        <div>
          <label className="block text-white font-barlow font-medium text-base sm:text-lg md:text-[18px] mb-2 sm:mb-3">
            Your Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Type here"
            rows={4}
            className="w-full px-4 py-3 bg-[#1E293B] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#57BB6D] resize-none text-sm sm:text-base min-h-[120px] sm:min-h-[150px]"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-4 sm:pt-6">
          <button
            type="submit"
            className="bg-[#57BB6D] hover:bg-[#4A9B5A] text-white font-barlow font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-colors duration-300 w-full sm:w-auto text-sm sm:text-base"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}