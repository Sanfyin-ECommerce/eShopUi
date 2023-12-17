/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiUserAccessConfirmRegistrationIdPost } from '../fn/user-access/api-user-access-confirm-registration-id-post';
import { ApiUserAccessConfirmRegistrationIdPost$Params } from '../fn/user-access/api-user-access-confirm-registration-id-post';
import { apiUserAccessLoginPost } from '../fn/user-access/api-user-access-login-post';
import { ApiUserAccessLoginPost$Params } from '../fn/user-access/api-user-access-login-post';
import { apiUserAccessRegisterPost } from '../fn/user-access/api-user-access-register-post';
import { ApiUserAccessRegisterPost$Params } from '../fn/user-access/api-user-access-register-post';

@Injectable({ providedIn: 'root' })
export class UserAccessService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiUserAccessRegisterPost()` */
  static readonly ApiUserAccessRegisterPostPath = '/api/UserAccess/register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAccessRegisterPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAccessRegisterPost$Response(params?: ApiUserAccessRegisterPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserAccessRegisterPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserAccessRegisterPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAccessRegisterPost(params?: ApiUserAccessRegisterPost$Params, context?: HttpContext): Observable<void> {
    return this.apiUserAccessRegisterPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUserAccessConfirmRegistrationIdPost()` */
  static readonly ApiUserAccessConfirmRegistrationIdPostPath = '/api/UserAccess/confirm-registration/{Id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAccessConfirmRegistrationIdPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAccessConfirmRegistrationIdPost$Response(params: ApiUserAccessConfirmRegistrationIdPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserAccessConfirmRegistrationIdPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserAccessConfirmRegistrationIdPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAccessConfirmRegistrationIdPost(params: ApiUserAccessConfirmRegistrationIdPost$Params, context?: HttpContext): Observable<void> {
    return this.apiUserAccessConfirmRegistrationIdPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUserAccessLoginPost()` */
  static readonly ApiUserAccessLoginPostPath = '/api/UserAccess/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAccessLoginPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAccessLoginPost$Response(params?: ApiUserAccessLoginPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserAccessLoginPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserAccessLoginPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAccessLoginPost(params?: ApiUserAccessLoginPost$Params, context?: HttpContext): Observable<void> {
    return this.apiUserAccessLoginPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
