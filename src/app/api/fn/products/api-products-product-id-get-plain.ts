/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Product } from '../../models/product';

export interface ApiProductsProductIdGet$Plain$Params {
  productId: number;
}

export function apiProductsProductIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiProductsProductIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Product>> {
  const rb = new RequestBuilder(rootUrl, apiProductsProductIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('productId', params.productId, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Product>;
    })
  );
}

apiProductsProductIdGet$Plain.PATH = '/api/Products/{productId}';
