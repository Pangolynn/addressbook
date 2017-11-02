import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { UserModel } from '../../../../models/user/user.classes';

@Component({
	selector: 'menu-settings',
	templateUrl: './menu-settings.component.html',
	encapsulation: ViewEncapsulation.Emulated,
	styleUrls: [
		'./menu-settings.component.css'
	]
})
export class MenuSettingsComponent {

    constructor(
        private router: Router,
        private userModel: UserModel
    ) {
	}

	// func

	logout() {
		this.userModel.Logout();
		this.router.navigate(['/']).catch(() => {});
	}

}
