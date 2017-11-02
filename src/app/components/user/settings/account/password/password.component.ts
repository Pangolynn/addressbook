import { Component, ViewEncapsulation } from '@angular/core';

import { MessageInterface, MessagesInterface } from '../../../../../services/core/language/langauge.interfaces';
import { MessageNull } from '../../../../../services/core/language/language.variables';
import { LanguageService } from '../../../../../services/core/language/language.classes';

import { ValidatorRuleEnum, ValidatorOptionEnum } from '../../../../../services/core/validator/validator.enums';
import { FormField, FormGroup } from '../../../../../services/core/validator/form.classes';

import { ResultInterface } from '../../../../../services/api/_shared/shared.interfaces';
import { AccountAPI } from '../../../../../services/api/account/account.classes';
import { UserAPI } from '../../../../../services/api/user/user.classes';

@Component({
	selector: 'user-settings-account-password',
	templateUrl: './password.component.html',
	encapsulation: ViewEncapsulation.Emulated,
	styleUrls: [
		'./password.component.css'
	]
})
export class UserSettingsAccountPasswordComponent {

	// options

	private isError: boolean;
	private isLoading: boolean;
	private isActive: boolean;

	// form

	private form: FormGroup;
	private inputPassword: FormField;
	private inputPasswordNew: FormField;
	private inputPasswordNewConfirm: FormField;

	// message

	private messages: MessagesInterface = LanguageService.GetMessages('en');
	private message: MessageInterface = MessageNull;

	constructor(
		private accountAPI: AccountAPI,
		private userAPI: UserAPI
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

		this.userAPI.PostPasswordUpdate({
			password: this.inputPassword.value,
			passwordNew: this.inputPasswordNew.value,
			passwordNewConfirm: this.inputPasswordNewConfirm.value
		}).then(response => {
			let _result: ResultInterface = response.result;

			if (response.success === true && _result.code === 1) {
				this.message = this.messages.User.PasswordUpdateSuccess;
				this.message.show = true;

				this._init();
				this._formInit();
			} else {
				this.message = this.messages.User.PasswordUpdateError;
				this.message.show = true;
			}

			this.isLoading = false;
			this.isError = true;
		}).catch(() => {
			this.message = this.messages.User.PasswordUpdateError;
			this.message.show = true;

			this.isLoading = false;
			this.isError = true;
		});
	}

	// func : toggle

	toggleActive(data: boolean) {
		this.isActive = data;
		this.message.show = false;

		if (data === false) {
			this._formInit();
		}
	}

	// func : internal

	_init() {
		this.isError = false;
		this.isLoading = false;
		this.isActive = false;
	}

	_formInit() {
		this.form = new FormGroup(this.accountAPI);

		this.inputPassword = new FormField('password', 'Password', null, [
			{ name: ValidatorRuleEnum.Required, options: [] },
		]);

		this.inputPasswordNew = new FormField('passwordNew', 'New Password', null, [
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
					{ name: ValidatorOptionEnum.CompareTo, value: 'passwordNewConfirm' }
				]
			}
		]);

		this.inputPasswordNewConfirm = new FormField('passwordNewConfirm', 'Confirm New Password', null, [
			{ name: ValidatorRuleEnum.Required, options: [] },
			{
				name: ValidatorRuleEnum.ConfirmFor,
				options: [
					{ name: ValidatorOptionEnum.CompareTo, value: 'passwordNew' }
				]
			}
		]);

		this.form.SetFields([ this.inputPassword, this.inputPasswordNew, this.inputPasswordNewConfirm ]);
		this.form.SetParent();
	}

}
