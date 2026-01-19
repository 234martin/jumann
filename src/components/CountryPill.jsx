import React from 'react'

export default function CountryPill({ country, percent, isPrimary }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium text-slate-100">{country}</div>
        <div className="text-sm font-semibold text-slate-200">{percent}%</div>
      </div>
      <div className="h-2 w-full rounded-full bg-slate-800 mt-2 overflow-hidden">
        <div
          className={`h-full rounded-full ${isPrimary ? 'bg-primary' : 'bg-accent'}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
