import { createIcon } from '@chakra-ui/react'

export const HopIcon = createIcon({
  displayName: 'HopIcon',
  viewBox: '0 0 24 24',
  path: (
    <g>
      {/* Hop stem at top */}
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="M12 2c-1 0-1.5.5-2 1.2"
      />
      
      {/* Top layer bracts */}
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        d="M7 6c0-1.5 1-3 2.5-3.5C10.5 2 11.5 2 12 2s1.5 0 2.5.5C16 3 17 4.5 17 6c0 1-.5 1.8-1.2 2.3L12 10.5 8.2 8.3C7.5 7.8 7 7 7 6z"
      />
      
      {/* Second layer bracts */}
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        d="M6.5 10c0-1.2.8-2.5 2-3 1-.4 1.8-.5 2.5-.5h2c.7 0 1.5.1 2.5.5 1.2.5 2 1.8 2 3 0 .8-.4 1.5-1 2L12 14.5 8 12c-.6-.5-1-1.2-1.5-2z"
      />
      
      {/* Third layer bracts */}
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        d="M7 14.5c0-1 .6-2 1.5-2.5.8-.4 1.5-.5 2-.5h1c.5 0 1.2.1 2 .5.9.5 1.5 1.5 1.5 2.5 0 .7-.3 1.2-.8 1.6L12 18.5l-3.2-2.4c-.5-.4-.8-.9-.8-1.6z"
      />
      
      {/* Bottom layer bracts */}
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        d="M8 18c0-.8.4-1.5 1-2 .5-.3 1-.4 1.5-.4h1c.5 0 1 .1 1.5.4.6.5 1 1.2 1 2 0 .5-.2.9-.5 1.2L12 21.5l-1.5-2.3c-.3-.3-.5-.7-.5-1.2z"
      />
    </g>
  ),
})