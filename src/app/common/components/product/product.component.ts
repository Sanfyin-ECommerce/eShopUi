import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductType, ProductVariant } from '../../../api/models';

@Component({
  selector: 'sc-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  @Input() product:Product = {};

  @Input() productTypes:ProductType[] = [];

  selectedVariant:string = "";

  productVariant:ProductVariant[] = []

  ngOnInit(): void {

    this.product.variants?.forEach( x => {
      debugger
      x.productTypeName = this.productTypes?.filter( y => y.id === x.productTypeId).map( z => z.name).toString();
      x.productTypeType = this.productTypes?.filter( y => y.id === x.productTypeId).map( z => z.type).toString();

    })
  }

}
