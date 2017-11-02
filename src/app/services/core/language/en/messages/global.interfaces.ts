import { MessageInterface } from '../../langauge.interfaces';

export interface GlobalBasicMessagesInterface {
	Success: MessageInterface;
	Error: MessageInterface;
	Server: MessageInterface;
}

export interface GlobalEmailMessagesInterface {
	ConfirmCheck: MessageInterface;
	ConfirmSendError: MessageInterface;
	ConfirmSendSuccessful: MessageInterface;
}