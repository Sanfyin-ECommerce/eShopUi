import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Product, ProductList, ProductType, ProductTypeList } from '../../api/models';
import { ProductTypesService, ProductsService } from '../../api/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  products:ProductList = {}
  productTypeList:ProductTypeList = {}

  constructor(private _ps:ProductsService, private _pts:ProductTypesService)
  {
    // ps.GetProducts().subscribe( res => {

    //   console.log(res);
    //   this.products = res.products;
    // })
      _ps.apiProductsGet$Json$Response().subscribe( res => {
        console.log(res);
        this.products = res.body;
        _pts.apiProductTypesGet$Json$Response().subscribe( res => {
          console.log(res);
          this.productTypeList = res.body;
        });
      });

      

  }

}
