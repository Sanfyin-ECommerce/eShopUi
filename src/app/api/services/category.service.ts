/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiCategoryGet$Json } from '../fn/category/api-category-get-json';
import { ApiCategoryGet$Json$Params } from '../fn/category/api-category-get-json';
import { apiCategoryGet$Plain } from '../fn/category/api-category-get-plain';
import { ApiCategoryGet$Plain$Params } from '../fn/category/api-category-get-plain';
import { CategoryList } from '../models/category-list';

@Injectable({ providedIn: 'root' })
export class CategoryService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiCategoryGet()` */
  static readonly ApiCategoryGetPath = '/api/Category';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGet$Plain$Response(params?: ApiCategoryGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryList>> {
    return apiCategoryGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGet$Plain(params?: ApiCategoryGet$Plain$Params, context?: HttpContext): Observable<CategoryList> {
    return this.apiCategoryGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryList>): CategoryList => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGet$Json$Response(params?: ApiCategoryGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryList>> {
    return apiCategoryGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGet$Json(params?: ApiCategoryGet$Json$Params, context?: HttpContext): Observable<CategoryList> {
    return this.apiCategoryGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryList>): CategoryList => r.body)
    );
  }

}
