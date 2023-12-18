/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductTypeList } from '../../models/product-type-list';

export interface ApiProductTypesGet$Plain$Params {
}

export function apiProductTypesGet$Plain(http: HttpClient, rootUrl: string, params?: ApiProductTypesGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductTypeList>> {
  const rb = new RequestBuilder(rootUrl, apiProductTypesGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProductTypeList>;
    })
  );
}

apiProductTypesGet$Plain.PATH = '/api/ProductTypes';
