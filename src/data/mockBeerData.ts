export type Beer = {
  id: number;
  tapNumber: number;
  name: string;
  style: string;
  abv: number;
  ibu?: number;
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
    price: 6.75,
    description: "Balanced malt sweetness with caramel notes"
  },
  {
    id: 6,
    tapNumber: 6,
    name: "Sour Cherry Bomb",
    style: "Sour Ale",
    abv: 5.8,
    ibu: 8,
    price: 8.50,
    description: "Tart cherry flavors with funky wild yeast"
  },
  {
    id: 7,
    tapNumber: 7,
    name: "West Coast IPA",
    style: "American IPA",
    abv: 7.2,
    ibu: 68,
    price: 7.25,
    description: "Pine and citrus with a bitter finish"
  },
  {
    id: 8,
    tapNumber: 8,
    name: "Belgian Wit",
    style: "Witbier",
    abv: 4.5,
    ibu: 20,
    price: 6.25,
    description: "Coriander and orange peel with wheat backbone"
  }
];