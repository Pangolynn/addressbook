import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { ValidatorRuleEnum } from '../../services/core/validator/validator.enums';
import { FormField, FormGroup } from '../../services/core/validator/form.classes';

import { ResultInterface } from '../../services/api/_shared/shared.interfaces';
import { AccountAPI } from '../../services/api/account/account.classes';

@Component({
	selector: 'forgot-password',
	templateUrl: './forgot-password.component.html',
	encapsulation: ViewEncapsulation.Emulated,
	styleUrls: [
		'./forgot-password.component.css'
	]
})
export class ForgotPasswordComponent {

	// options

	private isError: boolean;
	private isLoading: boolean;

	// form

	private email: FormField;

	constructor(
		private router: Router,
		private accountAPI: AccountAPI,
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

		this.isLoading = true;
		this.isError = false;

		this.accountAPI.PostPasswordForgot({
			email: this.email.value,
		}).then(response => {
			let _result: ResultInterface = response.result;

			if (response.success === true && _result.code === 1) {
				this.router.navigate(['/sign-in']).catch(() => {});
			}

			this.isLoading = false;
			this.isError = true;
		}).catch(() => {
			this.isLoading = false;
			this.isError = true;
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
			{ name: ValidatorRuleEnum.Email, options: [] }
		]);

		this.form.SetFields([ this.email ]);
		this.form.SetParent();
	}

}
