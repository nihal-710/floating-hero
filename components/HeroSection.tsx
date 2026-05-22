'use client'

import React, { useState, useEffect } from 'react'
import { Receipt, Briefcase, CheckSquare, FileText, Moon, Sun } from 'lucide-react'
import FloatingCard from './FloatingCard'

// ── Background blob shapes ─────────────────────────────────────────────────────
const BlobRail: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`absolute rounded-full bg-[#dde5f7]/60 dark:bg-[#2a2d4a]/60 ${className}`} />
)

const HeroSection: React.FC = () => {
  const [dark, setDark] = useState(false)

  // Sync dark class on <html>
  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [dark])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#f0f3fb] dark:bg-[#12111e] flex items-center transition-colors duration-500">

      {/* ── Dark mode toggle ────────────────────────────────────────────────── */}
      <button
        onClick={() => setDark(!dark)}
        aria-label="Toggle dark mode"
        className="
          fixed top-5 right-5 z-50
          w-10 h-10 rounded-full
          flex items-center justify-center
          bg-white/80 dark:bg-slate-800/80
          shadow-md backdrop-blur
          text-slate-600 dark:text-yellow-300
          hover:scale-110 transition-all duration-200
          border border-slate-200 dark:border-slate-700
        "
      >
        {dark ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      {/* ── Decorative background blobs ─────────────────────────────────────── */}
      <BlobRail className="left-[-80px]  top-[15%] w-[200px] h-[72px]" />
      <BlobRail className="left-[-60px]  top-[38%] w-[170px] h-[60px]" />
      <BlobRail className="left-[-70px]  top-[60%] w-[190px] h-[65px]" />
      <BlobRail className="left-[-50px]  top-[78%] w-[160px] h-[55px]" />
      <BlobRail className="right-[-80px] top-[12%] w-[210px] h-[68px]" />
      <BlobRail className="right-[-60px] top-[35%] w-[175px] h-[62px]" />
      <BlobRail className="right-[-70px] top-[58%] w-[195px] h-[66px]" />
      <BlobRail className="right-[-50px] top-[76%] w-[165px] h-[56px]" />

      {/* ── Main content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">

          {/* ── LEFT: text ────────────────────────────────────────────────── */}
          <div className="lg:w-1/2 flex flex-col items-start text-left max-w-xl">

            <h1
              className="
                animate-fade-in delay-100
                text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.15]
                font-medium
                text-slate-500 dark:text-slate-400
                mb-6
              "
            >
              A single platform to{' '}
              <strong className="font-extrabold text-slate-600 dark:text-slate-200">manage</strong>{' '}
              every part of your{' '}
              <strong className="font-extrabold text-slate-600 dark:text-slate-200">legal work</strong>
            </h1>

            <p
              className="
                animate-fade-in delay-300
                text-base sm:text-lg
                text-indigo-400/80 dark:text-indigo-300/70
                font-medium leading-relaxed
                max-w-[380px]
              "
            >
              Track matters, coordinate schedules, manage clients, centralize
              documents, and handle communication — all in one system.
            </p>

            {/* Mobile mini pills */}
            <div className="mt-10 flex flex-wrap gap-3 lg:hidden">
              {[
                { label: 'Billing',   bg: 'bg-blue-600' },
                { label: 'Matters',   bg: 'bg-orange-500' },
                { label: 'Tasks',     bg: 'bg-[#2d2547]' },
                { label: 'Documents', bg: 'bg-[#2d2547]' },
              ].map((c) => (
                <span
                  key={c.label}
                  className={`${c.bg} text-white text-sm font-semibold px-4 py-2 rounded-full shadow`}
                >
                  {c.label}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: floating cards (desktop) ───────────────────────────── */}
          <div className="hidden lg:block lg:w-1/2 relative" style={{ height: '540px' }}>

            {/* Billing — bright blue, upper right, +12deg tilt */}
            <FloatingCard
              icon={Receipt}
              label="Billing"
              bgColor="bg-blue-600"
              rotate="rotate-[12deg]"
              position="top-[30px] right-[50px]"
              animationClass="animate-float"
              animationDelay="delay-100"
            />

            {/* Matters — orange, left-center, -10deg tilt */}
            <FloatingCard
              icon={Briefcase}
              label="Matters"
              bgColor="bg-orange-500"
              rotate="-rotate-[10deg]"
              position="top-[195px] left-[0px]"
              animationClass="animate-float-reverse"
              animationDelay="delay-300"
            />

            {/* John Doe Portal — lavender, center, subtle +4deg */}
            <FloatingCard
              variant="portal"
              name="John Doe - Portal"
              message="Hey! Could you please review a document for me?"
              tag="MAT-2231"
              time="2 h ago"
              rotate="rotate-[4deg]"
              position="top-[190px] right-[110px]"
              animationClass="animate-float-slow"
              animationDelay="delay-500"
            />

            {/* Tasks — dark purple, lower center, -4deg tilt */}
            <FloatingCard
              icon={CheckSquare}
              label="Tasks"
              bgColor="bg-[#2d2547] dark:bg-[#1e1a35]"
              rotate="-rotate-[4deg]"
              position="bottom-[90px] left-[80px]"
              animationClass="animate-float"
              animationDelay="delay-400"
            />

            {/* Documents — dark purple, lower right, -8deg tilt */}
            <FloatingCard
              icon={FileText}
              label="Documents"
              bgColor="bg-[#2d2547] dark:bg-[#1e1a35]"
              rotate="-rotate-[8deg]"
              position="bottom-[55px] right-[10px]"
              animationClass="animate-float-reverse"
              animationDelay="delay-200"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
