import { MessageTypeEnum } from '../../language.enums';

import { GlobalBasicMessagesInterface, GlobalEmailMessagesInterface } from './global.interfaces';

// basic

export const GlobalBasicMessages: GlobalBasicMessagesInterface = {
	Success: {
		show: false,
		name: 'global-basic-success',
		type: MessageTypeEnum.Success,
		body: 'Successfully processed your request'
	},
	Error: {
		show: false,
		name: 'global-basic-error',
		type: MessageTypeEnum.Error,
		body: 'Error processing your request'
	},
	Server: {
		show: false,
		name: 'global-basic-server',
		type: MessageTypeEnum.Error,
		body: 'Unable to reach server'
	}
};

// email

export const GlobalEmailMessages: GlobalEmailMessagesInterface = {
	ConfirmCheck: {
		show: false,
		name: 'global-email-confirm-check',
		type: MessageTypeEnum.Warning,
		body: 'Please confirm your email.'
	},
	ConfirmSendError: {
		show: false,
		name: 'global-email-confirm-send-error',
		type: MessageTypeEnum.Error,
		body: 'Error sending confirmation email.'
	},
	ConfirmSendSuccessful: {
		show: false,
		name: 'global-email-confirm-send-successful',
		type: MessageTypeEnum.Success,
		body: 'Confirmation email sent.'
	}
};
