import React from "react";

const testimonials = [
  {
    name: "Grace Mwangi",
    role: "Registered Nurse",
    country: "Canada",
    message:
      "I applied through this platform and received a verified job offer within 2 weeks. Their team guided me through the entire process professionally and clearly.",
  },
  {
    name: "David Otieno",
    role: "IT Support Specialist",
    country: "UK",
    message:
      "The job listings were real and updated. I was able to connect with a verified employer and start the interview process fast. Highly recommended.",
  },
  {
    name: "Aisha Kamau",
    role: "Customer Service Representative",
    country: "Canada",
    message:
      "The support was excellent. They answered all my questions and helped me prepare for the next steps. The process was smooth and transparent.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* HERO */}
        <section className="bg-gray-900 border border-gray-800 rounded-3xl p-10 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            About Us
          </h1>
          <p className="text-gray-300 mt-4 text-lg leading-relaxed">
            We are a premium job placement platform connecting skilled African
            talent with verified job opportunities in Canada and the UK. Our
            mission is to provide transparent, professional, and fast job
            matching services.
          </p>
        </section>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">

          {/* Mission */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="text-gray-300 mt-3">
              To bridge the gap between African talent and global employers by
              providing verified job opportunities, clear guidance, and reliable
              support.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p className="text-gray-300 mt-3">
              To become the leading platform for international job placements,
              known for integrity, quality, and measurable results.
            </p>
          </div>

          {/* How it Works */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold">How It Works</h2>
            <ul className="text-gray-300 mt-3 list-disc list-inside space-y-2">
              <li>Browse verified job listings for Canada and the UK</li>
              <li>Send an inquiry via WhatsApp</li>
              <li>Receive a response within 24 hours</li>
              <li>Get matched with employers and guided through the process</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Why Choose Us</h2>
            <ul className="text-gray-300 mt-3 list-disc list-inside space-y-2">
              <li>Canada-heavy job listings (high success rate)</li>
              <li>Verified employers and real opportunities</li>
              <li>Fast response time and clear communication</li>
              <li>Dedicated support for applicants</li>
            </ul>
          </div>
        </div>

        {/* TESTIMONIALS */}
        <section className="mt-10">
          <h2 className="text-3xl font-bold">Success Stories</h2>
          <p className="text-gray-300 mt-2">
            Real results from real people who successfully secured international jobs.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-3xl p-6 shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{t.name}</h3>
                    <p className="text-gray-400">{t.role}</p>
                  </div>
                  <span className="text-sm font-semibold text-gray-500">
                    {t.country === "Canada" ? "🇨🇦 Canada" : "🇬🇧 UK"}
                  </span>
                </div>
                <p className="text-gray-300 mt-4 leading-relaxed">{t.message}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">
              Ready to start your international career?
            </h3>
            <p className="text-gray-300 mt-2">
              Browse our job listings and send an inquiry today.
            </p>
          </div>

          <a
            href="/jobs"
            className="px-8 py-4 rounded-2xl bg-red-700 text-white font-bold hover:bg-red-800 transition"
          >
            View Jobs
          </a>
        </div>

      </div>
    </div>
  );
}
