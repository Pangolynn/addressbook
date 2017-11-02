import { Injectable } from '@angular/core';

import { UserModel } from '../../../models/user/user.classes';

import { MessagesInterface } from '../language/langauge.interfaces';
import { MessageNull } from '../language/language.variables';
import { LanguageService } from '../language/language.classes';

import { MessengerGlobalEvent } from './messenger.variables';

@Injectable()
export class MessagerService {

	//

	private messages: MessagesInterface = LanguageService.GetMessages('en');

	constructor(private userModel: UserModel) {}

	// func : public

	public CheckGlobal() {
		if (this.userModel.UserConfirmed === false) {
			MessengerGlobalEvent.next(this.messages.GlobalEmail.ConfirmCheck);
		} else {
			MessengerGlobalEvent.next(MessageNull);
		}
	}

}
