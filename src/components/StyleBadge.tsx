import React from 'react'
import { Box, Text, HStack } from '@chakra-ui/react'
import { BeerGlassIcon, HopIcon, BarleyIcon } from './icons'

interface StyleBadgeProps {
  style: string
  size?: 'sm' | 'md' | 'lg'
}

export const StyleBadge: React.FC<StyleBadgeProps> = ({ 
  style, 
  size = 'md'
}) => {
  const sizeConfig = {
    sm: {
      text: 'sm',
      icon: 8,
      px: 2,
      py: 1
    },
    md: {
      text: { base: "md", lg: "lg", xl: "xl" },
      icon: { base: 8, lg: 10 },
      px: 3,
      py: 1.5
    },
    lg: {
      text: { base: "lg", lg: "xl", xl: "2xl" },
      icon: { base: 10, lg: 12 },
      px: 4,
      py: 2
    }
  }

  const config = sizeConfig[size]

  // Map beer styles to colors and glass types
  const getStyleConfig = (beerStyle: string) => {
    const style = beerStyle.toLowerCase()
    
    if (style.includes('ipa') || style.includes('pale ale')) {
      return {
        color: 'hopGreen.500',
        bgColor: 'hopGreen.500',
        glassType: 'tulip' as const,
        icon: 'hop' as const,
        gradient: 'linear(to-r, hopGreen.400, hopGreen.600)'
      }
    }
    
    if (style.includes('stout') || style.includes('porter')) {
      return {
        color: 'stoutBrown.400',
        bgColor: 'stoutBrown.500',
        glassType: 'stout' as const,
        icon: 'barley' as const,
        gradient: 'linear(to-r, stoutBrown.400, stoutBrown.700)'
      }
    }
    
    if (style.includes('wheat') || style.includes('hefeweizen') || style.includes('wit')) {
      return {
        color: 'maltGold.400',
        bgColor: 'maltGold.500',
        glassType: 'wheat' as const,
        icon: 'barley' as const,
        gradient: 'linear(to-r, maltGold.400, maltGold.600)'
      }
    }
    
    if (style.includes('pilsner') || style.includes('lager')) {
      return {
        color: 'amber.400',
        bgColor: 'amber.500',
        glassType: 'pilsner' as const,
        icon: 'barley' as const,
        gradient: 'linear(to-r, amber.400, amber.600)'
      }
    }
    
    if (style.includes('amber')) {
      return {
        color: 'copper.400',
        bgColor: 'copper.500',
        glassType: 'pint' as const,
        icon: 'barley' as const,
        gradient: 'linear(to-r, copper.400, copper.600)'
      }
    }
    
    // Default for other styles
    return {
      color: 'amber.400',
      bgColor: 'amber.500',
      glassType: 'pint' as const,
      icon: 'hop' as const,
      gradient: 'linear(to-r, amber.400, copper.500)'
    }
  }

  const styleConfig = getStyleConfig(style)

  const renderIcon = () => {
    const iconProps = {
      boxSize: config.icon,
      color: 'white',
      opacity: 0.9
    }

    switch (styleConfig.icon) {
      case 'hop':
        return <HopIcon {...iconProps} />
      case 'barley':
        return <BarleyIcon {...iconProps} />
      default:
        return <BeerGlassIcon {...iconProps} />
    }
  }

  return (
    <Box
      bgGradient={styleConfig.gradient}
      borderRadius="lg"
      px={config.px}
      py={config.py}
      shadow="md"
      border="1px solid"
      borderColor={styleConfig.color}
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        inset: 0,
        bgGradient: 'linear(135deg, whiteAlpha.200, transparent)',
        borderRadius: 'lg'
      }}
    >
      <HStack gap={2} position="relative" zIndex={1}>
        {renderIcon()}
        <Text
          textStyle="beerStyle"
          fontSize={config.text}
          color="white"
          fontWeight="semibold"
          letterSpacing="wide"
          textShadow="1px 1px 2px rgba(0,0,0,0.7)"
        >
          {style}
        </Text>
      </HStack>
    </Box>
  )
}