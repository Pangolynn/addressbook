import { Directive, OnChanges, Input, Output, HostBinding, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
	selector: '[cngActive][routerLink]'
})
export class ActiveDirective implements OnChanges {

	@Input()
	link: string;

	@Output()
	linkChange: EventEmitter<string> = new EventEmitter<string>();

	@HostBinding('class.active') classes = '';

	constructor(private _router: Router) {}

	ngOnChanges() {
		if (this._router.url === this.link[0]) {
			this.classes = 'active';
		} else {
			this.classes = '';
		}
	}

}
