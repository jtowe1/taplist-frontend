import { createIcon } from '@chakra-ui/react'

export const BeerGlassIcon = createIcon({
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