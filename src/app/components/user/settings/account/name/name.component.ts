import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { UserModel } from '../../../../../models/user/user.classes';

import { MessageInterface, MessagesInterface } from '../../../../../services/core/language/langauge.interfaces';
import { MessageNull } from '../../../../../services/core/language/language.variables';
import { LanguageService } from '../../../../../services/core/language/language.classes';

import { ValidatorRuleEnum } from '../../../../../services/core/validator/validator.enums';
import { FormField, FormGroup } from '../../../../../services/core/validator/form.classes';

import { ResultInterface } from '../../../../../services/api/_shared/shared.interfaces';
import { AccountAPI } from '../../../../../services/api/account/account.classes';
import { UserAPI } from '../../../../../services/api/user/user.classes';

@Component({
	selector: 'user-settings-account-name',
	templateUrl: './name.component.html',
	encapsulation: ViewEncapsulation.Emulated,
	styleUrls: [
		'./name.component.css'
	]
})
export class UserSettingsAccountNameComponent implements OnInit {

	// options

	private isError: boolean;
	private isLoading: boolean;
	private isActive: boolean;

	// form

	private form: FormGroup;
	private inputName: FormField;

	// message

	private messages: MessagesInterface = LanguageService.GetMessages('en');
	private message: MessageInterface = MessageNull;

	constructor(
		private userModel: UserModel,
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

		this.userAPI.PostNameUpdate({
			name: this.inputName.value
		}).then(response => {
			let _result: ResultInterface = response.result;

			if (response.success === true && _result.code === 1) {
				this.userModel.UserName = this.inputName.value;
				this.message = this.messages.User.NameUpdateSuccess;
				this.message.show = true;

				this._init();
				this._formInit();
			} else {
				this.message = this.messages.User.NameUpdateError;
				this.message.show = true;
			}

			this.isLoading = false;
			this.isError = true;
		}).catch(() => {
			this.message = this.messages.User.NameUpdateError;
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

		this.inputName = new FormField('name', 'Name', this.userModel.UserName, [
			{ name: ValidatorRuleEnum.Required, options: [] },
		]);

		this.form.SetFields([ this.inputName ]);
		this.form.SetParent();
	}

}
