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
      transition="all 0.5s ease"
      role="group"
      _hover={{
        transform: 'scale(1.02) translateY(-2px)',
      }}
    >
      {/* Craft Beer Card Container */}
      <Box
        position="relative"
        bg="gray.800"
        border="2px solid"
        borderColor="gray.600"
        borderRadius="2xl"
        p={6}
        shadow="2xl"
        minH="md"
        transition="all 0.5s ease"
        _groupHover={{
          borderColor: 'orange.400',
          shadow: 'dark-lg',
          bg: 'gray.900'
        }}
        _before={{
          content: '""',
          position: 'absolute',
          inset: '2px',
          bgGradient: 'linear(135deg, whiteAlpha.100, transparent, whiteAlpha.50)',
          borderRadius: 'xl',
          pointerEvents: 'none',
          transition: 'opacity 0.5s',
          opacity: 0.7
        }}
        _after={{
          content: '""',
          position: 'absolute',
          inset: 0,
          bgGradient: 'linear(45deg, orange.400, transparent, orange.500)',
          borderRadius: '2xl',
          opacity: 0,
          transition: 'opacity 0.5s',
          pointerEvents: 'none',
          _groupHover: {
            opacity: 0.1
          }
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
            <Circle
              position="absolute"
              top="-1"
              right="-1"
              size={{ base: 3, lg: 4 }}
              bg="yellow.400"
              opacity={0.9}
              animation="pulse 2s infinite"
              shadow="md"
            />
          </Box>
        </Box>

        {/* Beer Style */}
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
            <Text
              fontFamily="'Source Sans Pro', sans-serif"
              fontSize={{ base: "md", lg: "lg", xl: "xl" }}
              color="white"
              fontWeight="semibold"
              letterSpacing="wide"
              textShadow="1px 1px 2px rgba(0,0,0,0.7)"
              position="relative"
              zIndex={1}
            >
              {beer.style}
            </Text>
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
            color="white"
            mb={2}
            textShadow="2px 2px 4px rgba(0,0,0,0.8)"
            _groupHover={{
              color: 'orange.300',
              textShadow: '2px 2px 8px rgba(210, 105, 30, 0.5)'
            }}
            transition="all 0.3s"
          >
            {beer.name}
          </Text>
          
          {/* Decorative Underline */}
          <Box
            w="0"
            h="1"
            bgGradient="linear(to-r, orange.400, orange.600)"
            borderRadius="full"
            transition="width 0.5s ease"
            _groupHover={{ w: "full" }}
          />
        </Box>

        {/* Stats Section */}
        <HStack gap={6} mb={6} position="relative" zIndex={2}>
          <HStack gap={2}>
            <Circle size={2} bg="orange.400" />
            <Text color="white" fontWeight="bold" fontSize="lg">
              {beer.abv}%
            </Text>
            <Text color="gray.400" fontSize="sm">
              ABV
            </Text>
          </HStack>
          {beer.ibu && (
            <HStack gap={2}>
              <Circle size={2} bg="orange.400" />
              <Text color="white" fontWeight="bold" fontSize="lg">
                {beer.ibu}
              </Text>
              <Text color="gray.400" fontSize="sm">
                IBU
              </Text>
            </HStack>
          )}
        </HStack>

        {/* Description */}
        {beer.description && (
          <Box mb={6} position="relative" zIndex={2}>
            <Text
              fontFamily="'Source Sans Pro', sans-serif"
              fontSize="md"
              lineHeight="base"
              color="gray.300"
              opacity={0.9}
              css={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}
              _groupHover={{
                color: 'white',
                opacity: 1
              }}
              transition="all 0.3s"
            >
              {beer.description}
            </Text>
          </Box>
        )}

        {/* Decorative Divider */}
        <Box
          mb={4}
          w="full"
          h="1"
          bgGradient="linear(to-r, transparent, orange.400, transparent)"
          opacity={0.4}
          _groupHover={{ opacity: 0.7 }}
          transition="opacity 0.3s"
          position="relative"
          zIndex={2}
        />

        {/* Price Section */}
        <Box position="relative" zIndex={2}>
          <Flex align="flex-end" justify="flex-end">
            <VStack align="flex-end" gap={0}>
              <HStack align="baseline" gap={1}>
                <Text
                  fontSize="sm"
                  color="gray.400"
                  fontWeight="medium"
                >
                  $
                </Text>
                <Text
                  fontFamily="'Oswald', sans-serif"
                  fontSize={{ base: "3xl", lg: "4xl", xl: "5xl" }}
                  fontWeight="black"
                  lineHeight="none"
                  bgGradient="linear(to-r, orange.400, orange.500, orange.600)"
                  bgClip="text"
                  textShadow="2px 2px 4px rgba(0,0,0,0.3)"
                  _groupHover={{
                    bgGradient: "linear(to-r, yellow.300, orange.400, orange.300)",
                    textShadow: "3px 3px 6px rgba(218, 165, 32, 0.4)"
                  }}
                  transition="all 0.3s"
                >
                  {beer.price.toFixed(2)}
                </Text>
              </HStack>
              <Text
                fontSize={{ base: "xs", lg: "sm" }}
                color="gray.400"
                fontWeight="medium"
                opacity={0.8}
              >
                per pint
              </Text>
            </VStack>
          </Flex>
        </Box>

        {/* Craft Glow Effect */}
        <Box
          position="absolute"
          inset={0}
          borderRadius="2xl"
          bgGradient="radial(circle at 50% 0%, orange.400, transparent 70%)"
          opacity={0}
          _groupHover={{ opacity: 0.15 }}
          transition="opacity 0.5s"
          pointerEvents="none"
          zIndex={0}
        />
      </Box>
    </Box>
  );
};