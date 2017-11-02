import { Component, ViewEncapsulation, EventEmitter, OnInit, OnDestroy } from '@angular/core';

import { UserModel } from '../../../../../models/user/user.classes';

import { MessageInterface, MessagesInterface } from '../../../../../services/core/language/langauge.interfaces';
import { MessageNull } from '../../../../../services/core/language/language.variables';
import { LanguageService } from '../../../../../services/core/language/language.classes';

import { MessengerGlobalEvent } from '../../../../../services/core/messenger/messenger.variables';

import { ResultInterface } from '../../../../../services/api/_shared/shared.interfaces';
import { UserAPI } from '../../../../../services/api/user/user.classes';

@Component({
    selector: 'message-global',
	templateUrl: './global.component.html',
	encapsulation: ViewEncapsulation.Emulated,
    styleUrls: [
        './global.component.css'
    ]
})
export class MessageGlobalComponent implements OnInit, OnDestroy {

	// events

	private subscribeMessengerGlobal: EventEmitter<MessageInterface>;

	//

	private messages: MessagesInterface = LanguageService.GetMessages('en');
	private message: MessageInterface = MessageNull;

	private showEmailConfirm: boolean = false;
	private show: boolean = false;

	constructor(
		private userAPI: UserAPI,
		private userModel: UserModel
	) {
        this.message.show = false;
	}

	ngOnInit() {
		this.subscribeMessengerGlobal = MessengerGlobalEvent.subscribe((data) => {
			this.message = data;

			if (data.name === null) {
				return;
			}

			this.message.show = true;
			this.showEmailConfirm = this.message.name === 'global-email-confirm-check';
        });
	}

	ngOnDestroy() {
		this.subscribeMessengerGlobal.unsubscribe();
	}

	// func

	emailConfirmSend() {
		if (this.userModel.UserConfirmed === false) {
			this.userAPI.PostAccountConfirmResend({}).then(response => {
				let _result: ResultInterface = response.result;

				if (response.success === true && _result.code === 1) {
					MessengerGlobalEvent.next(this.messages.GlobalEmail.ConfirmSendSuccessful);
				} else {
					MessengerGlobalEvent.next(this.messages.GlobalEmail.ConfirmSendError);
				}
			}).catch(() => {
				MessengerGlobalEvent.next(this.messages.GlobalEmail.ConfirmSendError);
			});
		} else {
			MessengerGlobalEvent.next(this.messages.GlobalEmail.ConfirmSendError);
		}
	}

	// func : toggle

	toggle() {
        this.message.show = ! this.message.show;
	}

}
