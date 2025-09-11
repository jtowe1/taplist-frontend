import type { Beer } from '../types/beer';

const API_BASE_URL = 'http://10.0.0.245:8086/api';

export const fetchBeers = async (): Promise<Beer[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/beers`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching beers:', error);
    return [];
  }
};