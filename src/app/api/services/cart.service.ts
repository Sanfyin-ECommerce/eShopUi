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

import { CartItemCountDto } from '../models/cart-item-count-dto';
import { CartItemDto } from '../models/cart-item-dto';
import { CartItemListDto } from '../models/cart-item-list-dto';
import { CartProductResponseListDto } from '../models/cart-product-response-list-dto';

@Injectable({
  providedIn: 'root',
})
export class CartService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCartGet
   */
  static readonly ApiCartGetPath = '/api/Cart';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCartGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCartGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CartProductResponseListDto>> {

    const rb = new RequestBuilder(this.rootUrl, CartService.ApiCartGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CartProductResponseListDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCartGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCartGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<CartProductResponseListDto> {

    return this.apiCartGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<CartProductResponseListDto>) => r.body as CartProductResponseListDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCartGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCartGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CartProductResponseListDto>> {

    const rb = new RequestBuilder(this.rootUrl, CartService.ApiCartGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CartProductResponseListDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCartGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCartGet$Json(params?: {
  },
  context?: HttpContext

): Observable<CartProductResponseListDto> {

    return this.apiCartGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CartProductResponseListDto>) => r.body as CartProductResponseListDto)
    );
  }

  /**
   * Path part for operation apiCartPost
   */
  static readonly ApiCartPostPath = '/api/Cart';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCartPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCartPost$Plain$Response(params?: {
    body?: CartItemListDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CartProductResponseListDto>> {

    const rb = new RequestBuilder(this.rootUrl, CartService.ApiCartPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CartProductResponseListDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCartPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCartPost$Plain(params?: {
    body?: CartItemListDto
  },
  context?: HttpContext

): Observable<CartProductResponseListDto> {

    return this.apiCartPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<CartProductResponseListDto>) => r.body as CartProductResponseListDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCartPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCartPost$Json$Response(params?: {
    body?: CartItemListDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CartProductResponseListDto>> {

    const rb = new RequestBuilder(this.rootUrl, CartService.ApiCartPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CartProductResponseListDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCartPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCartPost$Json(params?: {
    body?: CartItemListDto
  },
  context?: HttpContext

): Observable<CartProductResponseListDto> {

    return this.apiCartPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CartProductResponseListDto>) => r.body as CartProductResponseListDto)
    );
  }

  /**
   * Path part for operation apiCartProductsPost
   */
  static readonly ApiCartProductsPostPath = '/api/Cart/products';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCartProductsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCartProductsPost$Plain$Response(params?: {
    body?: CartItemListDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CartProductResponseListDto>> {

    const rb = new RequestBuilder(this.rootUrl, CartService.ApiCartProductsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CartProductResponseListDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCartProductsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCartProductsPost$Plain(params?: {
    body?: CartItemListDto
  },
  context?: HttpContext

): Observable<CartProductResponseListDto> {

    return this.apiCartProductsPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<CartProductResponseListDto>) => r.body as CartProductResponseListDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCartProductsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCartProductsPost$Json$Response(params?: {
    body?: CartItemListDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CartProductResponseListDto>> {

    const rb = new RequestBuilder(this.rootUrl, CartService.ApiCartProductsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CartProductResponseListDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCartProductsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCartProductsPost$Json(params?: {
    body?: CartItemListDto
  },
  context?: HttpContext

): Observable<CartProductResponseListDto> {

    return this.apiCartProductsPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CartProductResponseListDto>) => r.body as CartProductResponseListDto)
    );
  }

  /**
   * Path part for operation apiCartCountGet
   */
  static readonly ApiCartCountGetPath = '/api/Cart/count';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCartCountGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCartCountGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CartItemCountDto>> {

    const rb = new RequestBuilder(this.rootUrl, CartService.ApiCartCountGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CartItemCountDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCartCountGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCartCountGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<CartItemCountDto> {

    return this.apiCartCountGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<CartItemCountDto>) => r.body as CartItemCountDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCartCountGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCartCountGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CartItemCountDto>> {

    const rb = new RequestBuilder(this.rootUrl, CartService.ApiCartCountGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CartItemCountDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCartCountGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCartCountGet$Json(params?: {
  },
  context?: HttpContext

): Observable<CartItemCountDto> {

    return this.apiCartCountGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CartItemCountDto>) => r.body as CartItemCountDto)
    );
  }

  /**
   * Path part for operation apiCartAddPost
   */
  static readonly ApiCartAddPostPath = '/api/Cart/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCartAddPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCartAddPost$Response(params?: {
    body?: CartItemDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CartService.ApiCartAddPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCartAddPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCartAddPost(params?: {
    body?: CartItemDto
  },
  context?: HttpContext

): Observable<void> {

    return this.apiCartAddPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCartUpdateQuantityPost
   */
  static readonly ApiCartUpdateQuantityPostPath = '/api/Cart/update-quantity';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCartUpdateQuantityPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCartUpdateQuantityPost$Response(params?: {
    body?: CartItemDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CartService.ApiCartUpdateQuantityPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCartUpdateQuantityPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCartUpdateQuantityPost(params?: {
    body?: CartItemDto
  },
  context?: HttpContext

): Observable<void> {

    return this.apiCartUpdateQuantityPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCartRemoveDelete
   */
  static readonly ApiCartRemoveDeletePath = '/api/Cart/remove';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCartRemoveDelete()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCartRemoveDelete$Response(params?: {
    body?: CartItemDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CartService.ApiCartRemoveDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiCartRemoveDelete$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCartRemoveDelete(params?: {
    body?: CartItemDto
  },
  context?: HttpContext

): Observable<void> {

    return this.apiCartRemoveDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
