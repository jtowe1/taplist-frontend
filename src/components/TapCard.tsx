import React from 'react';
import {
  Box,
  Text,
  Flex,
  HStack,
} from '@chakra-ui/react';
import { BeerGlassIcon, HopIcon } from './icons';
import type { Beer } from '../data/mockBeerData';
import { getSrmColor } from '../utils/srmColors';

interface TapCardProps {
  beer: Beer;
}

export const TapCard: React.FC<TapCardProps> = ({ beer }) => {
  return (
    <Box
      position="relative"
      overflow="hidden"
    >
      {/* Craft Beer Card Container */}
      <Box
        position="relative"
        bg="gray.800"
        border="2px solid"
        borderColor="orange.400"
        borderRadius="2xl"
        p={6}
        shadow="dark-lg"
        minH="md"
        _before={{
          content: '""',
          position: 'absolute',
          inset: '2px',
          bgGradient: 'linear(135deg, whiteAlpha.100, transparent, whiteAlpha.50)',
          borderRadius: 'xl',
          pointerEvents: 'none',
          opacity: 0.7
        }}
        _after={{
          content: '""',
          position: 'absolute',
          inset: 0,
          bgGradient: 'linear(45deg, orange.400, transparent, orange.500)',
          borderRadius: '2xl',
          opacity: 0.1,
          pointerEvents: 'none'
        }}
      >
        {/* Tap Number Section */}
        <Box mb={6} position="relative" zIndex={2}>
          <Box position="relative" display="inline-block">
            <Box
              bgGradient="linear(to-r, orange.400, orange.500)"
              color="white"
              fontFamily="'Fredoka One', cursive"
              fontWeight="normal"
              fontSize={{ base: "xl", lg: "2xl", xl: "3xl" }}
              px={4}
              py={2}
              borderRadius="xl"
              shadow="lg"
              border="2px solid"
              borderColor="gray.600"
              textShadow="2px 2px 4px rgba(0,0,0,0.8)"
              _before={{
                content: '""',
                position: 'absolute',
                inset: '2px',
                bgGradient: 'linear(135deg, whiteAlpha.300, transparent, whiteAlpha.100)',
                borderRadius: 'lg',
                pointerEvents: 'none'
              }}
            >
              {beer.tapNumber}
            </Box>
          </Box>
        </Box>

        {/* Beer Style with Icon */}
        <Box mb={4} position="relative" zIndex={2}>
          <Box
            bgGradient="linear(to-r, orange.500, orange.600)"
            borderRadius="lg"
            px={3}
            py={1.5}
            shadow="md"
            border="1px solid"
            borderColor="orange.400"
            display="inline-block"
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
            <HStack gap={2} position="relative" zIndex={1}>
              <Text
                fontFamily="'Source Sans Pro', sans-serif"
                fontSize={{ base: "md", lg: "lg", xl: "xl" }}
                color="white"
                fontWeight="semibold"
                letterSpacing="wide"
                textShadow="1px 1px 2px rgba(0,0,0,0.7)"
              >
                {beer.style}
              </Text>
            </HStack>
          </Box>
        </Box>

        {/* Beer Name - Enhanced Typography */}
        <Box position="relative" mb={4} zIndex={2}>
          <Text
            fontFamily="'Oswald', sans-serif"
            fontSize={{ base: "4xl", lg: "5xl", xl: "6xl" }}
            fontWeight="black"
            lineHeight="shorter"
            letterSpacing="tight"
            color="orange.300"
            mb={2}
            textShadow="2px 2px 8px rgba(210, 105, 30, 0.5)"
          >
            {beer.name}
          </Text>

          {/* Decorative Underline */}
          <Box
            w="full"
            h="1"
            bgGradient="linear(to-r, orange.400, orange.600)"
            borderRadius="full"
          />
        </Box>

        {/* Stats Section with Icons */}
        <HStack gap={6} mb={6} position="relative" zIndex={2}>
          <HStack gap={2}>
            <Text color="white" fontWeight="bold" fontSize="lg">
              {beer.abv}%
            </Text>
            <Text color="gray.400" fontSize="sm">
              ABV
            </Text>
          </HStack>
          <HStack gap={2}>
            <Text color="white" fontWeight="bold" fontSize="lg">
              {beer.ibu}
            </Text>
            <Text color="gray.400" fontSize="sm">
              IBU
            </Text>
          </HStack>
          <HStack gap={1}>
            {Array.from({ length: 5 }, (_, i) => {
              // Calculate how filled this hop should be (0-100%)
              // Scale IBU 0-100+ to 5 icons
              const fillPercentage = Math.max(0, Math.min(100, (((beer.ibu || 0) - (i * 20)) / 20) * 100));

              return (
                <Box key={i} position="relative">
                  <HopIcon
                    boxSize={6}
                    color="gray.600"
                  />
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    overflow="hidden"
                    style={{
                      clipPath: `inset(${100 - fillPercentage}% 0 0 0)`
                    }}
                  >
                    <HopIcon
                      boxSize={6}
                      color="green.400"
                    />
                  </Box>
                </Box>
              );
            })}
          </HStack>
        </HStack>

        {/* Description */}
        {beer.description && (
          <Box mb={6} position="relative" zIndex={2}>
            <Text
              fontFamily="'Source Sans Pro', sans-serif"
              fontSize="md"
              lineHeight="base"
              color="white"
              opacity={1}
              css={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}
            >
              {beer.description}
            </Text>
          </Box>
        )}

        {/* Price Section with Beer Glass */}
        <Box position="relative" zIndex={2}>
          <Flex align="flex-end" justify="space-between">
            {/* Beer Glass Icon */}
            <Box
              opacity={1}
              transform="translateY(-2px)"
            >
              <BeerGlassIcon
                boxSize={16}
                color="orange.500"
                fillColor={getSrmColor(beer.srm)}
              />
            </Box>

          </Flex>
        </Box>

        {/* Craft Glow Effect */}
        <Box
          position="absolute"
          inset={0}
          borderRadius="2xl"
          bgGradient="radial(circle at 50% 0%, orange.400, transparent 70%)"
          opacity={0.15}
          pointerEvents="none"
          zIndex={0}
        />
      </Box>
    </Box>
  );
};