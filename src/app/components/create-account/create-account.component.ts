import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { ValidatorRuleEnum, ValidatorOptionEnum } from '../../services/core/validator/validator.enums';
import { FormField, FormGroup } from '../../services/core/validator/form.classes';

import { ResultInterface } from '../../services/api/_shared/shared.interfaces';
import { AccountAPI } from '../../services/api/account/account.classes';

@Component({
	selector: 'create-account',
	templateUrl: './create-account.component.html',
	encapsulation: ViewEncapsulation.Emulated,
	styleUrls: [
		'./create-account.component.css'
	]
})
export class CreateAccountComponent {

	// options

	private isError: boolean;
	private isLoading: boolean;

	// form

	private name: FormField;
	private email: FormField;
	private password: FormField;
	private passwordConfirm: FormField;

	//

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

		this.isError = false;
		this.isLoading = true;

		this.accountAPI.PostCreateAccount({
			name: this.name.value,
			email: this.email.value,
			password: this.password.value,
			passwordConfirm: this.passwordConfirm.value
		}).then((response) => {
			let _result: ResultInterface = response.result;

			if (response.success === true && _result.code === 1) {
				this.router.navigate(['/sign-in']).catch(() => {});
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
		this.name = new FormField('name', 'Name', null, [
			{ name: ValidatorRuleEnum.Required, options: [] }
		]);

		this.email = new FormField('email', 'Email', null, [
			{ name: ValidatorRuleEnum.Required, options: [] },
			{ name: ValidatorRuleEnum.Email, options: [] },
			{ name: ValidatorRuleEnum.EmailUnique, options: [] }
		]);

		this.password = new FormField('password', 'Password', null, [
			{ name: ValidatorRuleEnum.Required, options: [] },
			{
				name: ValidatorRuleEnum.LengthBetween,
				options: [
					{ name: ValidatorOptionEnum.Min, value: 6 },
					{ name: ValidatorOptionEnum.Max, value: 12 }
				]
			},
			{
				name: ValidatorRuleEnum.Confirm,
				options: [
					{ name: ValidatorOptionEnum.CompareTo, value: 'passwordConfirm' }
				]
			}
		]);

		this.passwordConfirm = new FormField('passwordConfirm', 'Confirm Password', null, [
			{ name: ValidatorRuleEnum.Required, options: [] },
			{
				name: ValidatorRuleEnum.ConfirmFor,
				options: [
					{ name: ValidatorOptionEnum.CompareTo, value: 'password' }
				]
			}
		]);

		this.form.SetFields([ this.name, this.email, this.password, this.passwordConfirm ]);
		this.form.SetParent();
	}

}
