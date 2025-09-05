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
      <Container maxW="100%" px={4} py={4}>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(5, 1fr)" }}
          gap={{ base: 4, md: 6, lg: 4 }}
        >
          {mockBeers.map((beer) => (
            <Box key={beer.id}>
              <TapCard beer={beer} />
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};