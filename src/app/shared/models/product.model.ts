import { ICategory } from './category.model';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  images: string[];
  created_at: string;
  category: ICategory;
}
