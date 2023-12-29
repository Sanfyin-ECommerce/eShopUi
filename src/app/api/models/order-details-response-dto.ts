/* tslint:disable */
/* eslint-disable */
import { OrderDetailsProductResponseDto } from './order-details-product-response-dto';
export interface OrderDetailsResponseDto {
  orderDate?: string;
  products?: null | Array<OrderDetailsProductResponseDto>;
  totalPrice?: number;
}
