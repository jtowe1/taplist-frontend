import React from 'react'
import { Icon, type IconProps } from '@chakra-ui/react'

interface TapHandleIconProps extends IconProps {
  variant?: 'modern' | 'vintage' | 'craft'
}

export const TapHandleIcon: React.FC<TapHandleIconProps> = ({ 
  variant = 'craft', 
  ...props 
}) => {
  const getHandlePath = () => {
    switch (variant) {
      case 'modern':
        return (
          <>
            <rect
              x="10"
              y="4"
              width="4"
              height="16"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
              fill="url(#modernGradient)"
            />
            <circle
              cx="12"
              cy="6"
              r="2"
              stroke="currentColor"
              strokeWidth="2"
              fill="currentColor"
            />
          </>
        )
      case 'vintage':
        return (
          <>
            <path
              d="M10 20V10c0-2 1-3 2-3s2 1 2 3v10c0 1-1 2-2 2s-2-1-2-2z"
              stroke="currentColor"
              strokeWidth="2"
              fill="url(#vintageGradient)"
            />
            <ellipse
              cx="12"
              cy="8"
              rx="3"
              ry="1.5"
              stroke="currentColor"
              strokeWidth="2"
              fill="currentColor"
            />
            <path
              d="M9 8v-2c0-1.5 1.5-3 3-3s3 1.5 3 3v2"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </>
        )
      default: // craft
        return (
          <>
            <path
              d="M11 20V12c0-1 0-2 1-2s1 1 1 2v8c0 1-.5 2-1 2s-1-1-1-2z"
              stroke="currentColor"
              strokeWidth="2"
              fill="url(#craftGradient)"
            />
            <path
              d="M9 12c0-3 1-6 3-6s3 3 3 6c0 .5-.5 1-1 1h-4c-.5 0-1-.5-1-1z"
              stroke="currentColor"
              strokeWidth="2"
              fill="url(#craftGradient)"
            />
            <circle
              cx="12"
              cy="4"
              r="1.5"
              stroke="currentColor"
              strokeWidth="2"
              fill="currentColor"
            />
            {/* Craft details */}
            <path
              d="M10.5 9h3M10.5 10.5h3"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </>
        )
    }
  }

  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <defs>
        <linearGradient id="modernGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B87333" />
          <stop offset="100%" stopColor="#D2691E" />
        </linearGradient>
        <linearGradient id="vintageGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#DAA520" />
          <stop offset="50%" stopColor="#B87333" />
          <stop offset="100%" stopColor="#8B4513" />
        </linearGradient>
        <linearGradient id="craftGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D2691E" />
          <stop offset="50%" stopColor="#B87333" />
          <stop offset="100%" stopColor="#A8622D" />
        </linearGradient>
      </defs>
      {getHandlePath()}
    </Icon>
  )
}