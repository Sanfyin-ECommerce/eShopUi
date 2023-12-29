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

import { OrderDetailsResponseDto } from '../models/order-details-response-dto';
import { OrderOverviewResponseListDto } from '../models/order-overview-response-list-dto';

@Injectable({
  providedIn: 'root',
})
export class OrderService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiOrderGet
   */
  static readonly ApiOrderGetPath = '/api/Order';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<OrderOverviewResponseListDto>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OrderOverviewResponseListDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<OrderOverviewResponseListDto> {

    return this.apiOrderGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<OrderOverviewResponseListDto>) => r.body as OrderOverviewResponseListDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<OrderOverviewResponseListDto>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OrderOverviewResponseListDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGet$Json(params?: {
  },
  context?: HttpContext

): Observable<OrderOverviewResponseListDto> {

    return this.apiOrderGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<OrderOverviewResponseListDto>) => r.body as OrderOverviewResponseListDto)
    );
  }

  /**
   * Path part for operation apiOrderOrderIdGet
   */
  static readonly ApiOrderOrderIdGetPath = '/api/Order/{orderId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderOrderIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderOrderIdGet$Plain$Response(params: {
    orderId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<OrderDetailsResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderOrderIdGetPath, 'get');
    if (params) {
      rb.path('orderId', params.orderId, {"style":"simple"});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OrderDetailsResponseDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderOrderIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderOrderIdGet$Plain(params: {
    orderId: number;
  },
  context?: HttpContext

): Observable<OrderDetailsResponseDto> {

    return this.apiOrderOrderIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<OrderDetailsResponseDto>) => r.body as OrderDetailsResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderOrderIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderOrderIdGet$Json$Response(params: {
    orderId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<OrderDetailsResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderOrderIdGetPath, 'get');
    if (params) {
      rb.path('orderId', params.orderId, {"style":"simple"});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OrderDetailsResponseDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderOrderIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderOrderIdGet$Json(params: {
    orderId: number;
  },
  context?: HttpContext

): Observable<OrderDetailsResponseDto> {

    return this.apiOrderOrderIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<OrderDetailsResponseDto>) => r.body as OrderDetailsResponseDto)
    );
  }

}
