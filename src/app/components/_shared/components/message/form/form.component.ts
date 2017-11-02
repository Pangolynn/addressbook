import { Component, ViewEncapsulation, EventEmitter, Input, Output, DoCheck } from '@angular/core';

import { MessageInterface } from '../../../../../services/core/language/langauge.interfaces';
import { MessageNull } from '../../../../../services/core/language/language.variables';

@Component({
	selector: 'message-form',
	templateUrl: './form.component.html',
	encapsulation: ViewEncapsulation.Emulated,
	styleUrls: [
		'./form.component.css'
	]
})
export class MessageFormComponent implements DoCheck {

    // binding

    public _message: MessageInterface = MessageNull;

    @Output()
    cngMessageChange: EventEmitter<MessageInterface> = new EventEmitter<MessageInterface>();

    @Input()
    get cngMessage(): MessageInterface {
        return this._message;
    }

    set cngMessage(data: MessageInterface) {
        this._message = data;
        this.cngMessageChange.next(this._message);
    }

    //

    private messageTimeout: any = null;

    constructor() {}

    ngDoCheck() {
        if (this.cngMessage.show === true && this.messageTimeout === null) {
            this.messageTimeout = setTimeout(() => {
                this.messageTimeout = null;
                this.cngMessage = MessageNull;
            }, 4000);
        }
    }

    // func : toggle

	toggle() {
        this.messageTimeout = null;
        this.cngMessage = MessageNull;
	}

}
