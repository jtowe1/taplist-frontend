import React from 'react';
import {
  Box,
  Text,
  Flex,
  VStack,
  HStack,
  Circle,
} from '@chakra-ui/react';
import type { Beer } from '../data/mockBeerData';

interface TapCardProps {
  beer: Beer;
}

export const TapCard: React.FC<TapCardProps> = ({ beer }) => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      _groupHover={{
        transform: 'scale(1.02)',
        borderColor: 'orange.400',
      }}
      transition="all 0.5s"
      role="group"
    >
      <Box
        position="relative"
        backdropFilter="blur(16px)"
        bgGradient="linear(to-br, whiteAlpha.100, whiteAlpha.50, whiteAlpha.100)"
        border="1px solid"
        borderColor="whiteAlpha.200"
        borderRadius="2xl"
        p={6}
        shadow="2xl"
        _groupHover={{
          shadow: 'dark-lg',
          borderColor: 'orange.400',
        }}
        transition="all 0.5s"
      >
        {/* Background Glow Effect */}
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-br, orange.500, transparent, orange.500)"
          borderRadius="2xl"
          opacity={0}
          _groupHover={{ opacity: 0.05 }}
          transition="opacity 0.5s"
        />
        
        {/* Header with Tap Number */}
        <Box mb={6} position="relative">
          {/* Modern Tap Number */}
          <Box position="relative" display="inline-block">
            <Box
              bgGradient="linear(to-r, orange.400, orange.500)"
              color="white"
              fontWeight="black"
              fontSize={{ base: "xl", lg: "2xl", xl: "3xl" }}
              px={4}
              py={2}
              borderRadius="xl"
              shadow="lg"
            >
              {beer.tapNumber}
            </Box>
            <Circle
              position="absolute"
              top="-1"
              right="-1"
              size={{ base: 3, lg: 4 }}
              bgGradient="linear(to-r, yellow.300, orange.400)"
              opacity={0.8}
              animation="pulse 2s infinite"
            />
          </Box>
        </Box>

        {/* Beer Name */}
        <Box position="relative" mb={4}>
          <Text
            fontSize={{ base: "2xl", lg: "3xl", xl: "4xl" }}
            fontWeight="black"
            bgGradient="linear(to-r, white, whiteAlpha.900)"
            bgClip="text"
            mb={2}
            lineHeight="tight"
          >
            {beer.name}
          </Text>
        </Box>

        {/* Style */}
        <Box mb={4}>
          <Text
            fontSize={{ base: "lg", lg: "xl", xl: "2xl" }}
            color="orange.200"
            opacity={0.9}
            fontWeight="semibold"
            letterSpacing="wide"
          >
            {beer.style}
          </Text>
        </Box>

        {/* Stats Row */}
        <HStack gap={6} mb={6}>
          <HStack gap={2}>
            <Circle size={2} bg="orange.400" />
            <Text color="whiteAlpha.900" fontWeight="bold" fontSize="lg">
              {beer.abv}%
            </Text>
            <Text color="whiteAlpha.600" fontSize="sm">
              ABV
            </Text>
          </HStack>
          {beer.ibu && (
            <HStack gap={2}>
              <Circle size={2} bg="orange.400" />
              <Text color="whiteAlpha.900" fontWeight="bold" fontSize="lg">
                {beer.ibu}
              </Text>
              <Text color="whiteAlpha.600" fontSize="sm">
                IBU
              </Text>
            </HStack>
          )}
        </HStack>

        {/* Description */}
        {beer.description && (
          <Box mb={6}>
            <Text
              color="whiteAlpha.800"
              fontSize="base"
              lineHeight="relaxed"
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

        {/* Price Section */}
        <Box position="relative">
          <Flex align="flex-end" justify="flex-end">
            <VStack align="flex-end" gap={0}>
              <Text
                fontSize={{ base: "3xl", lg: "4xl", xl: "5xl" }}
                fontWeight="black"
                bgGradient="linear(to-r, orange.300, orange.400, orange.500)"
                bgClip="text"
              >
                ${beer.price.toFixed(2)}
              </Text>
              <Text
                color="whiteAlpha.600"
                fontSize={{ base: "sm", lg: "base" }}
                fontWeight="medium"
              >
                per pint
              </Text>
            </VStack>
          </Flex>
        </Box>

        {/* Subtle Border Glow */}
        <Box
          position="absolute"
          inset={0}
          borderRadius="2xl"
          bgGradient="linear(to-r, orange.400, transparent, orange.400)"
          opacity={0}
          _groupHover={{ opacity: 0.2 }}
          transition="opacity 0.5s"
          pointerEvents="none"
        />
      </Box>
    </Box>
  );
};