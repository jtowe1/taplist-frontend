import React from 'react'
import { Box, Text, Circle } from '@chakra-ui/react'
import { TapHandleIcon } from './icons'

interface TapNumberProps {
  number: number
  size?: 'sm' | 'md' | 'lg'
  variant?: 'modern' | 'vintage' | 'craft'
}

export const TapNumber: React.FC<TapNumberProps> = ({ 
  number, 
  size = 'md',
  variant = 'craft'
}) => {
  const sizeConfig = {
    sm: {
      container: { w: 12, h: 16 },
      text: 'lg',
      icon: 5,
      pulse: 2
    },
    md: {
      container: { w: 16, h: 20 },
      text: { base: "xl", lg: "2xl", xl: "3xl" },
      icon: 6,
      pulse: { base: 3, lg: 4 }
    },
    lg: {
      container: { w: 20, h: 24 },
      text: { base: "2xl", lg: "3xl", xl: "4xl" },
      icon: 8,
      pulse: { base: 4, lg: 5 }
    }
  }

  const config = sizeConfig[size]

  const getGradient = () => {
    switch (variant) {
      case 'modern':
        return 'linear(to-br, copper.400, copper.600)'
      case 'vintage':
        return 'linear(to-br, maltGold.400, stoutBrown.500)'
      default: // craft
        return 'linear(to-br, amber.400, copper.500)'
    }
  }

  return (
    <Box position="relative" display="inline-block">
      {/* Tap Handle Background */}
      <Box
        position="relative"
        w={config.container.w}
        h={config.container.h}
        bgGradient={getGradient()}
        borderRadius="xl"
        shadow="lg"
        border="2px solid"
        borderColor="coffeeBeans.700"
        display="flex"
        alignItems="center"
        justifyContent="center"
        _before={{
          content: '""',
          position: 'absolute',
          inset: '2px',
          bgGradient: 'linear(135deg, whiteAlpha.300, transparent, whiteAlpha.100)',
          borderRadius: 'lg',
          pointerEvents: 'none'
        }}
      >
        {/* Tap Number */}
        <Text
          fontFamily="'Fredoka One', cursive"
          fontSize={config.text}
          color="white"
          textShadow="2px 2px 4px rgba(0,0,0,0.8)"
          position="relative"
          zIndex={2}
        >
          {number}
        </Text>

        {/* Metallic highlight */}
        <Box
          position="absolute"
          top="1"
          left="2"
          right="2"
          h="2"
          bgGradient="linear(to-r, whiteAlpha.600, transparent)"
          borderRadius="full"
          opacity={0.8}
        />
      </Box>

      {/* Animated Pulse Indicator */}
      <Circle
        position="absolute"
        top="-1"
        right="-1"
        size={config.pulse}
        bgGradient="linear(to-r, maltGold.300, amber.400)"
        opacity={0.9}
        animation="pulse 2s infinite"
        zIndex={3}
        shadow="md"
      />

      {/* Decorative Tap Handle Icon */}
      {size !== 'sm' && (
        <Box
          position="absolute"
          bottom="-2"
          left="50%"
          transform="translateX(-50%)"
          opacity={0.7}
        >
          <TapHandleIcon
            variant={variant}
            boxSize={config.icon}
            color="copper.400"
          />
        </Box>
      )}
    </Box>
  )
}