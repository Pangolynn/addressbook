import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ValidatorRuleEnum, ValidatorOptionEnum } from '../../services/core/validator/validator.enums';
import { FormField, FormGroup } from '../../services/core/validator/form.classes';

import { ResultInterface } from '../../services/api/_shared/shared.interfaces';
import { AccountAPI } from '../../services/api/account/account.classes';

@Component({
	selector: 'change-password',
	templateUrl: './change-password.component.html',
	encapsulation: ViewEncapsulation.Emulated,
	styleUrls: [
		'./change-password.component.css'
	]
})
export class ChangePasswordComponent implements OnInit, OnDestroy {

	// events

	private subscribeParams: any;

	// options

	private isError: boolean;
	private isLoading: boolean;

	// form

	private password: FormField;
	private passwordConfirm: FormField;

	//

	private token: string;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private accountAPI: AccountAPI,
		private form: FormGroup
	) {
		this._init();
		this._formInit();
	}

	ngOnInit() {
        this.subscribeParams = this.activatedRoute.params.subscribe(params => {
			this.token = params['token'];
        });
    }

	ngOnDestroy() {
        this.subscribeParams.unsubscribe();
	}

	// func

	submit() {
		if (this.isLoading === true) {
			return;
		}

		this.isError = false;
		this.isLoading = true;

		this.accountAPI.PostPasswordChange({
			token: this.token,
			password: this.password.value,
			passwordConfirm: this.passwordConfirm.value
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

		this.form.SetFields([ this.password, this.passwordConfirm ]);
		this.form.SetParent();
	}

}
