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

import { ProfileDto } from '../models/profile-dto';

@Injectable({
  providedIn: 'root',
})
export class ProfileService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiProfileGet
   */
  static readonly ApiProfileGetPath = '/api/Profile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfileGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProfileDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProfileService.ApiProfileGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProfileDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProfileGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<ProfileDto> {

    return this.apiProfileGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProfileDto>) => r.body as ProfileDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfileGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProfileDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProfileService.ApiProfileGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProfileDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProfileGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileGet$Json(params?: {
  },
  context?: HttpContext

): Observable<ProfileDto> {

    return this.apiProfileGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProfileDto>) => r.body as ProfileDto)
    );
  }

  /**
   * Path part for operation apiProfilePost
   */
  static readonly ApiProfilePostPath = '/api/Profile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfilePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProfilePost$Response(params?: {
    body?: ProfileDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProfileService.ApiProfilePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiProfilePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProfilePost(params?: {
    body?: ProfileDto
  },
  context?: HttpContext

): Observable<void> {

    return this.apiProfilePost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
