import { Category } from './category.model';

export class Gift {
  id: number;
  description: string;
  category: Category;
  thumbnail: string;
  points: number;
  stock: number;
}
