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

import { CategoryDto } from '../models/category-dto';
import { CategoryListDto } from '../models/category-list-dto';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCategoryGet
   */
  static readonly ApiCategoryGetPath = '/api/Category';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CategoryListDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CategoryListDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<CategoryListDto> {

    return this.apiCategoryGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<CategoryListDto>) => r.body as CategoryListDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CategoryListDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CategoryListDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGet$Json(params?: {
  },
  context?: HttpContext

): Observable<CategoryListDto> {

    return this.apiCategoryGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CategoryListDto>) => r.body as CategoryListDto)
    );
  }

  /**
   * Path part for operation apiCategoryPost
   */
  static readonly ApiCategoryPostPath = '/api/Category';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryPost$Response(params?: {
    body?: CategoryDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCategoryPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryPost(params?: {
    body?: CategoryDto
  },
  context?: HttpContext

): Observable<void> {

    return this.apiCategoryPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCategoryAdminGet
   */
  static readonly ApiCategoryAdminGetPath = '/api/Category/admin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryAdminGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryAdminGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CategoryListDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryAdminGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CategoryListDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryAdminGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryAdminGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<CategoryListDto> {

    return this.apiCategoryAdminGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<CategoryListDto>) => r.body as CategoryListDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryAdminGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryAdminGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CategoryListDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryAdminGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CategoryListDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryAdminGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryAdminGet$Json(params?: {
  },
  context?: HttpContext

): Observable<CategoryListDto> {

    return this.apiCategoryAdminGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CategoryListDto>) => r.body as CategoryListDto)
    );
  }

  /**
   * Path part for operation apiCategoryDeleteIdPost
   */
  static readonly ApiCategoryDeleteIdPostPath = '/api/Category/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryDeleteIdPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryDeleteIdPost$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryDeleteIdPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {"style":"simple"});
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
   * To access the full response (for headers, for example), `apiCategoryDeleteIdPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryDeleteIdPost(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiCategoryDeleteIdPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
