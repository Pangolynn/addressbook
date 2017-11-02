import { MessageTypeEnum } from '../../language.enums';

import { UserMessagesInterface } from './user.interfaces';

// user

export const UserMessages: UserMessagesInterface = {
	ConfirmAccountError: {
		show: false,
		name: 'user-confirm-account-error',
		type: MessageTypeEnum.Error,
		body: 'Unable to confirm your account.'
	},
	ConfirmAccountSuccess: {
		show: false,
		name: 'user-confirm-account-success',
		type: MessageTypeEnum.Success,
		body: 'Successfully confirmed your account.'
	},
	ConfirmEmailError: {
		show: false,
		name: 'user-confirm-email-error',
		type: MessageTypeEnum.Error,
		body: 'Unable to confirm your email.'
	},
	ConfirmEmailSuccess: {
		show: false,
		name: 'user-confirm-email-success',
		type: MessageTypeEnum.Success,
		body: 'Successfully confirmed your email.'
	},
	EmailUpdateSuccess: {
		show: false,
		name: 'user-email-update-success',
		type: MessageTypeEnum.Success,
		body: 'Please follow the confirmation link in your email to confirm your new email.'
	},
	EmailUpdateError: {
		show: false,
		name: 'user-email-update-error',
		type: MessageTypeEnum.Error,
		body: 'Unable to update your email.'
	},
	NameUpdateSuccess: {
		show: false,
		name: 'user-name-update-success',
		type: MessageTypeEnum.Success,
		body: 'Successfully updated your name.'
	},
	NameUpdateError: {
		show: false,
		name: 'user-name-update-error',
		type: MessageTypeEnum.Error,
		body: 'Unable to update your name.'
	},
	PasswordUpdateSuccess: {
		show: false,
		name: 'user-password-update-success',
		type: MessageTypeEnum.Success,
		body: 'Successfully updated your password.'
	},
	PasswordUpdateError: {
		show: false,
		name: 'user-password-update-error',
		type: MessageTypeEnum.Error,
		body: 'Unable to update your password.'
	}
};
