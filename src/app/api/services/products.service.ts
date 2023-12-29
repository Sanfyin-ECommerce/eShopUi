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

import { ProductDto } from '../models/product-dto';
import { ProductListDto } from '../models/product-list-dto';
import { ProductSearchResultDto } from '../models/product-search-result-dto';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiProductsGet
   */
  static readonly ApiProductsGetPath = '/api/Products';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProductListDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductsService.ApiProductsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductListDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<ProductListDto> {

    return this.apiProductsGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProductListDto>) => r.body as ProductListDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProductListDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductsService.ApiProductsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductListDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsGet$Json(params?: {
  },
  context?: HttpContext

): Observable<ProductListDto> {

    return this.apiProductsGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProductListDto>) => r.body as ProductListDto)
    );
  }

  /**
   * Path part for operation apiProductsPost
   */
  static readonly ApiProductsPostPath = '/api/Products';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductsPost$Response(params?: {
    body?: ProductDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductsService.ApiProductsPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiProductsPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductsPost(params?: {
    body?: ProductDto
  },
  context?: HttpContext

): Observable<void> {

    return this.apiProductsPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiProductsCategoriesCategoryUrlGet
   */
  static readonly ApiProductsCategoriesCategoryUrlGetPath = '/api/Products/categories/{categoryUrl}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsCategoriesCategoryUrlGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsCategoriesCategoryUrlGet$Plain$Response(params: {
    categoryUrl: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProductListDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductsService.ApiProductsCategoriesCategoryUrlGetPath, 'get');
    if (params) {
      rb.path('categoryUrl', params.categoryUrl, {"style":"simple"});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductListDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductsCategoriesCategoryUrlGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsCategoriesCategoryUrlGet$Plain(params: {
    categoryUrl: string;
  },
  context?: HttpContext

): Observable<ProductListDto> {

    return this.apiProductsCategoriesCategoryUrlGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProductListDto>) => r.body as ProductListDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsCategoriesCategoryUrlGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsCategoriesCategoryUrlGet$Json$Response(params: {
    categoryUrl: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProductListDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductsService.ApiProductsCategoriesCategoryUrlGetPath, 'get');
    if (params) {
      rb.path('categoryUrl', params.categoryUrl, {"style":"simple"});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductListDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductsCategoriesCategoryUrlGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsCategoriesCategoryUrlGet$Json(params: {
    categoryUrl: string;
  },
  context?: HttpContext

): Observable<ProductListDto> {

    return this.apiProductsCategoriesCategoryUrlGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProductListDto>) => r.body as ProductListDto)
    );
  }

  /**
   * Path part for operation apiProductsProductIdGet
   */
  static readonly ApiProductsProductIdGetPath = '/api/Products/{productId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsProductIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsProductIdGet$Plain$Response(params: {
    productId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProductDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductsService.ApiProductsProductIdGetPath, 'get');
    if (params) {
      rb.path('productId', params.productId, {"style":"simple"});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductsProductIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsProductIdGet$Plain(params: {
    productId: number;
  },
  context?: HttpContext

): Observable<ProductDto> {

    return this.apiProductsProductIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProductDto>) => r.body as ProductDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsProductIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsProductIdGet$Json$Response(params: {
    productId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProductDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductsService.ApiProductsProductIdGetPath, 'get');
    if (params) {
      rb.path('productId', params.productId, {"style":"simple"});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductsProductIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsProductIdGet$Json(params: {
    productId: number;
  },
  context?: HttpContext

): Observable<ProductDto> {

    return this.apiProductsProductIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProductDto>) => r.body as ProductDto)
    );
  }

  /**
   * Path part for operation apiProductsFeaturedGet
   */
  static readonly ApiProductsFeaturedGetPath = '/api/Products/featured';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsFeaturedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsFeaturedGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProductListDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductsService.ApiProductsFeaturedGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductListDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductsFeaturedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsFeaturedGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<ProductListDto> {

    return this.apiProductsFeaturedGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProductListDto>) => r.body as ProductListDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsFeaturedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsFeaturedGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProductListDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductsService.ApiProductsFeaturedGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductListDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductsFeaturedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsFeaturedGet$Json(params?: {
  },
  context?: HttpContext

): Observable<ProductListDto> {

    return this.apiProductsFeaturedGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProductListDto>) => r.body as ProductListDto)
    );
  }

  /**
   * Path part for operation apiProductsSearchSearchTextPageGet
   */
  static readonly ApiProductsSearchSearchTextPageGetPath = '/api/Products/search/{searchText}/{page}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsSearchSearchTextPageGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsSearchSearchTextPageGet$Plain$Response(params: {
    searchText: string;
    page: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProductSearchResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductsService.ApiProductsSearchSearchTextPageGetPath, 'get');
    if (params) {
      rb.path('searchText', params.searchText, {"style":"simple"});
      rb.path('page', params.page, {"style":"simple"});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductSearchResultDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductsSearchSearchTextPageGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsSearchSearchTextPageGet$Plain(params: {
    searchText: string;
    page: number;
  },
  context?: HttpContext

): Observable<ProductSearchResultDto> {

    return this.apiProductsSearchSearchTextPageGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProductSearchResultDto>) => r.body as ProductSearchResultDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsSearchSearchTextPageGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsSearchSearchTextPageGet$Json$Response(params: {
    searchText: string;
    page: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProductSearchResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductsService.ApiProductsSearchSearchTextPageGetPath, 'get');
    if (params) {
      rb.path('searchText', params.searchText, {"style":"simple"});
      rb.path('page', params.page, {"style":"simple"});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductSearchResultDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductsSearchSearchTextPageGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsSearchSearchTextPageGet$Json(params: {
    searchText: string;
    page: number;
  },
  context?: HttpContext

): Observable<ProductSearchResultDto> {

    return this.apiProductsSearchSearchTextPageGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProductSearchResultDto>) => r.body as ProductSearchResultDto)
    );
  }

  /**
   * Path part for operation apiProductsSearchsuggestionsSearchTextGet
   */
  static readonly ApiProductsSearchsuggestionsSearchTextGetPath = '/api/Products/searchsuggestions/{searchText}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsSearchsuggestionsSearchTextGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsSearchsuggestionsSearchTextGet$Plain$Response(params: {
    searchText: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, ProductsService.ApiProductsSearchsuggestionsSearchTextGetPath, 'get');
    if (params) {
      rb.path('searchText', params.searchText, {"style":"simple"});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductsSearchsuggestionsSearchTextGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsSearchsuggestionsSearchTextGet$Plain(params: {
    searchText: string;
  },
  context?: HttpContext

): Observable<Array<string>> {

    return this.apiProductsSearchsuggestionsSearchTextGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsSearchsuggestionsSearchTextGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsSearchsuggestionsSearchTextGet$Json$Response(params: {
    searchText: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, ProductsService.ApiProductsSearchsuggestionsSearchTextGetPath, 'get');
    if (params) {
      rb.path('searchText', params.searchText, {"style":"simple"});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductsSearchsuggestionsSearchTextGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsSearchsuggestionsSearchTextGet$Json(params: {
    searchText: string;
  },
  context?: HttpContext

): Observable<Array<string>> {

    return this.apiProductsSearchsuggestionsSearchTextGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * Path part for operation apiProductsAdminGet
   */
  static readonly ApiProductsAdminGetPath = '/api/Products/admin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsAdminGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsAdminGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProductListDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductsService.ApiProductsAdminGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductListDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductsAdminGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsAdminGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<ProductListDto> {

    return this.apiProductsAdminGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProductListDto>) => r.body as ProductListDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsAdminGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsAdminGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProductListDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductsService.ApiProductsAdminGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductListDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductsAdminGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsAdminGet$Json(params?: {
  },
  context?: HttpContext

): Observable<ProductListDto> {

    return this.apiProductsAdminGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProductListDto>) => r.body as ProductListDto)
    );
  }

}
