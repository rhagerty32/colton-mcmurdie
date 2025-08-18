'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import { Music, Calendar, Heart } from 'lucide-react';
import { toast, Toaster } from 'sonner';
import { EmailContent } from './EmailContent';
import { ConfirmationEmailContent } from './ConfirmationEmail';

export default function ContactPage() {
    const url = process.env.NEXT_PUBLIC_API_URL;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general'
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!url) return;

        const toastId = toast.loading('Sending...')
        const emailHtml1 = EmailContent({
            email: formData.email,
            inquiryType: formData.inquiryType,
            message: formData.message,
            name: formData.name,
            subject: formData.subject
        })

        const payload1 = {
            sender: "management@coltonmcmurdie.com",
            recipient: "management@coltonmcmurdie.com",
            subject: 'New Contact Form Submission',
            body: emailHtml1
        }

        const response1 = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload1)
        });

        if (response1.status !== 200) {
            toast.error('There was an error sending your message. Please try again later.', { id: toastId });
            return;
        };

        const emailHtml2 = ConfirmationEmailContent({
            name: formData.name
        });

        const payload2 = {
            sender: "management@coltonmcmurdie.com",
            recipient: formData.email,
            subject: 'Confirmation: Your Message Has Been Received',
            body: emailHtml2
        };

        const response2 = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload2)
        });

        if (response2.status !== 200) {
            toast.error('There was an error sending your confirmation email. Please try again later.', { id: toastId });
            return;
        }

        toast.success('Your message has been sent successfully!', { id: toastId });
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
            inquiryType: 'general'
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Layout>
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-western text-4xl md:text-6xl font-bold text-primary mb-6">
                        Get In Touch
                    </h1>
                    <p className="text-xl text-text/70 max-w-3xl mx-auto">
                        Whether you&apos;re a fan, industry professional, or looking to book a show,
                        I&apos;d love to hear from you.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <h2 className="font-western text-3xl font-bold text-primary mb-8">
                                Let&apos;s Connect
                            </h2>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-start">
                                    <div className="bg-primary/10 rounded-full p-3 mr-4">
                                        <Music className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-primary mb-1">Booking Inquiries</h3>
                                        <p className="text-text/80">
                                            Available for concerts, festivals, private events, and corporate functions.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-primary/10 rounded-full p-3 mr-4">
                                        <Calendar className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-primary mb-1">Media & Press</h3>
                                        <p className="text-text/80">
                                            Interview requests, press kit materials, and media collaborations.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-primary/10 rounded-full p-3 mr-4">
                                        <Heart className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-primary mb-1">Fan Messages</h3>
                                        <p className="text-text/80">
                                            I love hearing from fans! Share your stories and connect with me.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="bg-secondary/30 rounded-lg p-6">
                                <h3 className="font-semibold text-lg text-primary mb-4">Follow Me</h3>
                                <div className="space-y-3">
                                    <a
                                        href="https://www.tiktok.com/@cjmcmurdie"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-text hover:text-primary transition-colors"
                                    >
                                        <span className="text-xl mr-3">🎵</span>
                                        <span>@cjmcmurdie</span>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/colton_mcmurdie"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-text hover:text-primary transition-colors"
                                    >
                                        <span className="text-xl mr-3">📸</span>
                                        <span>@colton_mcmurdie</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                                <h3 className="font-western text-2xl font-bold text-primary mb-6">
                                    Send a Message
                                </h3>

                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="inquiryType" className="block text-sm font-medium text-text mb-2">
                                            Type of Inquiry
                                        </label>
                                        <select
                                            id="inquiryType"
                                            name="inquiryType"
                                            value={formData.inquiryType}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                        >
                                            <option value="general">General Inquiry</option>
                                            <option value="booking">Booking Request</option>
                                            <option value="media">Media/Press</option>
                                            <option value="fan">Fan Message</option>
                                            <option value="collaboration">Collaboration</option>
                                        </select>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                                placeholder="Your full name"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                            placeholder="Brief subject line"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                                            placeholder="Your message..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-primary text-secondary py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors cursor-pointer"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Info */}
            <section className="py-16 bg-secondary/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-western text-3xl font-bold text-primary mb-6">
                        Professional Inquiries
                    </h2>
                    <p className="text-lg text-text/80 mb-8 leading-relaxed">
                        For booking requests, please include event details such as date, location,
                        type of event, and expected audience size. For media inquiries, let me know
                        about your publication and interview format preferences.
                    </p>

                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <h3 className="font-semibold text-lg text-primary mb-4">
                            Response Time
                        </h3>
                        <p className="text-text/80">
                            I typically respond to all inquiries within 48 hours. For urgent booking
                            requests or time-sensitive matters, please mention this in your message.
                        </p>
                    </div>
                </div>
            </section>
            <Toaster />
        </Layout>
    );
}
