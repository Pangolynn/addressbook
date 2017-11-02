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
export class DashboardAPI {

	constructor(private _http: InterceptorService, private _userModel: UserModel) {}

    GetTest(): Promise<ResponseInterface> {
		let _header: RequestOptions = GetHeaderWithUser(this._userModel.TokenValue);

		return this._http
			.get(URLConfig.Auth + 'dashboard/test', _header)
			.toPromise()
			.then(response => response.json())
			.then(response => response)
			.catch(error => error);
	}

}