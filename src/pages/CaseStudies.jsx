import React from "react";

const caseStudies = [
  {
    name: "Amina",
    country: "Canada",
    role: "Warehouse Supervisor",
    result: "Placed within 3 weeks",
  },
  {
    name: "Kwame",
    country: "UK",
    role: "Construction Engineer",
    result: "Placed within 4 weeks",
  },
  {
    name: "Nadia",
    country: "Canada",
    role: "Healthcare Assistant",
    result: "Placed within 2 weeks",
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">

        <div className="text-4xl font-bold">Case Studies</div>
        <div className="text-slate-300 mt-2">
          Real candidates we helped place in Canada and the UK.
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((c, index) => (
            <div key={index} className="p-6 border border-white/10 rounded-2xl bg-white/5">
              <div className="font-bold text-xl">{c.name}</div>
              <div className="text-slate-300 mt-2">{c.role} • {c.country}</div>
              <div className="text-white mt-4 font-semibold">{c.result}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
