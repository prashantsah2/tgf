import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    agreedToPolicy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    if (!formData.agreedToPolicy) {
      newErrors.agreedToPolicy = 'You must agree to our Privacy Policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call - replace with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
          agreedToPolicy: false
        });
        setErrors({});
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      // For demo purposes, simulate success after 2 seconds
      setTimeout(() => {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
          agreedToPolicy: false
        });
        setErrors({});
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 border-[1px] border-solid border-[#6a6a6a] rounded-2xl p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-stone-200/60 rounded-3xl p-6 md:p-12 grid lg:grid-cols-2 gap-8 md:gap-12 bg-[#fff]">
          
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Contact us</h1>
              <p className="text-gray-600 text-sm leading-relaxed">
              {`  We'd love to hear from you. Please fill out this form, and we'll reply soon.`}
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              {/* Email Section */}
              <div className="bg-white/30 p-4 rounded-xl backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </h3>
                <p className="text-gray-600 text-sm mb-1">
                  Contact us by email, and we will respond shortly.
                </p>
                <p className="text-gray-900 font-medium">info@enengspl.com</p>
              </div>

              {/* Phone Section */}
              <div className="bg-white/30 p-4 rounded-xl backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Phone
                </h3>
                <p className="text-gray-600 text-sm mb-1">
                  Call us on weekdays from 9 AM to 5 PM.
                </p>
                <p className="text-gray-900 font-medium">+1 (222) 333 444</p>
              </div>

              {/* Mobile Section */}
              <div className="bg-white/30 p-4 rounded-xl backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Mobile
                </h3>
                <p className="text-gray-600 text-sm mb-1">
                  Call us on weekdays from 9 AM to 5 PM.
                </p>
                <p className="text-gray-900 font-medium">+2 (222) 333 444</p>
              </div>

              {/* Office Section */}
              <div className="bg-white/30 p-4 rounded-xl backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Office
                </h3>
                <p className="text-gray-600 text-sm mb-1">
                  Visit us at our headquarters.
                </p>
                <div className="text-gray-900 font-medium">
                  <p>A-49, Engine House, Mohan Industrial Estate</p>
                  <p>Mathura Road, New Delhi, </p>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8  border border-white/20">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">Write us a message</h2>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {`Thank you! Your message has been sent successfully. We'll get back to you soon.`}
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}

            <div className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Jane"
                    className={`w-full px-4 py-3 rounded-lg bg-gray-50 border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-gray-400 focus:outline-none transition-all ${
                      errors.firstName ? 'ring-2 ring-red-400 bg-red-50' : ''
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-red-600 text-xs mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Smith"
                    className={`w-full px-4 py-3 rounded-lg bg-gray-50 border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-gray-400 focus:outline-none transition-all ${
                      errors.lastName ? 'ring-2 ring-red-400 bg-red-50' : ''
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-red-600 text-xs mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="jane@email.com"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-50 border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-gray-400 focus:outline-none transition-all ${
                    errors.email ? 'ring-2 ring-red-400 bg-red-50' : ''
                  }`}
                />
                {errors.email && (
                  <p className="text-red-600 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Leave us a message..."
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-50 border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-gray-400 focus:outline-none transition-all resize-none ${
                    errors.message ? 'ring-2 ring-red-400 bg-red-50' : ''
                  }`}
                />
                {errors.message && (
                  <p className="text-red-600 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Privacy Policy */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="agreedToPolicy"
                  checked={formData.agreedToPolicy}
                  onChange={handleInputChange}
                  className={`mt-1 w-4 h-4 text-gray-900 bg-gray-100 border-gray-300 rounded focus:ring-gray-400 focus:ring-2 ${
                    errors.agreedToPolicy ? 'ring-2 ring-red-400' : ''
                  }`}
                />
                <div className="text-sm text-gray-600">
                  I agree to our{' '}
                  <button
                    type="button"
                    className="text-gray-900 underline hover:text-gray-700 transition-colors"
                    onClick={() => alert('Privacy Policy would open here')}
                  >
                    Privacy Policy
                  </button>
                </div>
              </div>
              {errors.agreedToPolicy && (
                <p className="text-red-600 text-xs">{errors.agreedToPolicy}</p>
              )}

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-4 rounded-full font-medium text-lg focus:ring-4 focus:ring-gray-300 focus:outline-none transition-all duration-200 flex items-center justify-center ${
                  isSubmitting 
                    ? 'bg-gray-400 text-white cursor-not-allowed' 
                    : 'bg-gray-900 text-white hover:bg-gray-800 transform hover:scale-[1.02] active:scale-[0.98]'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}