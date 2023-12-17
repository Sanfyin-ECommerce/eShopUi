import { Component, Input } from '@angular/core';
import { ProductVariant } from '../../../api/models';

@Component({
  selector: 'sc-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input() title = '';
  @Input() id = 0;
  @Input() description = "";
  @Input() variants:ProductVariant[] = [];

  selectedVariant:string = "";

}
