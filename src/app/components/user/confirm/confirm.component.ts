import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserModel } from '../../../models/user/user.classes';

import { MessageInterface, MessagesInterface } from '../../../services/core/language/langauge.interfaces';
import { MessageNull } from '../../../services/core/language/language.variables';
import { LanguageService } from '../../../services/core/language/language.classes';

import { MessagerService } from '../../../services/core/messenger/messenger.classes';

import { ResultInterface } from '../../../services/api/_shared/shared.interfaces';
import { UserAPI } from '../../../services/api/user/user.classes';


@Component({
    selector: 'user-confirm',
	templateUrl: './confirm.component.html',
	encapsulation: ViewEncapsulation.Emulated,
    styleUrls: [
		'./confirm.component.css'
    ]
})
export class UserConfirmComponent implements OnInit, OnDestroy {

	// events

	private subscribeParams: any;

	// message

	private messages: MessagesInterface = LanguageService.GetMessages('en');
	private message: MessageInterface = MessageNull;

	//

	private token: string;
	private type: string;

	constructor(
		private route: ActivatedRoute,
		private userModel: UserModel,
		private messagerService: MessagerService,
		private userAPI: UserAPI
	) {
	}

	ngOnInit() {
        this.subscribeParams = this.route.params.subscribe(params => {
			this.token = params['token'];
			this.type = params['type'];

			if (this.type === 'account') {
				this.userAPI.PostAccountConfirm({
					token: this.token
				}).then((response) => {
					let _result: ResultInterface = response.result;

					if (response.success === true && _result.code === 1) {
						this.message =  this.messages.User.ConfirmAccountSuccess;
						this.userModel.UserConfirmed = true;
						this.messagerService.CheckGlobal();
					} else {
						this.message = this.messages.User.ConfirmAccountError;
					}
				}).catch(() => {
					this.message = this.messages.User.ConfirmAccountError;
					console.log(this.message);
				});
			} else if (this.type === 'email') {
				this.userAPI.PostEmailConfirm({
					token: this.token
				}).then((response) => {
					let _result: ResultInterface = response.result;

					if (response.success === true && _result.code === 1) {
						this.message =  this.messages.User.ConfirmEmailSuccess;
						this.userModel.UserConfirmed = true;
						this.messagerService.CheckGlobal();
					} else {
						this.message = this.messages.User.ConfirmEmailError;
					}
				}).catch(() => {
					this.message = this.messages.User.ConfirmEmailError;
				});
			}
        });
    }

	ngOnDestroy() {
        this.subscribeParams.unsubscribe();
    }

}
