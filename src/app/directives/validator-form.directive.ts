import { Directive, EventEmitter, Input, Output, OnChanges } from '@angular/core';

import { FormGroup } from '../services/core/validator/form.classes';

@Directive({
	selector: '[cngValidatorForm]'
})
export class ValidatorFormDirective implements OnChanges {

	@Input()
	cngValidatorForm: FormGroup;

	@Output()
	cngValidatorFormChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

	//

	constructor() {}

	ngOnChanges() {
		this.cngValidatorForm.Validate();
		this.cngValidatorFormChange.emit(this.cngValidatorForm);
	}

}
