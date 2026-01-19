import React from "react";
import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/7 transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">{job.title}</span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                job.country === "Canada"
                  ? "bg-red-500 text-white"
                  : "bg-blue-600 text-white"
              }`}
            >
              {job.country}
            </span>
          </div>

          <div className="text-slate-300 mt-2">{job.company}</div>
          <div className="text-slate-300 mt-1 text-sm">
            {job.type} • {job.location}
          </div>
        </div>

        <div className="text-right">
          <div className="text-lg font-bold">{job.salary}</div>
          <div className="text-slate-400 text-sm mt-1">{job.duration}</div>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <Link
          to={`/jobs/${job.id}`}
          className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
        >
          View Details
        </Link>

        <a
          href={`https://wa.me/254700000000?text=Hello%20I%20am%20interested%20in%20the%20job%20${encodeURIComponent(
            job.title
          )}%20(${job.country})`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition"
        >
          WhatsApp Inquiry
        </a>
      </div>
    </div>
  );
}
