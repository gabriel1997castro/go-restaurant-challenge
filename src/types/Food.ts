export type Food = {
  description: string;
  image: string;
  name: string;
  price: string;
};

export interface FoodApi extends Food {
  id: number;
  available: boolean;
}
