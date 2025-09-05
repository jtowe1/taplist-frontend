export type Beer = {
  id: number;
  tapNumber: number;
  name: string;
  style: string;
  abv: number;
  ibu?: number;
  srm?: number;
  price: number;
  description?: string;
  isNew?: boolean;
  isFeatured?: boolean;
};

export const mockBeers: Beer[] = [
  {
    id: 1,
    tapNumber: 1,
    name: "Hazy IPA",
    style: "New England IPA",
    abv: 6.5,
    ibu: 45,
    srm: 4,
    price: 7.50,
    description: "Juicy citrus and tropical fruit flavors",
    isNew: true
  },
  {
    id: 2,
    tapNumber: 2,
    name: "Midnight Stout",
    style: "Imperial Stout",
    abv: 9.2,
    ibu: 35,
    srm: 35,
    price: 8.00,
    description: "Rich chocolate and coffee notes",
    isFeatured: true
  },
  {
    id: 3,
    tapNumber: 3,
    name: "Golden Wheat",
    style: "Hefeweizen",
    abv: 4.8,
    ibu: 15,
    srm: 3,
    price: 6.50,
    description: "Light and refreshing with banana esters"
  },
  {
    id: 4,
    tapNumber: 4,
    name: "Pilsner Perfect",
    style: "Czech Pilsner",
    abv: 4.9,
    ibu: 32,
    srm: 2,
    price: 6.00,
    description: "Crisp and clean with noble hop character"
  },
  {
    id: 5,
    tapNumber: 5,
    name: "Amber Ale",
    style: "American Amber Ale",
    abv: 5.4,
    ibu: 28,
    srm: 10,
    price: 6.75,
    description: "Balanced malt sweetness with caramel notes"
  }
];