/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductList } from '../../models/product-list';

export interface ApiProductsCategoriesCategoryUrlGet$Json$Params {
  categoryUrl: string;
}

export function apiProductsCategoriesCategoryUrlGet$Json(http: HttpClient, rootUrl: string, params: ApiProductsCategoriesCategoryUrlGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductList>> {
  const rb = new RequestBuilder(rootUrl, apiProductsCategoriesCategoryUrlGet$Json.PATH, 'get');
  if (params) {
    rb.path('categoryUrl', params, {"style":"simple"});
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

apiProductsCategoriesCategoryUrlGet$Json.PATH = '/api/Products/categories/{categoryUrl}';
