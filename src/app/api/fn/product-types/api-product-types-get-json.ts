/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductTypeList } from '../../models/product-type-list';

export interface ApiProductTypesGet$Json$Params {
}

export function apiProductTypesGet$Json(http: HttpClient, rootUrl: string, params?: ApiProductTypesGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductTypeList>> {
  const rb = new RequestBuilder(rootUrl, apiProductTypesGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProductTypeList>;
    })
  );
}

apiProductTypesGet$Json.PATH = '/api/ProductTypes';
