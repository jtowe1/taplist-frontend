import { useState, useEffect } from 'react';
import { Box, Button, Flex, Heading, Input, Text, Stack, Spinner, Grid, Field } from '@chakra-ui/react';
import type { Beer } from '../types/beer';
import { fetchBeers, updateBeer } from '../services/api';

type BeerForm = { name: string; style: string; abv: string; ibu: string; srm: string; description: string };

function toForm(beer: Beer): BeerForm {
  return { name: beer.name, style: beer.style, abv: String(beer.abv), ibu: String(beer.ibu ?? 0), srm: String(beer.srm ?? 0), description: beer.description ?? '' };
}

function TapEditor({ beer, onSaved }: { beer: Beer; onSaved: () => void }) {
  const [form, setForm] = useState<BeerForm>(toForm(beer));
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<'idle' | 'saved' | 'error'>('idle');

  const set = (field: keyof BeerForm, value: string) => {
    setForm(f => ({ ...f, [field]: value }));
    setStatus('idle');
  };

  const handleSave = async () => {
    setSaving(true);
    setStatus('idle');
    try {
      await updateBeer(beer.id, {
        tapNumber: beer.tapNumber,
        name: form.name,
        style: form.style,
        abv: parseFloat(form.abv) || 0,
        ibu: parseInt(form.ibu) || 0,
        srm: parseInt(form.srm) || 0,
        description: form.description,
      });
      setStatus('saved');
      onSaved();
    } catch {
      setStatus('error');
    } finally {
      setSaving(false);
    }
  };

  const inputStyle = {
    bg: '#1C1410',
    border: '1px solid',
    borderColor: '#4A3429',
    color: '#F5F5F4',
    borderRadius: 'md',
    px: 3,
    py: 2,
    fontSize: 'sm',
    _focus: { borderColor: '#F4A037', outline: 'none' },
  };

  return (
    <Box bg="#2D1F1A" borderRadius="xl" border="1px solid #4A3429" p={5}>
      <Flex align="center" gap={3} mb={4}>
        <Box bg="#1C1410" border="1px solid #4A3429" borderRadius="md" px={3} py={1} minW="40px" textAlign="center">
          <Text color="#F5F5F4" fontWeight="bold" fontSize="lg">{beer.tapNumber}</Text>
        </Box>
        <Text color="#F4A037" fontWeight="bold" fontSize="md" flex={1} truncate>{beer.name || 'Unnamed'}</Text>
      </Flex>

      <Stack gap={3}>
        <Grid templateColumns={{ base: '1fr', sm: '1fr 1fr' }} gap={3}>
          <Field.Root>
            <Field.Label color="#A8A29E" fontSize="xs">Name</Field.Label>
            <Input value={form.name} onChange={e => set('name', e.target.value)} {...inputStyle} />
          </Field.Root>
          <Field.Root>
            <Field.Label color="#A8A29E" fontSize="xs">Style</Field.Label>
            <Input value={form.style} onChange={e => set('style', e.target.value)} {...inputStyle} />
          </Field.Root>
        </Grid>

        <Grid templateColumns="1fr 1fr 1fr" gap={3}>
          <Field.Root>
            <Field.Label color="#A8A29E" fontSize="xs">ABV (%)</Field.Label>
            <Input value={form.abv} onChange={e => set('abv', e.target.value)} type="number" step="0.1" {...inputStyle} />
          </Field.Root>
          <Field.Root>
            <Field.Label color="#A8A29E" fontSize="xs">IBU</Field.Label>
            <Input value={form.ibu} onChange={e => set('ibu', e.target.value)} type="number" {...inputStyle} />
          </Field.Root>
          <Field.Root>
            <Field.Label color="#A8A29E" fontSize="xs">SRM</Field.Label>
            <Input value={form.srm} onChange={e => set('srm', e.target.value)} type="number" {...inputStyle} />
          </Field.Root>
        </Grid>

        <Field.Root>
          <Field.Label color="#A8A29E" fontSize="xs">Description</Field.Label>
          <Input value={form.description} onChange={e => set('description', e.target.value)} {...inputStyle} />
        </Field.Root>

        <Flex justify="flex-end" align="center" gap={3} pt={1}>
          {status === 'saved' && <Text color="#4ADE80" fontSize="sm">Saved!</Text>}
          {status === 'error' && <Text color="#F44037" fontSize="sm">Save failed</Text>}
          <Button
            bg="#F4A037" color="#1C1410" fontWeight="bold" size="sm"
            _hover={{ bg: '#D2691E' }}
            onClick={handleSave}
            loading={saving}
          >
            Save Tap {beer.tapNumber}
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
}

export function AdminPage() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchBeers();
      setBeers(data.sort((a, b) => a.tapNumber - b.tapNumber));
    } catch {
      setError('Failed to load taps.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  return (
    <Box minH="100vh" bg="#1C1410" p={{ base: 4, md: 8 }}>
      <Heading color="#F4A037" fontSize={{ base: 'xl', md: '2xl' }} mb={6}>Tap Admin</Heading>

      {error && (
        <Box bg="#3A2A20" border="1px solid #F44037" borderRadius="md" p={3} mb={4}>
          <Text color="#F44037">{error}</Text>
        </Box>
      )}

      {loading ? (
        <Flex justify="center" pt={16}><Spinner color="#F4A037" size="xl" /></Flex>
      ) : (
        <Stack gap={4}>
          {beers.map(beer => (
            <TapEditor key={beer.id} beer={beer} onSaved={load} />
          ))}
        </Stack>
      )}
    </Box>
  );
}
