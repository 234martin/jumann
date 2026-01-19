import React from "react";

export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-lg border border-slate-200 p-3 focus:outline-none focus:ring-2 focus:ring-primary"
    />
  );
}
