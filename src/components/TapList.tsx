import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Spinner,
  Alert,
} from '@chakra-ui/react';
import { TapCard } from './TapCard';
import type { Beer } from '../types/beer';
import { fetchBeers } from '../services/api';

export const TapList: React.FC = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBeers = async () => {
      try {
        setLoading(true);
        setError(null);
        const beerData = await fetchBeers();
        setBeers(beerData);
      } catch (err) {
        setError('Failed to load beer data');
        console.error('Error loading beers:', err);
      } finally {
        setLoading(false);
      }
    };

    loadBeers();
  }, []);

  if (loading) {
    return (
      <Box
        minH="100vh"
        bg="gray.950"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        minH="100vh"
        bg="gray.950"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Alert.Root status="error">
          <Alert.Indicator />
          <Alert.Title>{error}</Alert.Title>
        </Alert.Root>
      </Box>
    );
  }

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
          {beers.map((beer) => (
            <Box key={beer.id}>
              <TapCard beer={beer} />
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};