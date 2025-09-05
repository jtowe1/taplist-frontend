import React from 'react'
import { Box, Text, HStack, VStack, Circle } from '@chakra-ui/react'
import { HopIcon, BarleyIcon } from './icons'

interface StatsBadgeProps {
  abv: number
  ibu?: number
  size?: 'sm' | 'md' | 'lg'
  layout?: 'horizontal' | 'vertical'
}

export const StatsBadge: React.FC<StatsBadgeProps> = ({ 
  abv, 
  ibu, 
  size = 'md',
  layout = 'horizontal'
}) => {
  const sizeConfig = {
    sm: {
      badge: { px: 2, py: 1, borderRadius: 'md' },
      text: 'sm',
      icon: 8,
      spacing: 1
    },
    md: {
      badge: { px: 3, py: 1.5, borderRadius: 'lg' },
      text: { base: "md", lg: "lg" },
      icon: { base: 8, lg: 10 },
      spacing: 2
    },
    lg: {
      badge: { px: 4, py: 2, borderRadius: 'xl' },
      text: { base: "lg", lg: "xl" },
      icon: { base: 10, lg: 12 },
      spacing: 3
    }
  }

  const config = sizeConfig[size]

  // Get color intensity based on ABV value
  const getAbvConfig = (abvValue: number) => {
    if (abvValue <= 4) {
      return {
        color: 'maltGold.400',
        bgGradient: 'linear(to-r, maltGold.500, maltGold.600)',
        intensity: 'Light'
      }
    } else if (abvValue <= 6) {
      return {
        color: 'amber.400',
        bgGradient: 'linear(to-r, amber.500, copper.500)',
        intensity: 'Medium'
      }
    } else if (abvValue <= 8) {
      return {
        color: 'copper.400',
        bgGradient: 'linear(to-r, copper.500, copper.700)',
        intensity: 'Strong'
      }
    } else {
      return {
        color: 'stoutBrown.400',
        bgGradient: 'linear(to-r, stoutBrown.500, stoutBrown.800)',
        intensity: 'Very Strong'
      }
    }
  }

  // Get color intensity based on IBU value
  const getIbuConfig = (ibuValue: number) => {
    if (ibuValue <= 20) {
      return {
        color: 'maltGold.400',
        bgGradient: 'linear(to-r, maltGold.500, maltGold.600)',
        intensity: 'Mild'
      }
    } else if (ibuValue <= 40) {
      return {
        color: 'hopGreen.400',
        bgGradient: 'linear(to-r, hopGreen.500, hopGreen.600)',
        intensity: 'Moderate'
      }
    } else if (ibuValue <= 60) {
      return {
        color: 'hopGreen.300',
        bgGradient: 'linear(to-r, hopGreen.600, hopGreen.700)',
        intensity: 'High'
      }
    } else {
      return {
        color: 'hopGreen.200',
        bgGradient: 'linear(to-r, hopGreen.700, hopGreen.900)',
        intensity: 'Very High'
      }
    }
  }

  const abvConfig = getAbvConfig(abv)
  const ibuConfig = ibu ? getIbuConfig(ibu) : null

  const StatBadge: React.FC<{
    value: number
    unit: string
    config: {
      color: string
      bgGradient: string
      intensity: string
    }
    icon: React.ReactNode
    label: string
  }> = ({ value, unit, config: colorConfig, icon, label }) => (
    <Box
      bgGradient={colorConfig.bgGradient}
      {...config.badge}
      shadow="md"
      border="1px solid"
      borderColor={colorConfig.color}
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        inset: 0,
        bgGradient: 'linear(135deg, whiteAlpha.300, transparent, whiteAlpha.100)',
        borderRadius: 'lg'
      }}
    >
      <HStack gap={config.spacing} position="relative" zIndex={1}>
        {icon}
        <VStack gap={0} align="flex-start">
          <HStack gap={1}>
            <Text
              fontSize={config.text}
              fontWeight="black"
              color="white"
              textShadow="1px 1px 2px rgba(0,0,0,0.8)"
              lineHeight="none"
            >
              {value}
            </Text>
            <Text
              fontSize="xs"
              fontWeight="medium"
              color="whiteAlpha.800"
              textShadow="1px 1px 2px rgba(0,0,0,0.6)"
              lineHeight="none"
            >
              {unit}
            </Text>
          </HStack>
          {size === 'lg' && (
            <Text
              fontSize="xs"
              fontWeight="medium"
              color="whiteAlpha.700"
              lineHeight="none"
            >
              {label}
            </Text>
          )}
        </VStack>
      </HStack>

      {/* Strength indicator dots */}
      <HStack
        position="absolute"
        bottom="0"
        right="1"
        gap={0.5}
      >
        {Array.from({ length: 4 }, (_, i) => (
          <Circle
            key={i}
            size="1"
            bg={
              (unit === '%' && abv > (i + 1) * 2) || 
              (unit === 'IBU' && ibu && ibu > (i + 1) * 20)
                ? 'whiteAlpha.800'
                : 'whiteAlpha.300'
            }
          />
        ))}
      </HStack>
    </Box>
  )

  const Container = layout === 'horizontal' ? HStack : VStack

  return (
    <Container gap={config.spacing}>
      {/* ABV Badge */}
      <StatBadge
        value={abv}
        unit="%"
        config={abvConfig}
        label="ABV"
        icon={
          <BarleyIcon
            boxSize={config.icon}
            color="white"
            opacity={0.9}
          />
        }
      />

      {/* IBU Badge */}
      {ibu && ibuConfig && (
        <StatBadge
          value={ibu}
          unit="IBU"
          config={ibuConfig}
          label="IBU"
          icon={
            <HopIcon
              boxSize={config.icon}
              color="white"
              opacity={0.9}
            />
          }
        />
      )}
    </Container>
  )
}