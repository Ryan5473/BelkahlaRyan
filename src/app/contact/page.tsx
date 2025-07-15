


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
      <div
        className="
          rounded-3xl p-8 sm:p-10
          bg-white/10 dark:bg-gray-900/30
          backdrop-blur-md
          border border-white/30 dark:border-gray-300/20
          shadow-lg
        "
      >
        <h1 className="text-4xl font-extrabold mb-12 text-white text-center tracking-tight">
          Contact Me
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-semibold text-white tracking-wide"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="
                w-full border border-white/40 rounded-lg px-4 py-2.5
                bg-white/10 dark:bg-gray-800/40
                text-white placeholder-white/70
                focus:outline-none focus:ring-2 focus:ring-white focus:border-white
                transition
              "
              autoComplete="name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-semibold text-white tracking-wide"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="
                w-full border border-white/40 rounded-lg px-4 py-2.5
                bg-white/10 dark:bg-gray-800/40
                text-white placeholder-white/70
                focus:outline-none focus:ring-2 focus:ring-white focus:border-white
                transition
              "
              autoComplete="email"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 font-semibold text-white tracking-wide"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="
                w-full border border-white/40 rounded-lg px-4 py-2.5
                bg-white/10 dark:bg-gray-800/40
                text-white placeholder-white/70
                focus:outline-none focus:ring-2 focus:ring-white focus:border-white
                transition resize-none
              "
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="
              w-full max-w-xs mx-auto block px-6 py-2
              border-2 border-white
              text-white font-semibold rounded-md
              hover:bg-white hover:text-black
              transition text-sm tracking-wide disabled:opacity-50
            "
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status === 'success' && (
          <p
            className="mt-6 text-center text-green-400 font-medium tracking-wide"
            role="alert"
          >
            Message sent successfully!
          </p>
        )}
        {status === 'error' && (
          <p
            className="mt-6 text-center text-red-400 font-medium tracking-wide"
            role="alert"
          >
            Failed to send message.
          </p>
        )}

        
        <div className="mt-10 text-center">
          <a
            href="https://koalendar.com/e/meet-with-rayen-belkahla"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block px-6 py-2 border-2 border-white text-white font-semibold rounded-md
              hover:bg-white hover:text-black transition text-sm tracking-wide
            "
          >
            Plan a Meeting for Free
          </a>
        </div>

        
        <div className="mt-4 text-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block px-6 py-2 border-2 border-white text-white font-semibold rounded-md
              hover:bg-white hover:text-black transition text-sm tracking-wide
            "
          >
            View My Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}


/*
<!-- Cal floating-popup embed code begins -->
<script type="text/javascript">
  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "test", {origin:"https://app.cal.com"});

  Cal.ns.test("floatingButton", {"calLink":"rayen-belkahla-jqjt4c/test","config":{"layout":"month_view"}}); 
  Cal.ns.test("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
  </script>
  <!-- Cal floating-popup embed code ends -->
*/



/*

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
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-12 sm:p-14">
        <h1 className="text-4xl font-extrabold mb-12 text-gray-900 dark:text-gray-100 text-center tracking-tight">
          Contact Me
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-semibold text-gray-800 dark:text-gray-300 tracking-wide"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-3 focus:ring-indigo-500 focus:border-indigo-500 transition"
              autoComplete="name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-semibold text-gray-800 dark:text-gray-300 tracking-wide"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-3 focus:ring-indigo-500 focus:border-indigo-500 transition"
              autoComplete="email"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 font-semibold text-gray-800 dark:text-gray-300 tracking-wide"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-3 focus:ring-indigo-500 focus:border-indigo-500 transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full max-w-xs mx-auto block px-6 py-3 border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition disabled:opacity-50 text-lg tracking-wide"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status === 'success' && (
          <p
            className="mt-6 text-center text-green-600 font-medium tracking-wide"
            role="alert"
          >
            Message sent successfully!
          </p>
        )}
        {status === 'error' && (
          <p
            className="mt-6 text-center text-red-600 font-medium tracking-wide"
            role="alert"
          >
            Failed to send message.
          </p>
        )}

       
        <div className="mt-10 text-center">
          <a
            href="https://koalendar.com/e/meet-with-rayen-belkahla"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition text-base tracking-wide"
          >
            Plan a Meeting for Free
          </a>
        </div>

       
        <div className="mt-6 text-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition text-base tracking-wide"
          >
            View My Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
*/