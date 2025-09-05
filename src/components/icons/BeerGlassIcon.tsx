import React from 'react'
import { createIcon, type IconProps } from '@chakra-ui/react'

interface BeerGlassIconProps extends IconProps {
  fillColor?: string;
}

const BaseBeerGlassIcon = createIcon({
  displayName: 'BeerGlassIcon',
  viewBox: '0 0 24 24',
  path: (
    <g>
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(255, 248, 220, 0.2)"
        d="M8 22V6h8v16H8z"
      />
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        d="M16 12h1c1 0 2 1 2 2s-1 2-2 2h-1"
      />
    </g>
  ),
})

export const BeerGlassIcon: React.FC<BeerGlassIconProps> = ({ fillColor, ...props }) => {
  if (!fillColor) {
    return <BaseBeerGlassIcon {...props} />
  }
  
  // If fillColor is provided, render with custom fill
  return (
    <BaseBeerGlassIcon
      {...props}
      css={{
        '& path:first-of-type': {
          fill: fillColor
        }
      }}
    />
  )
}