/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductList } from '../../models/product-list';

export interface ApiProductsCategoriesCategoryUrlGet$Plain$Params {
  categoryUrl: string;
}

export function apiProductsCategoriesCategoryUrlGet$Plain(http: HttpClient, rootUrl: string, params: ApiProductsCategoriesCategoryUrlGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductList>> {
  const rb = new RequestBuilder(rootUrl, apiProductsCategoriesCategoryUrlGet$Plain.PATH, 'get');
  if (params) {
    rb.path('categoryUrl', params, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProductList>;
    })
  );
}

apiProductsCategoriesCategoryUrlGet$Plain.PATH = '/api/Products/categories/{categoryUrl}';
