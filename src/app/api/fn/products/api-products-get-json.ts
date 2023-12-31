/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductList } from '../../models/product-list';

export interface ApiProductsGet$Json$Params {
}

export function apiProductsGet$Json(http: HttpClient, rootUrl: string, params?: ApiProductsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductList>> {
  const rb = new RequestBuilder(rootUrl, apiProductsGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProductList>;
    })
  );
}

apiProductsGet$Json.PATH = '/api/Products';
