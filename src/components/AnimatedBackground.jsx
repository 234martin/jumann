import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 opacity-95" />
      <div className="absolute inset-0">
        <div className="animate-float-slow absolute -top-20 -left-10 w-72 h-72 rounded-full bg-indigo-500 opacity-20 blur-3xl" />
        <div className="animate-float-slow animation-delay-2000 absolute top-10 right-0 w-96 h-96 rounded-full bg-green-400 opacity-15 blur-3xl" />
        <div className="animate-float-slow animation-delay-4000 absolute bottom-0 left-20 w-80 h-80 rounded-full bg-rose-500 opacity-10 blur-3xl" />
      </div>
    </div>
  );
}
