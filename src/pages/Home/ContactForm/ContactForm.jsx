import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaUser,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to send this message?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#10b981',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, send it!',
      cancelButtonText: 'No, cancel',
    });

    if (result.isConfirmed) {
      setIsSubmitting(true);
      try {
        const response = await axios.post(
          'https://portfolio-backend-nu-sage.vercel.app/contact',
          data
        );
        if (response.data.success) {
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully!',
            timer: 1500,
            text: 'Thanks for reaching out. I will get back to you soon.',
            confirmButtonColor: '#10b981',
          });
          reset();
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Failed to send',
          text: 'Check your internet connection or try again later.',
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Cancelled',
        text: 'Your message was not sent.',
        confirmButtonColor: '#999',
        timer: 2000,
      });
    }
  };

  return (
    <div id="contact-section" className="my-20 bg-white">
      <div className="py-16 lg:py-24 max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 font-bold text-3xl md:text-5xl mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Whether you're looking for a passionate MERN Stack Developer or a reliable frontend
            engineer — I'm just one message away!
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="bg-gray-50 rounded-xl p-8 h-full border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-emerald-100 rounded-lg p-3">
                    <FaEnvelope className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Email</h4>
                    <a
                      href="mailto:mdhanifsikderpersonal@gmail.com"
                      className="text-gray-600 hover:text-emerald-600 transition-colors"
                    >
                      mdhanifsikderpersonal@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-emerald-100 rounded-lg p-3">
                    <FaPhone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                    <a
                      href="tel:+8801609949558"
                      className="text-gray-600 hover:text-emerald-600 transition-colors"
                    >
                      +880 1609-949558
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-emerald-100 rounded-lg p-3">
                    <FaMapMarkerAlt className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Address</h4>
                    <p className="text-gray-600">Chenchri Rampur, Barisal, Bangladesh.</p>
                  </div>
                </div>

                {/* Social Links - Now inside space-y-6 container */}
                <div className="flex items-start pt-2 ">
                  <div className="flex-shrink-0 bg-emerald-100 rounded-lg p-3">
                    <svg
                      className="h-6 w-6 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 mb-3">Connect With Me</h4>
                    <div className="flex space-x-4 bg-white shadow mx-auto mt-5 p-3 rounded-lg">
                      <a
                        href="https://www.facebook.com/hanifsikder922"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-200 hover:bg-blue-600 hover:text-white p-3 rounded-full text-gray-700 transition-colors"
                      >
                        <FaFacebookF className="h-5 w-5" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/hanifsikder920/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-200 hover:bg-blue-700 hover:text-white p-3 rounded-full text-gray-700 transition-colors"
                      >
                        <FaLinkedinIn className="h-5 w-5" />
                      </a>
                      <a
                        href="https://github.com/hanifsikder921"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-200 hover:bg-gray-800 hover:text-white p-3 rounded-full text-gray-700 transition-colors"
                      >
                        <FaGithub className="h-5 w-5" />
                      </a>
                      <a
                        href="https://api.whatsapp.com/send?phone=8801609949558"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-200 hover:bg-green-500 hover:text-white p-3 rounded-full text-gray-700 transition-colors"
                      >
                        <FaWhatsapp className="h-5 w-5" />
                      </a>
                      <a
                        href="httpshttps://x.com/hanifsikder920"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-200 hover:bg-black hover:text-white p-3 rounded-full text-gray-700 transition-colors"
                      >
                        <FaXTwitter className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="contact-name"
                    placeholder="Your name"
                    {...register('name', { required: 'Full Name is required' })}
                    className="pl-10 w-full shadow-sm border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="contact-email"
                    placeholder="your.email@example.com"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="pl-10 w-full shadow-sm border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  placeholder="Job offer or collaboration"
                  {...register('subject', { required: 'Subject is required' })}
                  className="w-full shadow-sm border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number (Optional)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="contact-phone"
                    placeholder="+880 1234 567890"
                    {...register('phone')}
                    className="pl-10 w-full shadow-sm border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  placeholder="Tell me about your project or opportunity"
                  {...register('message', { required: 'Message is required' })}
                  className="w-full shadow-sm border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  rows="5"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
