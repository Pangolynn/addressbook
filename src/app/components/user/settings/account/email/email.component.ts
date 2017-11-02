import { InterceptorService } from 'ng2-interceptors';

import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { MessageInterface, MessagesInterface } from '../../../../../services/core/language/langauge.interfaces';
import { MessageNull } from '../../../../../services/core/language/language.variables';
import { LanguageService } from '../../../../../services/core/language/language.classes';

import { ValidatorRuleEnum } from '../../../../../services/core/validator/validator.enums';
import { FormField, FormGroup } from '../../../../../services/core/validator/form.classes';

import { ResultInterface } from '../../../../../services/api/_shared/shared.interfaces';
import { AccountAPI } from '../../../../../services/api/account/account.classes';
import { UserAPI } from '../../../../../services/api/user/user.classes';

@Component({
	selector: 'user-settings-account-email',
	templateUrl: './email.component.html',
	encapsulation: ViewEncapsulation.Emulated,
	styleUrls: [
		'./email.component.css'
	]
})
export class UserSettingsAccountEmailComponent implements OnInit {

	// options

	private isError: boolean;
	private isLoading: boolean;
	private isActive: boolean;

	// form

	private form: FormGroup;
	private inputEmail: FormField;

	// message

	private messages: MessagesInterface = LanguageService.GetMessages('en');
	private message: MessageInterface = MessageNull;

	constructor(
		private accountAPI: AccountAPI,
		private userAPI: UserAPI
	) {
	}

	ngOnInit() {
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

		this.userAPI.PostEmailUpdate({
			email: this.inputEmail.value
		}).then(response => {
			let _result: ResultInterface = response.result;

			if (response.success === true && _result.code === 1) {
				this.message = this.messages.User.EmailUpdateSuccess;
				this.message.show = true;

				this._init();
				this._formInit();
			} else {
				this.message = this.messages.User.EmailUpdateError;
				this.message.show = true;
			}

			this.isLoading = false;
			this.isError = true;
		}).catch(() => {
			this.message = this.messages.User.EmailUpdateError;
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

		this.inputEmail = new FormField('email', 'Email', null, [
			{ name: ValidatorRuleEnum.Required, options: [] },
			{ name: ValidatorRuleEnum.Email, options: [] },
			{ name: ValidatorRuleEnum.EmailUnique, options: [] }
		]);

		this.form.SetFields([ this.inputEmail ]);
		this.form.SetParent();
	}

}
