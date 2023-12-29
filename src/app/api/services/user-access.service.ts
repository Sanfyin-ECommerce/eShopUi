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

import { LoginRequest } from '../models/login-request';
import { RegisterNewUserCommand } from '../models/register-new-user-command';

@Injectable({
  providedIn: 'root',
})
export class UserAccessService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUserAccessRegisterPost
   */
  static readonly ApiUserAccessRegisterPostPath = '/api/UserAccess/register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAccessRegisterPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAccessRegisterPost$Response(params?: {
    body?: RegisterNewUserCommand
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserAccessService.ApiUserAccessRegisterPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiUserAccessRegisterPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAccessRegisterPost(params?: {
    body?: RegisterNewUserCommand
  },
  context?: HttpContext

): Observable<void> {

    return this.apiUserAccessRegisterPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiUserAccessConfirmRegistrationIdPost
   */
  static readonly ApiUserAccessConfirmRegistrationIdPostPath = '/api/UserAccess/confirm-registration/{Id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAccessConfirmRegistrationIdPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAccessConfirmRegistrationIdPost$Response(params: {
    Id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserAccessService.ApiUserAccessConfirmRegistrationIdPostPath, 'post');
    if (params) {
      rb.path('Id', params.Id, {"style":"simple"});
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
   * To access the full response (for headers, for example), `apiUserAccessConfirmRegistrationIdPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAccessConfirmRegistrationIdPost(params: {
    Id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiUserAccessConfirmRegistrationIdPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiUserAccessLoginPost
   */
  static readonly ApiUserAccessLoginPostPath = '/api/UserAccess/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAccessLoginPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAccessLoginPost$Response(params?: {
    body?: LoginRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserAccessService.ApiUserAccessLoginPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiUserAccessLoginPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAccessLoginPost(params?: {
    body?: LoginRequest
  },
  context?: HttpContext

): Observable<void> {

    return this.apiUserAccessLoginPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
