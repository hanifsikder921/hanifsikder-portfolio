import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const ContactForm = () => {


    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = async (data) => {
        // Step 1: Confirm before submit
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to send this message?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#10b981',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, send it!',
            cancelButtonText: 'No, cancel'
        });

        // Step 2: If confirmed
        if (result.isConfirmed) {
            try {
                const response = await axios.post('https://portfolio-backend-nu-sage.vercel.app/contact', data);

                if (response.data.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Message Sent Successfully!',
                        timer: 1500,
                        text: 'Thanks for reaching out. I will get back to you soon.',
                        confirmButtonColor: '#10b981',
                    });
                    reset();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong. Please try again later.',
                    });
                }
            } catch (error) {
                console.error('Submission error:', error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Failed to send',
                    text: 'Check your internet connection or try again later.',
                });
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
        <div id='contact-section' className='my-20  bg-gray-100'>
            <div >
                <div className="py-10 lg:py-20 max-w-7xl mx-auto px-6 ">
                    {/* Title */}
                    <div className="max-w-3xl mb-10 lg:mb-14">
                        <h2 data-aos="flip-up"  className="text-emerald-600 font-semibold text-2xl md:text-4xl md:leading-tight">Let's Work Together</h2>
                        <p data-aos="zoom-in" className="mt-1 text-neutral-500">
                            Whether you're looking for a passionate MERN Stack Developer or a reliable frontend engineer — I'm just one message away!
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
                        {/* FORM START */}
                        <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div data-aos="zoom-in"
                                   
                                     className="space-y-4">
                                    {/* Name */}
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="contact-name"
                                            placeholder="Full Name"
                                            {...register('name', { required: 'Full Name is required' })}
                                            className="p-4 w-full shadow border border-emerald-200 rounded-lg focus:outline-none focus:ring-0"
                                        />
                                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                                    </div>

                                    {/* Email */}
                                    <div className="relative">
                                        <input
                                            type="email"
                                            id="contact-email"
                                            placeholder="Work Email"
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^\S+@\S+$/i,
                                                    message: 'Invalid email address',
                                                },
                                            })}
                                            className="p-4 w-full shadow border border-emerald-200 rounded-lg focus:outline-none focus:ring-0"
                                        />
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                                    </div>

                                    {/* Subject */}
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="contact-subject"
                                            placeholder="Job Title / Offer"
                                            {...register('subject', { required: 'Subject is required' })}
                                            className="p-4 w-full shadow border border-emerald-200 rounded-lg focus:outline-none focus:ring-0"
                                        />
                                        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                                    </div>

                                    {/* Phone */}
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="contact-phone"
                                            placeholder="Phone Number (Optional)"
                                            {...register('phone')}
                                            className="p-4 w-full shadow border border-emerald-200 rounded-lg focus:outline-none focus:ring-0"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div className="relative">
                                        <textarea
                                            id="contact-message"
                                            placeholder="Describe your job offer or collaboration idea"
                                            {...register('message', { required: 'Message is required' })}
                                            className="p-4 w-full shadow border border-emerald-200 rounded-lg focus:outline-none focus:ring-0"
                                            rows="7"
                                        />
                                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center gap-x-2 py-3 px-5 bg-yellow-400 font-medium text-sm text-black rounded-full hover:bg-yellow-300 transition"
                                    >
                                        Send Message
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* CONTACT INFO START */}
                        <div className='hidden md:block'>
                            <div data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" className='rounded-lg'>
                                <img className='rounded-lg' src="https://i.ibb.co/fVT3gJFg/undraw-agreement-w6ua.png" alt="" />
                            </div>
                        </div>

                        {/* CONTACT INFO END */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
