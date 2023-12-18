/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiProductsCategoriesCategoryUrlGet$Json } from '../fn/products/api-products-categories-category-url-get-json';
import { ApiProductsCategoriesCategoryUrlGet$Json$Params } from '../fn/products/api-products-categories-category-url-get-json';
import { apiProductsCategoriesCategoryUrlGet$Plain } from '../fn/products/api-products-categories-category-url-get-plain';
import { ApiProductsCategoriesCategoryUrlGet$Plain$Params } from '../fn/products/api-products-categories-category-url-get-plain';
import { apiProductsFeaturedGet$Json } from '../fn/products/api-products-featured-get-json';
import { ApiProductsFeaturedGet$Json$Params } from '../fn/products/api-products-featured-get-json';
import { apiProductsFeaturedGet$Plain } from '../fn/products/api-products-featured-get-plain';
import { ApiProductsFeaturedGet$Plain$Params } from '../fn/products/api-products-featured-get-plain';
import { apiProductsGet$Json } from '../fn/products/api-products-get-json';
import { ApiProductsGet$Json$Params } from '../fn/products/api-products-get-json';
import { apiProductsGet$Plain } from '../fn/products/api-products-get-plain';
import { ApiProductsGet$Plain$Params } from '../fn/products/api-products-get-plain';
import { apiProductsProductIdGet$Json } from '../fn/products/api-products-product-id-get-json';
import { ApiProductsProductIdGet$Json$Params } from '../fn/products/api-products-product-id-get-json';
import { apiProductsProductIdGet$Plain } from '../fn/products/api-products-product-id-get-plain';
import { ApiProductsProductIdGet$Plain$Params } from '../fn/products/api-products-product-id-get-plain';
import { Product } from '../models/product';
import { ProductList } from '../models/product-list';

@Injectable({ providedIn: 'root' })
export class ProductsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiProductsGet()` */
  static readonly ApiProductsGetPath = '/api/Products';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsGet$Plain$Response(params?: ApiProductsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductList>> {
    return apiProductsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsGet$Plain(params?: ApiProductsGet$Plain$Params, context?: HttpContext): Observable<ProductList> {
    return this.apiProductsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductList>): ProductList => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsGet$Json$Response(params?: ApiProductsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductList>> {
    return apiProductsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsGet$Json(params?: ApiProductsGet$Json$Params, context?: HttpContext): Observable<ProductList> {
    return this.apiProductsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductList>): ProductList => r.body)
    );
  }

  /** Path part for operation `apiProductsCategoriesCategoryUrlGet()` */
  static readonly ApiProductsCategoriesCategoryUrlGetPath = '/api/Products/categories/{categoryUrl}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsCategoriesCategoryUrlGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsCategoriesCategoryUrlGet$Plain$Response(params: ApiProductsCategoriesCategoryUrlGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductList>> {
    return apiProductsCategoriesCategoryUrlGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductsCategoriesCategoryUrlGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsCategoriesCategoryUrlGet$Plain(params: ApiProductsCategoriesCategoryUrlGet$Plain$Params, context?: HttpContext): Observable<ProductList> {
    return this.apiProductsCategoriesCategoryUrlGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductList>): ProductList => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsCategoriesCategoryUrlGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsCategoriesCategoryUrlGet$Json$Response(params: ApiProductsCategoriesCategoryUrlGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductList>> {
    return apiProductsCategoriesCategoryUrlGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductsCategoriesCategoryUrlGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsCategoriesCategoryUrlGet$Json(params: ApiProductsCategoriesCategoryUrlGet$Json$Params, context?: HttpContext): Observable<ProductList> {
    return this.apiProductsCategoriesCategoryUrlGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductList>): ProductList => r.body)
    );
  }

  /** Path part for operation `apiProductsProductIdGet()` */
  static readonly ApiProductsProductIdGetPath = '/api/Products/{productId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsProductIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsProductIdGet$Plain$Response(params: ApiProductsProductIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Product>> {
    return apiProductsProductIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductsProductIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsProductIdGet$Plain(params: ApiProductsProductIdGet$Plain$Params, context?: HttpContext): Observable<Product> {
    return this.apiProductsProductIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Product>): Product => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsProductIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsProductIdGet$Json$Response(params: ApiProductsProductIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Product>> {
    return apiProductsProductIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductsProductIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsProductIdGet$Json(params: ApiProductsProductIdGet$Json$Params, context?: HttpContext): Observable<Product> {
    return this.apiProductsProductIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Product>): Product => r.body)
    );
  }

  /** Path part for operation `apiProductsFeaturedGet()` */
  static readonly ApiProductsFeaturedGetPath = '/api/Products/featured';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsFeaturedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsFeaturedGet$Plain$Response(params?: ApiProductsFeaturedGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductList>> {
    return apiProductsFeaturedGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductsFeaturedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsFeaturedGet$Plain(params?: ApiProductsFeaturedGet$Plain$Params, context?: HttpContext): Observable<ProductList> {
    return this.apiProductsFeaturedGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductList>): ProductList => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsFeaturedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsFeaturedGet$Json$Response(params?: ApiProductsFeaturedGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductList>> {
    debugger
    return apiProductsFeaturedGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductsFeaturedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsFeaturedGet$Json(params?: ApiProductsFeaturedGet$Json$Params, context?: HttpContext): Observable<ProductList> {
    return this.apiProductsFeaturedGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductList>): ProductList => r.body)
    );
  }

}
