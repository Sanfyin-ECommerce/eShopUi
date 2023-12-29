/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ProductTypeDto } from '../models/product-type-dto';
import { ProductTypeListDto } from '../models/product-type-list-dto';

@Injectable({
  providedIn: 'root',
})
export class ProductTypesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiProductTypesGet
   */
  static readonly ApiProductTypesGetPath = '/api/ProductTypes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductTypesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductTypesGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProductTypeListDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductTypesService.ApiProductTypesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductTypeListDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductTypesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductTypesGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<ProductTypeListDto> {

    return this.apiProductTypesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProductTypeListDto>) => r.body as ProductTypeListDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductTypesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductTypesGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProductTypeListDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductTypesService.ApiProductTypesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductTypeListDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductTypesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductTypesGet$Json(params?: {
  },
  context?: HttpContext

): Observable<ProductTypeListDto> {

    return this.apiProductTypesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProductTypeListDto>) => r.body as ProductTypeListDto)
    );
  }

  /**
   * Path part for operation apiProductTypesPost
   */
  static readonly ApiProductTypesPostPath = '/api/ProductTypes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductTypesPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductTypesPost$Response(params?: {
    body?: ProductTypeDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductTypesService.ApiProductTypesPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductTypesPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductTypesPost(params?: {
    body?: ProductTypeDto
  },
  context?: HttpContext

): Observable<void> {

    return this.apiProductTypesPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
