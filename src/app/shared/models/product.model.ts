import { ICategory } from './category.model';

export interface IProduct {
  id: number;
  slug: string;
  title: string;
  price: number;
  description: string;
  images: string[];
  created_at: string;
  category: ICategory;
}
