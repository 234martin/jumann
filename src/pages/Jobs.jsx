import React, { useMemo, useState } from "react";
import jobsData from "../utils/jobs";
import { FiSearch, FiPhone, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Jobs() {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("Canada");
  const [type, setType] = useState("All");
  const [page, setPage] = useState(1);

  const jobsPerPage = 9;

  const filteredJobs = useMemo(() => {
    return jobsData
      .filter((job) => job.country === country)
      .filter((job) => (type === "All" ? true : job.type === type))
      .filter(
        (job) =>
          job.title.toLowerCase().includes(query.toLowerCase()) ||
          job.location.toLowerCase().includes(query.toLowerCase()) ||
          job.company.toLowerCase().includes(query.toLowerCase())
      );
  }, [country, type, query]);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const displayedJobs = filteredJobs.slice(
    (page - 1) * jobsPerPage,
    page * jobsPerPage
  );

  return (
    <div className="min-h-screen bg-[#060914] text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* HEADER */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Canada & UK Job Listings
          </h1>
          <p className="text-gray-300 mt-3 max-w-xl">
            Premium job opportunities with verified employers. Most roles are
            Canada-based (85%) with a few UK openings.
          </p>
        </header>

        {/* FILTERS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="md:col-span-2 relative">
            <FiSearch className="absolute top-3 left-3 text-gray-400" />
            <input
              className="w-full bg-[#0b1220] rounded-2xl px-12 py-3 border border-white/10 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Search jobs, locations or companies..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
            />
          </div>

          <select
            className="bg-[#0b1220] rounded-2xl px-4 py-3 border border-white/10"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
              setPage(1);
            }}
          >
            <option value="Canada">Canada (Primary)</option>
            <option value="UK">United Kingdom</option>
          </select>

          <select
            className="bg-[#0b1220] rounded-2xl px-4 py-3 border border-white/10"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              setPage(1);
            }}
          >
            <option value="All">All Types</option>
            <option value="Manual">Manual</option>
            <option value="Skilled">Skilled</option>
            <option value="Professional">Professional</option>
          </select>
        </div>

        {/* JOB CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedJobs.map((job) => (
            <div
              key={job.id}
              className="relative bg-gradient-to-br from-[#0a0f1f] to-[#0a0f1f]/60 border border-white/10 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xl font-bold">{job.title}</div>
                  <div className="text-gray-300 mt-1">
                    {job.company} • {job.location}
                  </div>
                </div>

                <span className="text-sm px-3 py-1 rounded-full border border-white/10 text-gray-300">
                  {job.type}
                </span>
              </div>

              <p className="text-gray-400 mt-4 line-clamp-3">
                {job.description}
              </p>

              <div className="flex justify-between items-center mt-6">
                <span className="text-gray-300 text-sm">
                  {job.country === "Canada" ? "🇨🇦 Canada" : "🇬🇧 UK"}
                </span>

                <div className="flex gap-3">
                  <a
                    href={`https://wa.me/${job.whatsapp}?text=Hi%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                      job.title
                    )}%20job`}
                    target="+1 (579) 900-7528"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-2xl px-4 py-2"
                  >
                    <FiPhone />
                    WhatsApp Inquiry
                  </a>

                  <Link
                    to={`/jobs/${job.id}`}
                    className="flex items-center gap-2 bg-white text-black rounded-2xl px-4 py-2 hover:bg-gray-200 transition"
                  >
                    <FiArrowRight />
                    View More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center mt-10 gap-3">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage(idx + 1)}
              className={`px-4 py-2 rounded-2xl border border-white/10 ${
                page === idx + 1
                  ? "bg-red-600 text-white"
                  : "text-gray-300 hover:bg-white/5"
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
