/* tslint:disable */
/* eslint-disable */
import { ImageDto } from './image-dto';
import { ProductVariantDto } from './product-variant-dto';
export interface ProductDto {
  categoryId?: number;
  description?: null | string;
  featured?: boolean;
  id?: number;
  imageUrl?: null | string;
  images?: null | Array<ImageDto>;
  title?: null | string;
  variants?: null | Array<ProductVariantDto>;
  visible?: boolean;
}
