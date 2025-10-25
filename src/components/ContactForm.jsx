import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mdkwvlbg");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
        window.location.reload();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="p-10 scroll-mt-10">
      <h2 className="text-3xl text-gray-400 font-bold text-center mb-8">Contact Me</h2>
      {showSuccess && (
        <div className="text-center py-4 text-green-400 font-semibold text-lg animate-fade">
          ✅ Thanks for reaching out! I'LL get back to you soon.
        </div>
      )}
      {!showSuccess && (
        <div className="w-full max-w-4xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-8 rounded-2xl shadow-md flex flex-col gap-4 w-full"
          >
          <label htmlFor="email" className="text-gray-300 font-medium">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full min-w-0 bg-gray-700 text-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 box-border"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message" className="text-gray-300 font-medium">
            Your Message
          </label>
          <textarea
            id="text"
            name="message"
            rows="4"
            required
            className="w-full min-w-0 bg-gray-700 text-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 box-border"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-200 disabled:opacity-50"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
          </form>
        </div>
      )}
    </section>
  );
}

export default ContactForm;
