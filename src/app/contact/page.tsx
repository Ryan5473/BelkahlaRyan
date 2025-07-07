'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="container max-w-3xl mx-auto py-16 px-6 sm:px-8 lg:px-12">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10">
        <h1 className="text-4xl font-extrabold mb-10 text-gray-900 dark:text-gray-100 text-center">
          Contact Me
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          <div>
            <label htmlFor="name" className="block mb-3 font-semibold text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-5 py-4 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              autoComplete="name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-3 font-semibold text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-5 py-4 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              autoComplete="email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-3 font-semibold text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-5 py-4 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full px-8 py-4 border-2 border-black text-black font-semibold rounded-xl hover:bg-black hover:text-white transition disabled:opacity-50

"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-6 text-center text-green-500 font-medium" role="alert">
            Message sent successfully!
          </p>
        )}
        {status === 'error' && (
          <p className="mt-6 text-center text-red-500 font-medium" role="alert">
            Failed to send message.
          </p>
        )}

        {/* Plan Meeting Button */}
        <div className="mt-10 text-center">
          <a
            href="https://koalendar.com/e/meet-with-rayen-belkahla" // replace with your link
            target="_blank"
            rel="noopener noreferrer"
            className="iinline-block px-8 py-4 border-2 border-black text-black font-semibold rounded-xl hover:bg-black hover:text-white transition
"
          >
            Plan a Meeting for Free
          </a>
        </div>

        {/* Resume PDF Button */}
        <div className="mt-6 text-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border-2 border-black text-black font-semibold rounded-xl hover:bg-black hover:text-white transition
"
          >
            View My Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
