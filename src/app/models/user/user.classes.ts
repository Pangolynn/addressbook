import { Injectable } from '@angular/core';

import { StorageService } from '../../services/core/storage/storage.classes';

import { UserInterface, UserTokenInterface } from './user.interfaces';
import { UserNull, UserTokenNull } from './user.variables';

@Injectable()
export class UserModel {

    constructor(private _storageService: StorageService) {
        const _user = <UserInterface>this._storageService.Get('user');
        const _token = <UserTokenInterface>this._storageService.Get('token');

        if (typeof _user === 'undefined' || typeof _token === 'undefined' || _user === null || _token === null) {
            this._storageService.Save('user', UserNull);
            this._storageService.Save('token', UserTokenNull);
        }
    }

    set User(data: UserInterface) {
        this._storageService.Save('user', data);
    }

    set UserID(data: string) {
        const _user = <UserInterface>this._storageService.Get('user');
        _user.id = data;

        this._storageService.Save('user', _user);
    }

    set UserName(data: string) {
        const _user = <UserInterface>this._storageService.Get('user');
        _user.name = data;

        this._storageService.Save('user', _user);

    }

    set UserConfirmed(data: boolean) {
        const _user = <UserInterface>this._storageService.Get('user');
        _user.confirmed = data;

        this._storageService.Save('user', _user);
    }

    set Token(data: UserTokenInterface) {
        this._storageService.Save('token', data);
    }

    set TokenValue(data: string) {
        const _token = <UserTokenInterface>this._storageService.Get('token');
        _token.value = data;

        this._storageService.Save('token', _token);
    }

    get User() {
        return <UserInterface>this._storageService.Get('user');
    }

    get UserID() {
        const _user = <UserInterface>this._storageService.Get('user');

        return _user.id;
    }

    get UserName() {
        const _user = <UserInterface>this._storageService.Get('user');

        return _user.name;
    }

    get UserConfirmed() {
        const _user = <UserInterface>this._storageService.Get('user');

        return _user.confirmed;
    }

    get Token() {
        return <UserTokenInterface>this._storageService.Get('token');
    }

    get TokenValue() {
        const _token = <UserTokenInterface>this._storageService.Get('token');

        return _token.value;
    }

    public IsLoggedIn() {
        if (this.UserID !== null && this.TokenValue !== null) {
            return true;
        } else {
            return false;
        }
    }

    public Logout() {
        this._storageService.Save('user', UserNull);
        this._storageService.Save('token', UserTokenNull);
    }

}
