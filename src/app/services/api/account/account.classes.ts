declare let $: any;

import 'rxjs/add/operator/toPromise';

import { InterceptorService } from 'ng2-interceptors';

import { Inject, Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';

import { URLConfig } from '../../../configs/url.config';

import { ResponseInterface } from '../_shared/shared.interfaces';
import { GetHeader } from '../_shared/shared.functions';

@Injectable()
export class AccountAPI {

	constructor(@Inject(InterceptorService) private _http) {}

	PostCreateAccount(body: Object): Promise<ResponseInterface> {
		let _body: string = $.param(body);
		let _header: RequestOptions = GetHeader();

		return this._http
			.post(URLConfig.Auth + 'account/create', _body, _header)
			.toPromise()
			.then(response => response.json())
			.then(response => response)
			.catch(error => error);
	}

	PostSignIn(body: Object): Promise<ResponseInterface> {
		let _body: string = $.param(body);
		let _header: RequestOptions = GetHeader();

		return this._http
			.post(URLConfig.Auth + 'account/sign-in', _body, _header)
			.toPromise()
			.then(response => response.json())
			.then(response => response)
			.catch(error => error);
	}

	async PostEmailUnique(body: Object): Promise<ResponseInterface> {
		let _body: string = $.param(body);
		let _header: RequestOptions = GetHeader();
		let _response: any;

		try {
			_response = await this._http
				.post(URLConfig.Auth + 'account/email/unique', _body, _header)
				.toPromise();

			return _response.json();
		} catch (error) {
			return error;
		}
	}

	PostPasswordForgot(body: Object): Promise<ResponseInterface> {
		let _body: string = $.param(body);
		let _header: RequestOptions = GetHeader();

		return this._http
			.post(URLConfig.Auth + 'account/password/forgot', _body, _header)
			.toPromise()
			.then(response => response.json())
			.then(response => response)
			.catch(error => error);
	}

	PostPasswordChange(body: Object): Promise<ResponseInterface> {
		let _body: string = $.param(body);
		let _header: RequestOptions = GetHeader();

		return this._http
			.post(URLConfig.Auth + 'account/password/change', _body, _header)
			.toPromise()
			.then(response => response.json())
			.then(response => response)
			.catch(error => error);
	}

}
