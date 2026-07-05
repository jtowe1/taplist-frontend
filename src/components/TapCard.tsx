import { Box, Flex, Text } from '@chakra-ui/react';
import { BeerGlassIcon } from './icons';
import type { Beer } from '../types/beer';
import { getSrmColor } from '../utils/srmColors';

interface TapCardProps {
  beer: Beer;
  isLast: boolean;
}

export const TapCard = ({ beer, isLast }: TapCardProps) => {
  const srmColor = getSrmColor(beer.srm);

  return (
    <Box
      flex={1}
      alignSelf="stretch"
      position="relative"
      borderRight={isLast ? 'none' : '1px solid rgba(244,160,55,0.12)'}
      overflow="hidden"
      display="flex"
      flexDirection="column"
      px={7}
      pt={8}
      pb={6}
    >
      {/* SRM background */}
      <Box
        position="absolute"
        inset={0}
        style={{ background: `linear-gradient(180deg, ${srmColor}55 0%, ${srmColor}25 100%)` }}
        pointerEvents="none"
      />

      {/* Top accent line */}
      <Box
        position="absolute"
        top={0} left={0} right={0}
        h="3px"
        style={{ background: `linear-gradient(90deg, transparent, ${srmColor}cc, transparent)` }}
      />

      {/* Tap number */}
      <Flex align="baseline" gap={2} mb={6}>
        <Text fontSize="1.8vw" fontWeight="700" letterSpacing="0.25em" color="rgba(244,160,55,0.4)" textTransform="uppercase">Tap</Text>
        <Text fontFamily="'Oswald', sans-serif" fontSize="6vw" fontWeight="700" lineHeight={1} color="rgba(255,255,255,0.1)">{beer.tapNumber}</Text>
      </Flex>

      {/* Beer name */}
      <Box flex={1}>
        <Text
          fontFamily="'Oswald', sans-serif"
          fontSize="4.5vw"
          fontWeight="700"
          lineHeight={1.05}
          color="#FFFFFF"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textShadow: `0 0 60px ${srmColor}44`,
          }}
        >
          {beer.name}
        </Text>
      </Box>

      {/* Bottom section */}
      <Box>
        {/* Divider */}
        <Box mb={6} h="2px" style={{ background: `linear-gradient(90deg, ${srmColor}70, transparent 80%)` }} />

        {/* Style badge */}
        <Box mb={5}>
          <Box
            display="inline-block"
            px={4} py={2}
            borderRadius="full"
            border="1px solid rgba(244,160,55,0.3)"
            fontSize="1.4vw"
            fontWeight="700"
            letterSpacing="0.15em"
            textTransform="uppercase"
            color="rgba(244,160,55,0.75)"
          >
            {beer.style}
          </Box>
        </Box>

        {/* Stats */}
        <Flex gap={8} mb={5} align="baseline" flexWrap="wrap">
          <Box>
            <Flex align="baseline" gap={1}>
              <Text fontFamily="'Oswald', sans-serif" fontSize="4vw" fontWeight="700" lineHeight={1} color={srmColor}>{beer.abv}</Text>
              <Text fontSize="1.8vw" color="rgba(255,255,255,0.35)" fontWeight="400">%</Text>
            </Flex>
            <Text fontSize="1.1vw" fontWeight="700" letterSpacing="0.2em" textTransform="uppercase" color="rgba(255,255,255,0.25)" mt={1}>ABV</Text>
          </Box>

          {(beer.ibu ?? 0) > 0 && (
            <Box>
              <Flex align="baseline" gap={1}>
                <Text fontFamily="'Oswald', sans-serif" fontSize="4vw" fontWeight="700" lineHeight={1} color="rgba(255,255,255,0.65)">{beer.ibu}</Text>
                <Text fontSize="1.8vw" color="rgba(255,255,255,0.3)" fontWeight="400"> IBU</Text>
              </Flex>
              <Text fontSize="1.1vw" fontWeight="700" letterSpacing="0.2em" textTransform="uppercase" color="rgba(255,255,255,0.25)" mt={1}>Bitterness</Text>
            </Box>
          )}
        </Flex>

        {/* Description + glass */}
        <Flex align="flex-end" justify="space-between" gap={4}>
          {beer.description && (
            <Text
              flex={1}
              fontSize="1.4vw"
              lineHeight="1.6"
              color="rgba(255,255,255,0.38)"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {beer.description}
            </Text>
          )}
          <Box opacity={0.35} flexShrink={0}>
            <BeerGlassIcon boxSize={14} color={`${srmColor}60`} fillColor={srmColor} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
