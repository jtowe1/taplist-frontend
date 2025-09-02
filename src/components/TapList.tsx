import React from 'react';
import {
  Box,
  Container,
  Text,
  Heading,
  Grid,
  Flex,
  HStack,
  VStack,
  Circle,
} from '@chakra-ui/react';
import { TapCard } from './TapCard';
import { mockBeers } from '../data/mockBeerData';

export const TapList: React.FC = () => {
  return (
    <Box
      minH="100vh"
      bg="gray.950"
      color="white"
    >
      {/* Modern Glass Morphism Header */}
      <Box position="relative" overflow="hidden">
        {/* Background Pattern */}
        <Box position="absolute" inset={0} opacity={0.1}>
          <Box
            position="absolute"
            top={0}
            left="25%"
            w="96"
            h="96"
            bgGradient="radial(orange.500)"
            opacity={0.2}
            borderRadius="full"
            filter="blur(48px)"
            animation="float 6s ease-in-out infinite"
          />
          <Box
            position="absolute"
            top="20"
            right="25%"
            w="80"
            h="80"
            bgGradient="radial(orange.500)"
            opacity={0.2}
            borderRadius="full"
            filter="blur(48px)"
            animation="float 6s ease-in-out infinite"
            style={{ animationDelay: '2s' }}
          />
          <Box
            position="absolute"
            bottom="10"
            left="33.333%"
            w="64"
            h="64"
            bgGradient="radial(orange.400)"
            opacity={0.1}
            borderRadius="full"
            filter="blur(32px)"
            animation="float 6s ease-in-out infinite"
            style={{ animationDelay: '4s' }}
          />
        </Box>
        
        {/* Glass Container */}
        <Box
          position="relative"
          backdropFilter="blur(24px)"
          bgGradient="linear(to-r, whiteAlpha.100, whiteAlpha.50, whiteAlpha.100)"
          border="1px solid"
          borderColor="whiteAlpha.200"
          shadow="2xl"
        >
          <Container maxW="7xl" py={12} px={8}>
            {/* Main Title */}
            <VStack textAlign="center" mb={6}>
              <Heading
                fontSize={{ base: "6xl", md: "7xl", xl: "8xl" }}
                fontWeight="black"
                bgGradient="linear(to-r, orange.300, orange.400, orange.500)"
                bgClip="text"
                mb={4}
                letterSpacing="tight"
              >
                ON TAP NOW
              </Heading>
              <Box
                w="24"
                h="1"
                bgGradient="linear(to-r, orange.400, orange.500)"
                mx="auto"
                borderRadius="full"
                mb={4}
              />
            </VStack>
            
            {/* Subtitle */}
            <VStack textAlign="center">
              <Text
                fontSize={{ base: "2xl", md: "3xl", xl: "4xl" }}
                color="whiteAlpha.900"
                fontWeight="semibold"
                mb={2}
              >
                {mockBeers.length} Fresh Craft Brews Available
              </Text>
              <Text
                fontSize={{ base: "lg", md: "xl", xl: "2xl" }}
                color="whiteAlpha.700"
              >
                Brewed with passion, served with pride
              </Text>
            </VStack>
            
            {/* Live Indicator */}
            <Flex justify="center" align="center" mt={6}>
              <Flex
                align="center"
                gap={3}
                bg="whiteAlpha.100"
                backdropFilter="blur(4px)"
                px={4}
                py={2}
                borderRadius="full"
                border="1px solid"
                borderColor="whiteAlpha.200"
              >
                <Circle
                  size={3}
                  bg="green.400"
                  animation="pulse 2s infinite"
                />
                <Text color="whiteAlpha.900" fontWeight="medium">
                  Live Menu
                </Text>
              </Flex>
            </Flex>
          </Container>
        </Box>
      </Box>

      {/* Beer Grid - Optimized for Wall Display */}
      <Container maxW={{ base: "7xl", "2xl": "8xl" }} px={8} py={12}>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={{ base: 8, "2xl": 12 }}
        >
          {mockBeers.map((beer, index) => (
            <Box
              key={beer.id}
              opacity={0}
              animation={`fadeInUp 0.8s ease-out ${index * 150}ms forwards`}
            >
              <TapCard beer={beer} />
            </Box>
          ))}
        </Grid>
      </Container>

      {/* Modern Footer */}
      <Box position="relative" mt={16}>
        {/* Background Effects */}
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-t, gray.900, transparent)"
          opacity={0.5}
        />
        
        <Box
          position="relative"
          backdropFilter="blur(4px)"
          bgGradient="linear(to-r, whiteAlpha.50, whiteAlpha.20, whiteAlpha.50)"
          borderTop="1px solid"
          borderColor="whiteAlpha.100"
          py={8}
          px={8}
        >
          <Container maxW="7xl">
            <VStack align="center" justify="center" gap={4}>
              {/* Main Message */}
              <Text
                fontSize="2xl"
                fontWeight="semibold"
                color="whiteAlpha.900"
                textAlign="center"
              >
                Ask your server about daily specials and flights
              </Text>
              
              {/* Secondary Messages */}
              <Flex
                flexWrap="wrap"
                justify="center"
                gap={8}
                color="whiteAlpha.700"
              >
                <HStack>
                  <Circle size={2} bg="orange.400" />
                  <Text>Happy Hour: 3-6 PM Daily</Text>
                </HStack>
                <HStack>
                  <Circle size={2} bg="green.400" />
                  <Text>Growlers Available</Text>
                </HStack>
                <HStack>
                  <Circle size={2} bg="blue.400" />
                  <Text>Flight Tastings $12</Text>
                </HStack>
              </Flex>
              
              {/* Last Updated */}
              <Text fontSize="sm" color="whiteAlpha.500" mt={4}>
                Menu updated daily • Follow us @brewery
              </Text>
            </VStack>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};