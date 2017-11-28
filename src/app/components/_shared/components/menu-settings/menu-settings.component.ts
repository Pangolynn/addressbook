declare var $: any;

import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { UserModel } from '../../../../models/user/user.classes';

@Component({
	selector: 'menu-settings',
	templateUrl: './menu-settings.component.html',
	styleUrls: [
		'./menu-settings.component.css',
		'../../../../app.component.css'
	]
})
export class MenuSettingsComponent {

	hideMenu: boolean = true;

    constructor(
        private _router: Router,
        private _userModel: UserModel
    ) {
		$(window).click(() => {
            this.hideMenu = true;
        });
    }


	// func

	logout() {
        this._userModel.Logout();

        this._router.navigate(['/']);
	}
}
