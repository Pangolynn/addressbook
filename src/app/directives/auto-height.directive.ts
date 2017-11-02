declare let $: any;

import { Directive, HostListener, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Directive({
	selector: '[cngAutoHeight]'
})
export class AutoHeightDirective {

	@Input()
	cngAutoHeight: string;

	@Output()
	cngAutoHeightChange: EventEmitter<any> = new EventEmitter<any>();

	//

	private el: ElementRef;

	constructor(_el: ElementRef) {
		this.el = _el;
	}

	@HostListener('focus')
	focus() {
		this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
	}

	@HostListener('change')
	change() {
		this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
 	}

	@HostListener('cut')
	cut() {
		this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
	}

	@HostListener('paste')
	paste() {
		this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
	}

	@HostListener('drop')
	drop() {
		this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
	}

	@HostListener('keyup', ['$event'])
	keydown(event) {
		if (event.keyCode === 8 || event.keyCode === 46) {
			this.el.nativeElement.style.height = 'auto';
		}

		this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
	}
}