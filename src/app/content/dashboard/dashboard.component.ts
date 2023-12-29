import { Component, OnInit, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { ProductDto, ProductListDto, ProductTypeDto, ProductTypeListDto } from '../../api/models';
import { ProductTypesService, ProductsService } from '../../api/services';
import { ActivatedRoute, Router } from '@angular/router';
import { apiCatalougeCategoryPost } from '../../api/fn/catalouge/api-catalouge-category-post';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  numberOfColumns = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return 1;
      }
      return 4;
    })
  );

  products:ProductListDto = {}
  productTypeList:ProductTypeListDto = {}
  url:any;

  constructor(private _ps:ProductsService, private _pts:ProductTypesService, private _actRoute:ActivatedRoute, private router:Router){
  }

  ngOnInit(): void {

    debugger
    if(this._actRoute.snapshot.paramMap.get('url'))
    {
      this.url = this._actRoute.snapshot.paramMap.get('url');
    }

    this._pts.apiProductTypesGet$Json$Response().subscribe( res => {
      this.productTypeList = res.body;
    });

    if(this.url)
    {

      this._ps.apiProductsCategoriesCategoryUrlGet$Json$Response({'categoryUrl': this.url}).subscribe( res => {
        console.log(res);
        this.products = res.body;
      });
    }
    else
    {
      this._ps.apiProductsFeaturedGet$Json$Response().subscribe( res => {
        console.log(res);
        this.products = res.body;
      });
    }
  }

}
