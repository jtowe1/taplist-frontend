import { useState, useEffect } from 'react';
import { Box, Flex, Spinner } from '@chakra-ui/react';
import { TapCard } from './TapCard';
import type { Beer } from '../types/beer';
import { fetchBeers } from '../services/api';

export const TapList = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBeers()
      .then(data => setBeers(data.sort((a, b) => a.tapNumber - b.tapNumber)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Flex minH="100vh" bg="#0D0A08" align="center" justify="center">
        <Spinner color="#F4A037" size="xl" />
      </Flex>
    );
  }

  return (
    <Box position="fixed" top={0} left={0} right={0} bottom={0} bg="#0D0A08" overflow="hidden" display="flex" alignItems="stretch">
      {beers.map((beer, i) => (
        <TapCard key={beer.id} beer={beer} isLast={i === beers.length - 1} />
      ))}
    </Box>
  );
};
