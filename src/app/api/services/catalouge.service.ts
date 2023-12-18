/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiCatalougeCategoryPost } from '../fn/catalouge/api-catalouge-category-post';
import { ApiCatalougeCategoryPost$Params } from '../fn/catalouge/api-catalouge-category-post';

@Injectable({ providedIn: 'root' })
export class CatalougeService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiCatalougeCategoryPost()` */
  static readonly ApiCatalougeCategoryPostPath = '/api/Catalouge/category';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCatalougeCategoryPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCatalougeCategoryPost$Response(params?: ApiCatalougeCategoryPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiCatalougeCategoryPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCatalougeCategoryPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCatalougeCategoryPost(params?: ApiCatalougeCategoryPost$Params, context?: HttpContext): Observable<void> {
    return this.apiCatalougeCategoryPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
