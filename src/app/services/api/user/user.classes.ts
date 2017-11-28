declare var $: any;

import 'rxjs/add/operator/toPromise';

import { InterceptorService } from 'ng2-interceptors';

import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';

import { URLConfig } from '../../../configs/url.config';

import { UserModel } from '../../../models/user/user.classes';

import { ResponseInterface } from '../_shared/shared.interfaces';
import { GetHeaderWithUser, GetHeader } from '../_shared/shared.functions';


@Injectable()
export class UserAPI {

    constructor (private _http: InterceptorService, private _userModel: UserModel) {}

    PostAccountConfirm(body: Object): Promise<ResponseInterface> {
        const _body: string = $.param(body);
        const _header: RequestOptions = GetHeaderWithUser(this._userModel.TokenValue);

        return this._http
            .post(URLConfig.Auth + 'user/account/confirm', _body, _header)
            .toPromise()
            .then(response => response.json())
            .then(response => response)
            .catch(error => error);
    }

    PostAccountConfirmResend(body: Object): Promise<ResponseInterface> {
        const _body: string = $.param(body);
        const _header: RequestOptions = GetHeaderWithUser(this._userModel.TokenValue);

        return this._http
            .post(URLConfig.Auth + 'user/account/confirm/resend', _body, _header)
            .toPromise()
            .then(response => response.json())
            .then(response => response)
            .catch(error => error);
    }

    PostEmailUnique(body: Object): Promise<ResponseInterface> {
        const _body: string = $.param(body);
        const _header: RequestOptions = GetHeaderWithUser(this._userModel.TokenValue);

        return this._http
            .post(URLConfig.Auth + 'user/email/unique', _body, _header)
            .toPromise()
            .then(response => response.json())
            .then(response => response)
            .catch(error => error);
    }

    PostEmailUpdate(body: Object): Promise<ResponseInterface> {
        const _body: string = $.param(body);
        const _header: RequestOptions = GetHeaderWithUser(this._userModel.TokenValue);

        return this._http
            .post(URLConfig.Auth + 'user/email/update', _body, _header)
            .toPromise()
            .then(response => response.json())
            .then(response => response)
            .catch(error => error);
    }

    PostEmailConfirm(body: Object): Promise<ResponseInterface> {
        const _body: string = $.param(body);
        const _header: RequestOptions = GetHeaderWithUser(this._userModel.TokenValue);

        return this._http
            .post(URLConfig.Auth + 'user/email/confirm', _body, _header)
            .toPromise()
            .then(response => response.json())
            .then(response => response)
            .catch(error => error);
    }

    PostNameUpdate(body: Object): Promise<ResponseInterface> {
        const _body: string = $.param(body);
        const _header: RequestOptions = GetHeaderWithUser(this._userModel.TokenValue);

        return this._http
            .post(URLConfig.Auth + 'user/name/update', _body, _header)
            .toPromise()
            .then(response => response.json())
            .then(response => response)
            .catch(error => error);
    }

    PostPasswordUpdate(body: Object): Promise<ResponseInterface> {
        const _body: string = $.param(body);
        const _header: RequestOptions = GetHeaderWithUser(this._userModel.TokenValue);

        return this._http
            .post(URLConfig.Auth + 'user/password/update', _body, _header)
            .toPromise()
            .then(response => response.json())
            .then(response => response)
            .catch(error => error);
    }

    GetContacts(): Promise<ResponseInterface> {
        const _header: RequestOptions = GetHeader();

        return this._http
            .get('http://127.0.0.1:8000/api/v1/contact?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvdXNlci9zaWduaW4iLCJpYXQiOjE1MTEyMTMwOTQsImV4cCI6MTUxMTIzNDY5NCwibmJmIjoxNTExMjEzMDk0LCJqdGkiOiJGM0cyVzd4Y0UzbDVmcGx6Iiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.IOPtVTKcYVCdnzzp-6pkU8eGVzEjcbPXd8qe7V8LDwY', _header)
            .toPromise()
            .then(response => response.json())
            .then(response => response)
            .catch(error => error);

    }
}
