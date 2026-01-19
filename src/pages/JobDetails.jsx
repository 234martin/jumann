import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import jobs from "../utils/jobs";

export default function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobs.find((j) => j.id === Number(id));

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#060914]">
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold">Job not found</h2>
          <p className="text-gray-300 mt-2">Please go back to jobs page.</p>
          <button
            onClick={() => navigate("/jobs")}
            className="mt-4 px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
          >
            Back to Jobs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#060914] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-br from-[#0a0f1f] to-[#0a0f1f]/60 border border-white/10 rounded-3xl p-10 shadow-xl">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <h1 className="text-4xl font-extrabold">{job.title}</h1>
              <p className="text-gray-300 mt-2">
                {job.company} • {job.location}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full border border-white/10 text-gray-300">
                  {job.type}
                </span>
                <span className="px-3 py-1 rounded-full border border-white/10 text-gray-300">
                  {job.country === "Canada" ? "🇨🇦 Canada" : "🇬🇧 UK"}
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={`https://wa.me/${job.whatsapp}?text=Hi%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                  job.title
                )}%20job`}
                target="+1 (579) 900-7528"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-2xl px-5 py-3 font-bold transition"
              >
                WhatsApp Inquiry
              </a>

              <button
                onClick={() => navigate("/jobs")}
                className="flex items-center gap-2 bg-white text-black rounded-2xl px-5 py-3 font-bold hover:bg-gray-200 transition"
              >
                Back
              </button>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold">Job Overview</h3>
              <p className="text-gray-300 mt-2">{job.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Requirements</h3>
              <ul className="mt-2 list-disc list-inside text-gray-300">
                {job.requirements?.map((req, idx) => (
                  <li key={idx} className="mt-1">
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 text-gray-400">
            <p className="text-sm">
              Note: This job listing is managed by our agency. All inquiries are
              handled via WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
