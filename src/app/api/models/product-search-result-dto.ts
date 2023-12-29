/* tslint:disable */
/* eslint-disable */
import { ProductDto } from './product-dto';
export interface ProductSearchResultDto {
  currentPage?: number;
  pages?: number;
  products?: null | Array<ProductDto>;
}
