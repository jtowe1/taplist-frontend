import React from 'react'
import { Icon, type IconProps } from '@chakra-ui/react'

interface BarleyIconProps extends IconProps {
  variant?: 'single' | 'bundle' | 'decorative'
}

export const BarleyIcon: React.FC<BarleyIconProps> = ({ 
  variant = 'single', 
  ...props 
}) => {
  const getBarleyPath = () => {
    switch (variant) {
      case 'bundle':
        return (
          <>
            {/* Multiple stalks */}
            <g>
              <path
                d="M10 22V8c0-.5.2-1 .5-1.5L11 6l.5.5c.3.5.5 1 .5 1.5v14"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M12 22V6c0-.5.2-1 .5-1.5L13 4l.5.5c.3.5.5 1 .5 1.5v16"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M14 22V10c0-.5.2-1 .5-1.5L15 8l.5.5c.3.5.5 1 .5 1.5v12"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </g>
            {/* Grain heads */}
            <g fill="currentColor" opacity="0.8">
              <ellipse cx="11" cy="6" rx="0.8" ry="2" />
              <ellipse cx="13" cy="4" rx="1" ry="2.5" />
              <ellipse cx="15" cy="8" rx="0.8" ry="2" />
            </g>
            {/* Individual grains */}
            {Array.from({ length: 12 }, (_, i) => {
              const stalk = Math.floor(i / 4)
              const grain = i % 4
              const x = 11 + stalk * 2
              const y = 6 + stalk * 2 - grain * 0.8
              return (
                <ellipse
                  key={i}
                  cx={x}
                  cy={y}
                  rx="0.3"
                  ry="0.6"
                  fill="currentColor"
                  opacity="0.9"
                />
              )
            })}
          </>
        )
      case 'decorative':
        return (
          <>
            {/* Decorative wave pattern */}
            <path
              d="M4 12c2-2 4-2 6 0s4 2 6 0s4-2 6 0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Small grain clusters along the wave */}
            {[6, 10, 14, 18].map((x, i) => (
              <g key={i}>
                <ellipse cx={x} cy="10" rx="0.5" ry="1" fill="currentColor" />
                <ellipse cx={x + 0.5} cy="11" rx="0.4" ry="0.8" fill="currentColor" opacity="0.8" />
                <ellipse cx={x - 0.5} cy="11" rx="0.4" ry="0.8" fill="currentColor" opacity="0.8" />
              </g>
            ))}
          </>
        )
      default: // single
        return (
          <>
            {/* Main stalk */}
            <path
              d="M12 22V4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Grain head */}
            <ellipse
              cx="12"
              cy="6"
              rx="1.5"
              ry="3"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="rgba(218, 165, 32, 0.3)"
            />
            {/* Individual grains */}
            {Array.from({ length: 8 }, (_, i) => (
              <ellipse
                key={i}
                cx={12 + (i % 2 === 0 ? -0.5 : 0.5)}
                cy={4 + i * 0.5}
                rx="0.4"
                ry="0.7"
                fill="currentColor"
                opacity="0.9"
              />
            ))}
            {/* Awns (bristles) */}
            {Array.from({ length: 6 }, (_, i) => (
              <path
                key={i}
                d={`M${12 + (i % 2 === 0 ? -0.8 : 0.8)} ${4.5 + i * 0.6} l${i % 2 === 0 ? -1.5 : 1.5} -1`}
                stroke="currentColor"
                strokeWidth="0.5"
                strokeLinecap="round"
              />
            ))}
          </>
        )
    }
  }

  return (
    <Icon viewBox="0 0 24 24" {...props}>
      {getBarleyPath()}
    </Icon>
  )
}