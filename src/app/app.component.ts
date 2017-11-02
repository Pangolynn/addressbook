declare let $: any;

import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { UserSignedInEvent } from './models/user/user.variables';
import { UserModel } from './models/user/user.classes';

import { MessagerService } from './services/core/messenger/messenger.classes';

@Component({
	selector: 'irissa',
	templateUrl: './app.component.html',
	styleUrls: [
		'./app.component.css'
	],
	encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {

	//

	private isSignedIn: boolean = false;

	constructor(
		private router: Router,
		private userModel: UserModel,
		private messagerService: MessagerService
	) {
		this.isSignedIn = userModel.IsLoggedIn();

		router.events.subscribe((data) => {
			if (data instanceof NavigationEnd) {
				this.messagerService.CheckGlobal();
			}
		});

		UserSignedInEvent.subscribe(() => {
			this.isSignedIn = userModel.IsLoggedIn();
		});
	}
}
