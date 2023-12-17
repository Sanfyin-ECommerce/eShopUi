/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Product } from '../../models/product';

export interface ApiProductsProductIdGet$Json$Params {
  productId: number;
}

export function apiProductsProductIdGet$Json(http: HttpClient, rootUrl: string, params: ApiProductsProductIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Product>> {
  const rb = new RequestBuilder(rootUrl, apiProductsProductIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('productId', params.productId, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Product>;
    })
  );
}

apiProductsProductIdGet$Json.PATH = '/api/Products/{productId}';
