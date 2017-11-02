import { Injectable } from '@angular/core';

import { UserSignedInEvent } from './user.variables';

import { StorageService } from '../../services/core/storage/storage.classes';

import { MessageNull } from '../../services/core/language/language.variables';
import { MessengerGlobalEvent } from '../../services/core/messenger/messenger.variables';

import { UserInterface, UserTokenInterface } from './user.interfaces';
import { UserNull, UserTokenNull } from './user.variables';

@Injectable()
export class UserModel {

	constructor(
		private storageService: StorageService
	) {
		let _user = <UserInterface>this.storageService.Get('user');
		let _token = <UserTokenInterface>this.storageService.Get('token');

		if (typeof _user === 'undefined' || typeof _token === 'undefined' || _user === null || _token === null) {
			this.storageService.Save('user', UserNull);
			this.storageService.Save('token', UserTokenNull);
		}
	}

	// set

	set User(data: UserInterface) {
		this.storageService.Save('user', data);
	}

	set UserID(data: number) {
		let _user = <UserInterface>this.storageService.Get('user');
		_user.id = data;

		this.storageService.Save('user', _user);
	}

	set UserName(data: string) {
		let _user = <UserInterface>this.storageService.Get('user');
		_user.name = data;

		this.storageService.Save('user', _user);
	}

	set UserConfirmed(data: boolean) {
		let _user = <UserInterface>this.storageService.Get('user');
		_user.confirmed = data;

		this.storageService.Save('user', _user);
	}

	set Token(data: UserTokenInterface) {
		this.storageService.Save('token', data);
	}

	set TokenValue(data: string) {
		let _token = <UserTokenInterface>this.storageService.Get('token');
		_token.value = data;

		this.storageService.Save('token', _token);
	}

	// get

	get User() {
		return <UserInterface>this.storageService.Get('user');
	}

	get UserID() {
		let _user = <UserInterface>this.storageService.Get('user');

		return _user.id;
	}

	get UserName() {
		let _user = <UserInterface>this.storageService.Get('user');

		return _user.name;
	}

	get UserConfirmed() {
		let _user = <UserInterface>this.storageService.Get('user');

		return _user.confirmed;
	}

	get Token() {
		return <UserTokenInterface>this.storageService.Get('token');
	}

	get TokenValue() {
		let _token = <UserTokenInterface>this.storageService.Get('token');

		return _token.value;
	}

	// func : public

	public IsLoggedIn() {
		return this.UserID !== null && this.TokenValue !== null;
	}

	public Logout() {
		this.storageService.Save('user', UserNull);
		this.storageService.Save('token', UserTokenNull);
		UserSignedInEvent.next(true);
		MessengerGlobalEvent.next(MessageNull);
	}

}
