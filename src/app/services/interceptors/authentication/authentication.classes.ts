import { Interceptor, InterceptedRequest, InterceptedResponse } from 'ng2-interceptors';

import { Inject } from '@angular/core';
import { Router } from '@angular/router';

import { UserModel } from '../../../models/user/user.classes';

export class AuthenticationInterceptor implements Interceptor {

    constructor (
        @Inject (Router) private _router: Router,
        @Inject (UserModel) private _userModel: UserModel
    ) {}

    public interceptBefore(request: InterceptedRequest): InterceptedRequest {
        return request;
    }

    public interceptAfter(response: InterceptedResponse): InterceptedResponse {
        if (response.response.status === 403) {
            this._userModel.Logout();
            this._router.navigate(['/']);
        }

        return response;
    }

}
