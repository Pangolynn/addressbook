import { MessageTypeEnum } from './language.enums';
import { MessageInterface, MessagesInterface } from './langauge.interfaces';

import { GlobalBasicMessages, GlobalEmailMessages } from './en/messages/global.variables';
import { UserMessages } from './en/messages/user.variables';

export const EnMessages: MessagesInterface = {
	GlobalBasic: GlobalBasicMessages,
	GlobalEmail: GlobalEmailMessages,
	User: UserMessages
};

//

export const MessageNull: MessageInterface = {
	show: false,
	name: null,
	type: MessageTypeEnum.None,
	body: null
};
