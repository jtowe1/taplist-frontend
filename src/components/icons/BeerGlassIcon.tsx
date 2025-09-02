import React from 'react'
import { Icon, type IconProps } from '@chakra-ui/react'

interface BeerGlassIconProps extends IconProps {
  glassType?: 'pint' | 'pilsner' | 'tulip' | 'stout' | 'wheat'
}

export const BeerGlassIcon: React.FC<BeerGlassIconProps> = ({ 
  glassType = 'pint', 
  ...props 
}) => {
  const getGlassPath = () => {
    switch (glassType) {
      case 'pilsner':
        return (
          <>
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              d="M8 22V6c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v16"
            />
            <path
              stroke="currentColor"
              strokeWidth="1.5"
              fill="rgba(255, 248, 220, 0.3)"
              d="M8.5 20V8h7v12z"
            />
          </>
        )
      case 'tulip':
        return (
          <>
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              d="M9 22V16c0-2 1-4 3-4s3 2 3 4v6"
            />
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              d="M8 12c0-3 2-8 4-8s4 5 4 8c0 1-1 2-2 2h-4c-1 0-2-1-2-2z"
            />
            <path
              stroke="currentColor"
              strokeWidth="1.5"
              fill="rgba(255, 248, 220, 0.3)"
              d="M8.5 12c0-2.5 1.5-6.5 3.5-6.5s3.5 4 3.5 6.5c0 .5-.5 1-1 1h-5c-.5 0-1-.5-1-1z"
            />
          </>
        )
      case 'stout':
        return (
          <>
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              d="M7 22V10c0-2 1-4 3-4h4c2 0 3 2 3 4v12"
            />
            <path
              stroke="currentColor"
              strokeWidth="1.5"
              fill="rgba(139, 69, 19, 0.4)"
              d="M7.5 20V12c0-1 .5-2 1.5-2h6c1 0 1.5 1 1.5 2v8z"
            />
            <ellipse
              cx="12"
              cy="10"
              rx="4.5"
              ry="1"
              fill="rgba(255, 248, 220, 0.8)"
            />
          </>
        )
      case 'wheat':
        return (
          <>
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              d="M9 22V6c0-1 0-2 1-2h4c1 0 1 1 1 2v16"
            />
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              d="M8 6c0-1 1-2 2-2h4c1 0 2 1 2 2v2H8V6z"
            />
            <path
              stroke="currentColor"
              strokeWidth="1.5"
              fill="rgba(218, 165, 32, 0.3)"
              d="M9.5 20V8h5v12z"
            />
          </>
        )
      default: // pint
        return (
          <>
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              d="M8 22V6h8v16"
            />
            <path
              stroke="currentColor"
              strokeWidth="1.5"
              fill="rgba(255, 248, 220, 0.3)"
              d="M8.5 20V8h7v12z"
            />
            <ellipse
              cx="12"
              cy="6"
              rx="3.5"
              ry="1"
              fill="rgba(255, 248, 220, 0.8)"
            />
          </>
        )
    }
  }

  return (
    <Icon viewBox="0 0 24 24" {...props}>
      {getGlassPath()}
      {/* Handle for all glass types */}
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        d="M16 12h1c1 0 2 1 2 2s-1 2-2 2h-1"
      />
    </Icon>
  )
}