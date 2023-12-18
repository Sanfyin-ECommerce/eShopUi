/* tslint:disable */
/* eslint-disable */
import { Image } from '../models/image';
import { ProductVariant } from '../models/product-variant';
export interface Product {
  categoryId?: number;
  description?: string | null;
  featured?: boolean;
  id?: number;
  imageUrl?: string | null;
  images?: Array<Image> | null;
  title?: string | null;
  variants?: Array<ProductVariant> | null;
}
