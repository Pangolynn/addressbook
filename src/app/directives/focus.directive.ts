declare let $: any;

import { Directive, Input, HostListener } from '@angular/core';

@Directive({
	selector: '[cngFocus]'
})
export class FocusDirective {

	@Input()
	cngFocus: string;

	constructor() {
	}

	@HostListener('click', ['$event'])
	click() {
		$('#' + this.cngFocus).focus();

		setTimeout(() => {
			$('#' + this.cngFocus).focus();
		}, 50);
	}

}
