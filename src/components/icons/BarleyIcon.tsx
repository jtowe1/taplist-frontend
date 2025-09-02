import { createIcon } from '@chakra-ui/react'

export const BarleyIcon = createIcon({
  displayName: 'BarleyIcon',
  viewBox: '0 0 24 24',
  path: (
    <g>
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="M12 22V4"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        fill="rgba(218, 165, 32, 0.3)"
        d="M10 8c0-2 1-4 2-4s2 2 2 4c0 1-1 2-2 2s-2-1-2-2z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        d="M11 6v2M13 6v2M11 8v1M13 8v1"
      />
    </g>
  ),
})