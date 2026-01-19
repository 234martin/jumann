import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import jobs from "../utils/jobs";

export default function Home() {
  const canadaJobs = jobs.filter((job) => job.country === "Canada");
  const ukJobs = jobs.filter((job) => job.country === "UK");

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="bg-[radial-gradient(circle_at_top,_rgba(255,0,0,0.35),_transparent_60%)] w-full h-full" />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              

              <h1 className="mt-6 text-5xl font-bold leading-tight">
                Your Gateway to High-Quality Jobs in{" "}
                <span className="text-red-500">Canada</span> &{" "}
                <span className="text-blue-400">UK</span>
              </h1>

              <p className="mt-4 text-gray-300 text-lg">
                We connect African professionals with trusted employers abroad.
                Browse verified jobs, submit inquiries, and start your migration journey.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/jobs"
                  className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition font-bold"
                >
                  Browse Jobs <FaArrowRight />
                </Link>

                <a
                  href="https://wa.me/+1 (579) 900-7528"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 rounded-xl border border-white/20 hover:border-white transition font-bold"
                >
                  WhatsApp Inquiry <FaArrowRight />
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                  <div className="text-gray-300 font-semibold">Verified Jobs</div>
                  <div className="text-white font-bold text-2xl mt-2">{jobs.length}</div>
                </div>

                <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                  <div className="text-gray-300 font-semibold">Canada Jobs</div>
                  <div className="text-white font-bold text-2xl mt-2">{canadaJobs.length}</div>
                </div>

                <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                  <div className="text-gray-300 font-semibold">UK Jobs</div>
                  <div className="text-white font-bold text-2xl mt-2">{ukJobs.length}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-gray-800 bg-gradient-to-b from-gray-900/80 to-black p-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/2560px-Flag_of_Canada_%28Pantone%29.svg.png"
                  alt="Canada flag"
                  className="w-full rounded-2xl mb-4"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                  alt="UK flag"
                  className="w-full rounded-2xl"
                />
              </div>

              <div className="absolute -bottom-10 left-0 right-0 mx-auto max-w-md">
                <div className="p-6 rounded-3xl border border-gray-800 bg-gray-900/60 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-gray-300 font-semibold">Fast Placement</div>
                      <div className="text-white font-bold text-lg">Verified Employers</div>
                    </div>
                    <FaCheckCircle className="text-green-400" size={28} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <p className="text-gray-300 mt-2">
            A simple 3-step process designed for fast results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            {
              title: "Browse Jobs",
              desc: "Filter by country, job type, and skill level.",
            },
            {
              title: "Submit Inquiry",
              desc: "Contact employers via WhatsApp for fast response.",
            },
            {
              title: "Get Placed",
              desc: "Start your migration journey with confidence.",
            },
          ].map((step, idx) => (
            <div key={idx} className="p-6 rounded-3xl border border-gray-800 bg-gray-900/50">
              <div className="text-red-600 font-bold">Step {idx + 1}</div>
              <div className="text-xl font-bold mt-2">{step.title}</div>
              <p className="text-gray-300 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED JOBS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Featured Jobs</h2>
            <p className="text-gray-300 mt-2">Handpicked opportunities in Canada and UK.</p>
          </div>
          <Link to="/jobs" className="text-red-500 font-bold hover:underline">
            View All Jobs →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {canadaJobs.slice(0, 3).map((job) => (
            <div key={job.id} className="p-6 rounded-3xl border border-gray-800 bg-gray-900/50">
              <div className="text-gray-300 text-sm">{job.type}</div>
              <div className="text-white font-bold text-xl mt-2">{job.title}</div>
              <div className="text-gray-300 mt-2">
                {job.country === "Canada" ? "🇨🇦 Canada" : "🇬🇧 UK"}
              </div>
              <Link
                to={`/jobs/${job.id}`}
                className="inline-flex items-center gap-2 mt-4 text-red-500 font-bold hover:underline"
              >
                View More <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Success Stories</h2>
          <p className="text-gray-300 mt-2">Real people placed in Canada & UK.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            {
              name: "Amina",
              story: "I secured a job in Toronto within 2 weeks. The process was simple and professional.",
              country: "Canada",
            },
            {
              name: "Samuel",
              story: "The jobs are real and verified. I was guided through the whole process.",
              country: "Canada",
            },
            {
              name: "Nia",
              story: "I found a skilled job in the UK with a strong employer support system.",
              country: "UK",
            },
          ].map((t, idx) => (
            <div key={idx} className="p-6 rounded-3xl border border-gray-800 bg-gray-900/50">
              <div className="text-gray-300 text-sm">Placed in {t.country}</div>
              <div className="text-white font-bold text-xl mt-2">{t.name}</div>
              <p className="text-gray-300 mt-2">{t.story}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
