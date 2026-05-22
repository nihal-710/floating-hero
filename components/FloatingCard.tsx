'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'

// ── Standard pill variant ──────────────────────────────────────────────────────
interface PillCardProps {
  variant?: 'pill'
  icon: LucideIcon
  label: string
  bgColor: string         // Tailwind bg class  e.g. "bg-blue-600"
  textColor?: string      // default "text-white"
  rotate: string          // e.g. "rotate-[10deg]"
  position: string        // absolute positioning classes
  animationClass?: string
  animationDelay?: string
}

// ── Portal / chat-preview variant ─────────────────────────────────────────────
interface PortalCardProps {
  variant: 'portal'
  name: string
  message: string
  tag: string
  time: string
  rotate: string
  position: string
  animationClass?: string
  animationDelay?: string
}

type FloatingCardProps = PillCardProps | PortalCardProps

// ── Inline SVG avatar (no external image needed) ──────────────────────────────
const UserAvatar: React.FC = () => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-9 h-9 rounded-full shrink-0"
  >
    {/* background circle */}
    <circle cx="18" cy="18" r="18" fill="#c2723a" />
    {/* head */}
    <circle cx="18" cy="14" r="6" fill="#f5c9a0" />
    {/* body / shoulders */}
    <ellipse cx="18" cy="30" rx="10" ry="7" fill="#f5c9a0" />
    {/* hair */}
    <path
      d="M12 14 C12 8 24 8 24 14 C24 11 22 9 18 9 C14 9 12 11 12 14Z"
      fill="#3b1f0e"
    />
  </svg>
)

const FloatingCard: React.FC<FloatingCardProps> = (props) => {
  const base =
    'absolute select-none transition-all duration-300 ease-out cursor-default'

  // ── Portal variant ─────────────────────────────────────────────────────────
  if (props.variant === 'portal') {
    const {
      name, message, tag, time, rotate, position,
      animationClass = 'animate-float',
      animationDelay = '',
    } = props

    return (
      <div
        className={`
          ${base} ${position} ${rotate}
          ${animationClass} ${animationDelay}
          bg-[#dde3f5] dark:bg-[#2a2d4a]
          rounded-2xl shadow-lg
          px-4 py-3 w-[230px]
          hover:scale-105 hover:shadow-xl
        `}
      >
        <div className="flex items-start gap-3">
          {/* accent bar */}
          <div className="w-1 self-stretch rounded-full bg-indigo-400 shrink-0" />

          {/* SVG avatar */}
          <UserAvatar />

          {/* text */}
          <div className="flex flex-col min-w-0">
            <span className="text-[11px] font-bold text-slate-700 dark:text-slate-200 truncate">
              {name}
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5 line-clamp-2">
              {message}
            </span>
            <span className="text-[9px] text-slate-400 dark:text-slate-500 mt-1">
              {tag} · {time}
            </span>
          </div>
        </div>
      </div>
    )
  }

  // ── Pill variant ──────────────────────────────────────────────────────────
  const {
    icon: Icon,
    label,
    bgColor,
    textColor = 'text-white',
    rotate,
    position,
    animationClass = 'animate-float',
    animationDelay = '',
  } = props as PillCardProps

  return (
    <div
      className={`
        ${base} ${position} ${rotate}
        ${bgColor} ${textColor}
        ${animationClass} ${animationDelay}
        rounded-full shadow-xl
        flex items-center gap-3
        px-6 py-4
        hover:scale-105 hover:shadow-2xl
        min-w-[170px]
      `}
    >
      <div className="bg-white/20 rounded-full p-1.5 shrink-0">
        <Icon size={22} strokeWidth={2} />
      </div>
      <span className="text-xl font-bold whitespace-nowrap">{label}</span>
    </div>
  )
}

export default FloatingCard
