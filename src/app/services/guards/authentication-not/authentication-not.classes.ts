import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { UserModel } from '../../../models/user/user.classes';

@Injectable()
export class AuthenticationNotGuard implements CanActivate {

	constructor(
		private _router: Router,
		private _userModel: UserModel
	) {}

	canActivate() {
		if (this._userModel.IsLoggedIn() === false) {
			return true;
		}

		this._router.navigate(['/dashboard']);
	}

}
