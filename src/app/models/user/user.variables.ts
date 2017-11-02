import { EventEmitter } from '@angular/core';

import { UserInterface, UserTokenInterface } from './user.interfaces';

// events

export let UserSignedInEvent: EventEmitter<boolean> = new EventEmitter();

// null

export let UserNull: UserInterface = {
	id: null,
	name: null,
	confirmed: null
};

export let UserTokenNull: UserTokenInterface = {
	value: null
};
