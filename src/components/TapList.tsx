import React from 'react';
import {
  Box,
  Container,
  Grid,
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
      {/* Beer Grid - Optimized for Wall Display */}
      <Container maxW={{ base: "7xl", "2xl": "8xl" }} px={8} py={12}>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(5, 1fr)" }}
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
    </Box>
  );
};