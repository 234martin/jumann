import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="space-y-4">
      <div className="text-3xl font-semibold text-white">404 — Page not found</div>
      <div className="text-slate-300">The page you are looking for does not exist.</div>
      <Link
        to="/"
        className="inline-block px-5 py-3 rounded-2xl border border-slate-800 bg-slate-900/60 text-slate-100 hover:bg-slate-900 transition"
      >
        Go home
      </Link>
    </div>
  )
}
