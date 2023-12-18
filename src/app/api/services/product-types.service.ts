/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiProductTypesGet$Json } from '../fn/product-types/api-product-types-get-json';
import { ApiProductTypesGet$Json$Params } from '../fn/product-types/api-product-types-get-json';
import { apiProductTypesGet$Plain } from '../fn/product-types/api-product-types-get-plain';
import { ApiProductTypesGet$Plain$Params } from '../fn/product-types/api-product-types-get-plain';
import { ProductTypeList } from '../models/product-type-list';

@Injectable({ providedIn: 'root' })
export class ProductTypesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiProductTypesGet()` */
  static readonly ApiProductTypesGetPath = '/api/ProductTypes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductTypesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductTypesGet$Plain$Response(params?: ApiProductTypesGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductTypeList>> {
    return apiProductTypesGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductTypesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductTypesGet$Plain(params?: ApiProductTypesGet$Plain$Params, context?: HttpContext): Observable<ProductTypeList> {
    return this.apiProductTypesGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductTypeList>): ProductTypeList => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductTypesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductTypesGet$Json$Response(params?: ApiProductTypesGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductTypeList>> {
    return apiProductTypesGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductTypesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductTypesGet$Json(params?: ApiProductTypesGet$Json$Params, context?: HttpContext): Observable<ProductTypeList> {
    return this.apiProductTypesGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductTypeList>): ProductTypeList => r.body)
    );
  }

}
