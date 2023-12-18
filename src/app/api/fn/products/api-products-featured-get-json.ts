/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductList } from '../../models/product-list';

export interface ApiProductsFeaturedGet$Json$Params {
}

export function apiProductsFeaturedGet$Json(http: HttpClient, rootUrl: string, params?: ApiProductsFeaturedGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductList>> {
  const rb = new RequestBuilder(rootUrl, apiProductsFeaturedGet$Json.PATH, 'get');
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

apiProductsFeaturedGet$Json.PATH = '/api/Products/featured';
