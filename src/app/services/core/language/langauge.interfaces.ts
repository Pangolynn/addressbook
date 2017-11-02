import { MessageTypeEnum } from './language.enums';
import { GlobalBasicMessagesInterface, GlobalEmailMessagesInterface } from './en/messages/global.interfaces';
import { UserMessagesInterface } from './en/messages/user.interfaces';

export interface MessageInterface {
	show: boolean;
	name: string;
	type: MessageTypeEnum;
	body: string;
}

export interface LabelInterface {
	show: boolean;
	name: string;
	body: string;
}

export interface MessagesInterface {
	GlobalBasic: GlobalBasicMessagesInterface;
	GlobalEmail: GlobalEmailMessagesInterface;
	User: UserMessagesInterface;
}