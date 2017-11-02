declare let jwt_decode: any;

import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { ValidatorRuleEnum } from '../../services/core/validator/validator.enums';
import { FormField, FormGroup } from '../../services/core/validator/form.classes';

import { UserSignedInEvent } from '../../models/user/user.variables';
import { UserModel } from '../../models/user/user.classes';

import { ResultInterface } from '../../services/api/_shared/shared.interfaces';
import { ResultSignInDecodedInterface } from '../../services/api/account/account.interfaces';
import { AccountAPI } from '../../services/api/account/account.classes';

@Component({
	selector: 'sign-in',
	templateUrl: './sign-in.component.html',
	encapsulation: ViewEncapsulation.Emulated,
	styleUrls: [
		'./sign-in.component.css'
	]
})
export class SignInComponent {

	// options

	private isError: boolean;
	private isLoading: boolean;

	// form

	private email: FormField;
	private password: FormField;

	//

	constructor(
		private router: Router,
		private accountAPI: AccountAPI,
		private userModel: UserModel,
		private form: FormGroup
	) {
		this._init();
		this._formInit();
	}

	// func

	submit() {
		if (this.isLoading === true) {
			return;
		}

		this.isError = false;
		this.isLoading = true;

		this.accountAPI.PostSignIn({
			email: this.email.value,
			password: this.password.value
		}).then((response) => {
			let _result: ResultInterface = response.result;

			if (response.success === true && _result.code === 1) {
				let _decoded: ResultSignInDecodedInterface = jwt_decode(_result.data);

				this.userModel.UserID = _decoded.jti;
				this.userModel.UserName = _decoded.name;
				this.userModel.UserConfirmed = _decoded.confirmed;
				this.userModel.TokenValue = _result.data;

				if (this.userModel.IsLoggedIn() === true) {
					UserSignedInEvent.next(true);
					this.router.navigate(['/dashboard']).catch(() => {});
				}
			}

			this.isError = true;
			this.isLoading = false;
		}).catch(() => {
			this.isError = true;
			this.isLoading = false;
		});
	}

	// func : internal

	_init() {
		this.isError = false;
		this.isLoading = false;
	}

	_formInit() {
		this.email = new FormField('email', 'Email', null, [
			{ name: ValidatorRuleEnum.Required, options: [] },
		]);

		this.password = new FormField('password', 'Password', null, [
			{ name: ValidatorRuleEnum.Required, options: [] },
		]);

		this.form.SetFields([ this.email, this.password ]);
		this.form.SetParent();
	}

}
