'use client'

import { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactReasons: [],
    budget: 3000,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://submit-form.com/n0ZyQFoWu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          contactReasons: formData.contactReasons.join(', '),
          budget: `$${formData.budget}`,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          contactReasons: [],
          budget: 3000,
          message: ''
        });
      } else {
        setSubmitStatus('error');
        console.error('Form submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[800px] mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 relative">
      {/* Success Message */}
      {/* Success Modal */}
      {submitStatus === 'success' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#1E293B] border border-[#57BB6D] rounded-2xl p-6 sm:p-8 md:p-10 max-w-md w-full relative shadow-[0_0_50px_rgba(87,187,109,0.2)] animate-scale-in">
            <button
              onClick={() => setSubmitStatus(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#57BB6D]/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-[#57BB6D]" />
              </div>

              <h3 className="font-barlow font-bold text-2xl sm:text-3xl text-white mb-2">
                Message Sent!
              </h3>

              <p className="font-barlow text-gray-300 mb-8 leading-relaxed">
                Thank you for reaching out. We've received your message and will get back to you within 24 hours.
              </p>

              <div className="w-full space-y-4">
                <div className="bg-[#0F172A] rounded-xl p-4 border border-gray-800">
                  <p className="text-sm text-gray-400 mb-3">Want to discuss your project right now?</p>
                  <Link
                    href={process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-[#57BB6D] hover:bg-[#469e59] text-white font-barlow font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                  >
                    Schedule A Call
                  </Link>
                </div>

                <button
                  onClick={() => setSubmitStatus(null)}
                  className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-600/20 border border-red-500 rounded-lg text-red-400 text-center">
          <p className="font-barlow font-semibold">Something went wrong. Please try again.</p>
        </div>
      )}

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
            required
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
            required
            className="w-full px-4 py-3 sm:py-4 bg-[#1E293B] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#57BB6D] text-sm sm:text-base"
          />
        </div>

        {/* Why are you contacting us? */}
        <div>
          <label className="block text-white font-barlow font-medium text-base sm:text-lg md:text-[18px] mb-2 sm:mb-3">
            Why are you contacting us?
          </label>
          <div className="space-y-2 sm:space-y-3">
            {['AI Powered Mobile App Development', 'AI Powered Web Development', 'LLM Integrations', 'Agentic AI', 'SaaS Development', 'AIaaS (AI as a Service)', 'Vibe Coded Solutions', 'Automations & Integrations', 'UI/UX Design', 'Others'].map((reason) => (
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
            required
            className="w-full px-4 py-3 bg-[#1E293B] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#57BB6D] resize-none text-sm sm:text-base min-h-[120px] sm:min-h-[150px]"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-4 sm:pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`ripple-button animate-glow-pulse text-white font-barlow font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-all duration-500 w-full sm:w-auto text-sm sm:text-base bg-gradient-to-r from-[#52B069] to-[#3a8b4f] border-2 border-[#52B069] hover:shadow-[0_0_35px_8px_rgba(82,176,105,0.5)] hover:scale-[1.05] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}