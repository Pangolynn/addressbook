import { Injectable } from '@angular/core';

import { StorageConfig } from '../../../configs/storage.config';

@Injectable()
export class StorageService {

	private storage: any;
	private name: string = StorageConfig.Name;
	private type: string = StorageConfig.Type;

	constructor() {
		this.storage = this._selectEngine(this.type);
	}

	// func : public

	public Save(key, data) {
		let _key  = this.name + '.' + key;
		let _data = null;

		if (typeof data === 'object' || Array.isArray(data) === true) {
			_data = JSON.stringify(data);
		} else {
			_data = data;
		}

		return this.storage.setItem(_key, _data);
	}

	public Get(key) {
		let _key  = this.name + '.' + key;
		let _data = this.storage.getItem(_key);

		try {
			return JSON.parse(_data);
		} catch (e) {
			return _data;
		}
	}

	public Destroy(key) {
		let _key = this.name + '.' + key;

		return this.storage.removeItem(_key);
	}

	// func : private

	private _selectEngine(type: string) {
		if (type === 'local') {
			if ('localStorage' in window && window.localStorage !== null) {
				return localStorage;
			}

			throw new Error('Local Storage is disabled or unavailable.');
		} else if (type === 'session') {
			if ('sessionStorage' in window && window.sessionStorage !== null) {
				return sessionStorage;
			}

			throw new Error('Session Storage is disabled or unavailable.');
		}

		throw new Error('Invalid storage type specified: ' + type);
	}
}
