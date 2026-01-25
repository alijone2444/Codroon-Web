"use client";
import Image from "next/image";
import MarginWrapper from "@/components/wrappers/sectionWrapper";
import { useState } from "react";
import BudgetSlider from "../common/slider";
import { menuItems } from "@/constants/menuItems";

export default function ContactSection({ noThankYou }) {
  const solutionsMenu = menuItems.find(item => item.name === 'Solutions');
  const serviceOptions = solutionsMenu?.dropdown?.map(item => item.label) || [];
  const [selectedServices, setSelectedServices] = useState([]);
  const [budget, setBudget] = useState(3000);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleServiceToggle = (service) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          services: selectedServices,
          budget: budget,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({ fullName: '', email: '', message: '' });
        setSelectedServices([]);
        setBudget(3000);
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
   
      <div className="w-full max-w-[1908px] mx-auto">
        {/* Header Section with Hand Background */}
        {!noThankYou && (
          <div className="relative w-full h-auto min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:h-[592.35px] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[350px] py-12 sm:py-16 md:py-20 lg:py-[120px] flex flex-col gap-6 sm:gap-8 md:gap-[50px] items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/Images/hand.jpg"
                alt="Hand background"
                fill
                className="object-cover mix-blend-overlay"
                priority
                sizes="100vw"
              />
            </div>
            
            <div className="absolute inset-0 bg-[#0F172A] opacity-[0.23] mix-blend-overlay"></div>
            
            {/* Content */}
            <div className="relative z-10 text-center w-full">
              {/* Codroon Logo */}
              <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-[50px]">
                <Image
                  src="/codroon-logo.png"
                  alt="Codroon Logo"
                  width={90}
                  height={76}
                  className="mx-auto w-auto h-auto"
                  sizes="(max-width: 640px) 90px, (max-width: 768px) 100px, 121.91px"
                />
              </div>
              
              {/* Thank You Heading */}
              <h2 className="w-full font-barlow font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[38px] leading-[110%] sm:leading-[100%] tracking-[0%] text-center text-white mb-6 sm:mb-8 md:mb-10 lg:mb-[50px] px-4">
                Thank you for your Interest in Codroon.
              </h2>
              
              {/* Description */}
              <p className="w-full font-barlow font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-[140%] sm:leading-[150%] tracking-[-0.6%] text-center text-white mb-8 sm:mb-10 md:mb-12 lg:mb-[50px] px-4 sm:px-8 md:px-12">
                We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.
              </p>
              
              {/* Start Project Button */}
              <div className="flex justify-center px-4">
                <button className="w-full max-w-[232px] cursor-pointer h-[50px] sm:h-[56px] md:h-[63px] bg-green-600 hover:bg-green-700 text-white font-barlow font-medium rounded-[37px] px-6 sm:px-8 md:px-[34px] py-3 sm:py-4 md:py-[18px] flex items-center justify-center gap-2 transition-colors text-sm sm:text-base md:text-lg">
                  Start Project
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Form Section */}
        <div className={`w-full max-w-[900px] mx-auto px-4 sm:px-6 md:px-8 ${!noThankYou?'mt-12 sm:mt-16 md:mt-20 lg:mt-24 py-8 sm:py-12 md:py-16':'py-8 sm:py-12 md:py-16'}`}>
          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-[#57BB6D]/20 border border-[#57BB6D] rounded-[8px] text-[#57BB6D] text-center font-barlow">
              Thank you! Your message has been sent successfully. We'll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-[8px] text-red-400 text-center font-barlow">
              Something went wrong. Please try again later or contact us directly.
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {/* Name and Email Fields */}
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-[40px]">
              <div className="flex-1 bg-[#14243B] p-4 sm:p-6 md:p-[24px] rounded-[8px]">
                <label className="block text-white font-barlow font-medium text-base sm:text-lg md:text-lg mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Type here"
                  required
                  className="w-full bg-transparent border-b border-[#06D6A0] text-white placeholder-[#06D6A0] py-2 focus:outline-none focus:border-[#05C191] text-sm sm:text-base md:text-lg"
                />
              </div>
              <div className="flex-1 bg-[#14243B] p-4 sm:p-6 md:p-[24px] rounded-[8px]">
                <label className="block text-white font-barlow font-medium text-base sm:text-lg md:text-lg mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Type here"
                  required
                  className="w-full bg-transparent border-b border-[#06D6A0] text-white placeholder-[#06D6A0] py-2 focus:outline-none focus:border-[#05C191] text-sm sm:text-base md:text-lg"
                />
              </div>
            </div>

            {/* Why are you contacting us */}
            <div className="space-y-4 sm:space-y-6 bg-[#14243B] p-4 sm:p-6 md:p-[24px] rounded-[8px]">
              <h3 className="w-full font-barlow font-medium text-lg sm:text-xl md:text-[22px] leading-[140%] sm:leading-[150%] tracking-[0%] text-white">
                Why are you contacting us?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {serviceOptions.map((service) => (
                    <label key={service} className="flex items-center gap-3 cursor-pointer" onClick={() => handleServiceToggle(service)}>
                      <div className={`min-w-[24px] sm:min-w-[26px] md:min-w-[28px] h-[24px] sm:h-[26px] md:h-[28px] rounded-[4px] border border-[#06D6A0] p-[3px] sm:p-[4px] flex items-center justify-center transition-colors ${
                        selectedServices.includes(service) ? 'bg-[#0F172A]' : 'bg-[#0F172A]'
                      }`}>
                        {selectedServices.includes(service) && (
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="white" className="w-3 h-3 sm:w-4 sm:h-4">
                            <path d="M13.5 4.5L6 12L2.5 8.5" stroke="#06D6A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                      <span className="text-white font-barlow font-normal text-sm sm:text-base md:text-lg">{service}</span>
                    </label>
                  ))}
              </div>
            </div>

            {/* Your Budget Section */}
            <div className="w-full h-auto min-h-[200px] sm:min-h-[220px] md:h-[250px] rounded-[12px] bg-[#0F172A] p-4 sm:p-6 md:p-[24px] space-y-4 sm:space-y-6 md:space-y-[30px] bg-[#14243B] rounded-[8px]">
              <div>
                <h3 className="font-barlow font-medium text-lg sm:text-xl md:text-[22px] leading-[140%] sm:leading-[150%] text-white mb-2">
                  Your Budget
                </h3>
                <p className="font-barlow font-normal text-xs sm:text-sm md:text-sm text-white/80">
                  Slide to indicate your budget range
                </p>
              </div>
              
              {/* Slider */}
              <div className="px-2 sm:px-4">
                <BudgetSlider
                  min={1000}
                  max={50000}
                  step={100}
                  value={budget}
                  onChange={(e) => setBudget(parseInt(e.target.value))}
                />
              </div>
              
              {/* Budget Display */}
              <div className="text-center pt-2 sm:pt-4">
                <span className="text-white font-barlow font-medium text-lg sm:text-xl md:text-2xl">
                  ${budget.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Your Message */}
            <div className="space-y-3 sm:space-y-4 bg-[#14243B] rounded-[8px] p-4 sm:p-6 md:p-[24px]">
              <h3 className="font-barlow font-medium text-lg sm:text-xl md:text-[22px] leading-[140%] sm:leading-[150%] text-white">
                Your Message
              </h3>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Type here"
                rows={4}
                required
                className="w-full bg-transparent border-b border-[#06D6A0] text-white placeholder-[#06D6A0] py-2 focus:outline-none focus:border-[#05C191] resize-none text-sm sm:text-base md:text-lg"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6 sm:pt-8">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full max-w-[254px] h-[50px] sm:h-[56px] md:h-[63px] bg-green-600 hover:bg-green-700 text-white font-barlow font-medium rounded-[30px] px-6 sm:px-8 md:px-[44px] py-3 sm:py-4 md:py-[18px] flex items-center justify-center gap-2 transition-colors text-sm sm:text-base md:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}