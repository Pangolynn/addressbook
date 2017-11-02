declare let $: any;

import 'rxjs/add/operator/toPromise';

import { InterceptorService } from 'ng2-interceptors';

import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';

import { URLConfig } from '../../../configs/url.config';

import { UserModel } from '../../../models/user/user.classes';

import { ResponseInterface } from '../_shared/shared.interfaces';
import { GetHeaderWithUser } from '../_shared/shared.functions';

@Injectable()
export class UserAPI {

	constructor(private _http: InterceptorService, private _userModel: UserModel) {}

    PostAccountConfirm(body: Object): Promise<ResponseInterface> {
		let _body: string = $.param(body);
		let _header: RequestOptions = GetHeaderWithUser(this._userModel.TokenValue);

		return this._http
			.post(URLConfig.Auth + 'user/account/confirm', _body, _header)
			.toPromise()
			.then(response => response.json())
			.then(response => response)
			.catch(error => error);
	}

    PostAccountConfirmResend(body: Object): Promise<ResponseInterface> {
		let _body: string = $.param(body);
		let _header: RequestOptions = GetHeaderWithUser(this._userModel.TokenValue);

		return this._http
			.post(URLConfig.Auth + 'user/account/confirm/resend', _body, _header)
			.toPromise()
			.then(response => response.json())
			.then(response => response)
			.catch(error => error);
	}

    PostEmailUpdate(body: Object): Promise<ResponseInterface> {
		let _body: string = $.param(body);
		let _header: RequestOptions = GetHeaderWithUser(this._userModel.TokenValue);

		return this._http
			.post(URLConfig.Auth + 'user/email/update', _body, _header)
			.toPromise()
			.then(response => response.json())
			.then(response => response)
			.catch(error => error);
	}

	PostEmailConfirm(body: Object): Promise<ResponseInterface> {
		let _body: string = $.param(body);
		let _header: RequestOptions = GetHeaderWithUser(this._userModel.TokenValue);

		return this._http
			.post(URLConfig.Auth + 'user/email/confirm', _body, _header)
			.toPromise()
			.then(response => response.json())
			.then(response => response)
			.catch(error => error);
	}

	PostNameUpdate(body: Object): Promise<ResponseInterface> {
		let _body: string = $.param(body);
		let _header: RequestOptions = GetHeaderWithUser(this._userModel.TokenValue);

		return this._http
			.post(URLConfig.Auth + 'user/name/update', _body, _header)
			.toPromise()
			.then(response => response.json())
			.then(response => response)
			.catch(error => error);
	}

	PostPasswordUpdate(body: Object): Promise<ResponseInterface> {
		let _body: string = $.param(body);
		let _header: RequestOptions = GetHeaderWithUser(this._userModel.TokenValue);

		return this._http
			.post(URLConfig.Auth + 'user/password/update', _body, _header)
			.toPromise()
			.then(response => response.json())
			.then(response => response)
			.catch(error => error);
	}

}