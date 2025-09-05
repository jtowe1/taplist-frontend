/**
 * SRM (Standard Reference Method) to Hex Color Mapping
 * 
 * The SRM color scale is used to specify beer colors in brewing.
 * This mapping provides hex color codes for SRM values 1-40.
 * Colors are based on industry-standard brewing references.
 */

const SRM_COLOR_MAP: Record<number, string> = {
  1: '#FFE699',
  2: '#FFD878',
  3: '#FFCA5A',
  4: '#FFBF42',
  5: '#FBB123',
  6: '#F8A600',
  7: '#F39C00',
  8: '#EA8F00',
  9: '#E58500',
  10: '#DE7C00',
  11: '#D77200',
  12: '#CF6900',
  13: '#CB6200',
  14: '#C35900',
  15: '#BB5100',
  16: '#B54C00',
  17: '#B04500',
  18: '#A63E00',
  19: '#A13700',
  20: '#9B3200',
  21: '#952D00',
  22: '#8E2900',
  23: '#882300',
  24: '#821E00',
  25: '#7B1A00',
  26: '#771900',
  27: '#701400',
  28: '#6A0E00',
  29: '#660D00',
  30: '#5E0B00',
  31: '#5A0A02',
  32: '#560A05',
  33: '#520907',
  34: '#4C0505',
  35: '#470606',
  36: '#440607',
  37: '#3F0708',
  38: '#3B0607',
  39: '#3A070B',
  40: '#36080A'
};

/**
 * Default beer color for when SRM value is not available
 * Uses a medium amber color (approximately SRM 8)
 */
const DEFAULT_BEER_COLOR = '#EA8F00';

/**
 * Converts an SRM value to its corresponding hex color code
 * 
 * @param srm - The SRM (Standard Reference Method) value (typically 1-40)
 * @returns The hex color code string for the beer color
 */
export function getSrmColor(srm?: number): string {
  if (!srm || srm < 1) {
    return DEFAULT_BEER_COLOR;
  }

  // Round to nearest integer for lookup
  const roundedSrm = Math.round(srm);
  
  // If SRM is higher than our map, use the darkest color
  if (roundedSrm > 40) {
    return SRM_COLOR_MAP[40];
  }

  // Return the color for the SRM value, or default if not found
  return SRM_COLOR_MAP[roundedSrm] || DEFAULT_BEER_COLOR;
}

/**
 * Get a readable description of the beer color based on SRM value
 * 
 * @param srm - The SRM value
 * @returns A human-readable description of the beer color
 */
export function getSrmDescription(srm?: number): string {
  if (!srm || srm < 1) return 'Light';
  
  if (srm <= 3) return 'Pale Straw';
  if (srm <= 6) return 'Straw';
  if (srm <= 9) return 'Pale Gold';
  if (srm <= 14) return 'Deep Gold';
  if (srm <= 17) return 'Light Amber';
  if (srm <= 20) return 'Medium Amber';
  if (srm <= 24) return 'Dark Amber';
  if (srm <= 29) return 'Copper';
  if (srm <= 35) return 'Light Brown';
  if (srm <= 40) return 'Dark Brown';
  
  return 'Black';
}