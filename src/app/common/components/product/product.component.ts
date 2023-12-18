import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product, ProductType, ProductVariant } from '../../../api/models';

@Component({
  selector: 'sc-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {

    this.productVariant = [];
    this.product.variants?.forEach( x => {
      x.productTypeName = this.productTypes?.filter( y => y.id === x.productTypeId).map( z => z.name).toString();
      x.productTypeType = this.productTypes?.filter( y => y.id === x.productTypeId).map( z => z.type).toString();
      this.productVariant.push(x);
    })
    this.selectedVariant = this.productVariant[0];
  }

  @Input() product:Product = {};

  @Input() productTypes:ProductType[] = [];

  selectedVariant:ProductVariant = {};

  productVariant:ProductVariant[] = []

  ngOnInit(): void {

  }

  onOptionsSelected(value:string){
    this.selectedVariant = this.productVariant.filter( x => x.productTypeId == Number(value))[0];
  }

}
