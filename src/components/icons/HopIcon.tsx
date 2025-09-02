import React from 'react'
import { Icon, type IconProps } from '@chakra-ui/react'

interface HopIconProps extends IconProps {
  variant?: 'outline' | 'filled'
}

export const HopIcon: React.FC<HopIconProps> = ({ 
  variant = 'outline', 
  ...props 
}) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      {variant === 'filled' ? (
        // Filled hop cone
        <>
          <path
            fill="currentColor"
            d="M12 2c-1.5 0-2.5 1-3 2.5C8.5 5.8 8 7.2 8 8.5c0 1.8.5 3.5 1.5 5l1 1.5c.5.8.5 1.5.5 2.5v2c0 1.1.9 2 2 2s2-.9 2-2v-2c0-1-.5-1.7-.5-2.5l-1-1.5c-1-1.5-1.5-3.2-1.5-5 0-1.3.5-2.7 1-4.3C14.5 3 13.5 2 12 2z"
          />
          <path
            fill="currentColor"
            opacity="0.7"
            d="M9.5 8.5c0 .5.2 1 .5 1.5l.8 1.2c.2.3.2.7.2 1 0 .8-.5 1.5-1.2 1.8-.7.3-1.5.1-2-.4-.5-.5-.8-1.2-.8-2 0-1.2.3-2.4.8-3.5.3-.7.7-1.3 1.2-1.8.5-.4 1.1-.6 1.7-.6.3 0 .6.1.8.3-.8.8-1 1.8-1 2.5z"
          />
          <path
            fill="currentColor"
            opacity="0.7"
            d="M14.5 8.5c0-.7-.2-1.7-1-2.5.2-.2.5-.3.8-.3.6 0 1.2.2 1.7.6.5.5.9 1.1 1.2 1.8.5 1.1.8 2.3.8 3.5 0 .8-.3 1.5-.8 2-.5.5-1.3.7-2 .4-.7-.3-1.2-1-1.2-1.8 0-.3 0-.7.2-1l.8-1.2c.3-.5.5-1 .5-1.5z"
          />
        </>
      ) : (
        // Outline hop cone
        <>
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            d="M12 2c-1.5 0-2.5 1-3 2.5C8.5 5.8 8 7.2 8 8.5c0 1.8.5 3.5 1.5 5l1 1.5c.5.8.5 1.5.5 2.5v2c0 1.1.9 2 2 2s2-.9 2-2v-2c0-1-.5-1.7-.5-2.5l-1-1.5c-1-1.5-1.5-3.2-1.5-5 0-1.3.5-2.7 1-4.3C14.5 3 13.5 2 12 2z"
          />
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            d="M9 9c-.5-.5-1.5-.5-2 0s-.5 1.5 0 2c.5.5 1.5.5 2 0"
          />
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            d="M15 9c.5-.5 1.5-.5 2 0s.5 1.5 0 2c-.5.5-1.5.5-2 0"
          />
          <path
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
            d="M10 12c.5 0 1-.2 1.5-.5M14 12c-.5 0-1-.2-1.5-.5"
          />
        </>
      )}
    </Icon>
  )
}