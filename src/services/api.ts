import type { Beer } from '../types/beer';

const API_BASE_URL = 'http://10.0.0.245:8086/api';

export const fetchBeers = async (): Promise<Beer[]> => {
  const response = await fetch(`${API_BASE_URL}/beers`);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  return response.json();
};

export const createBeer = async (beer: Omit<Beer, 'id'>): Promise<Beer> => {
  const response = await fetch(`${API_BASE_URL}/beers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(beer),
  });
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  return response.json();
};

export const updateBeer = async (id: number, beer: Omit<Beer, 'id'>): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/beers/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, ...beer }),
  });
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
};

export const deleteBeer = async (id: number): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/beers/${id}`, { method: 'DELETE' });
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
};