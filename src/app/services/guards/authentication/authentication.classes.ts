import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { UserModel } from '../../../models/user/user.classes';

@Injectable()
export class AuthenticationGuard implements CanActivate {

	constructor(
		private _router: Router,
		private _userModel: UserModel
	) {}

	canActivate() {
		if (this._userModel.IsLoggedIn() === true) {
			return true;
		}

		this._router.navigate(['/']);
	}

}
