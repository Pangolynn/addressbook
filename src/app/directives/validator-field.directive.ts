import { Directive, EventEmitter, HostListener, Input, Output, OnChanges } from '@angular/core';

import { FormField } from '../services/core/validator/form.classes';

@Directive({
	selector: '[cngValidatorField]'
})
export class ValidatorFieldDirective implements OnChanges {

	@Input()
	ngModel: string;

	@Input()
	cngValidatorField: FormField;

	@Output()
	cngValidatorFieldChange: EventEmitter<FormField> = new EventEmitter<FormField>();

	//

	value: string;

	constructor() {
		this.value = null;
	}

	@HostListener('focus')
	focus() {
		this.cngValidatorField.Validate();
		this.cngValidatorField.isActive = true;
		this.cngValidatorFieldChange.emit(this.cngValidatorField);
	}

	@HostListener('blur')
	blur() {
		this.cngValidatorField.Validate();
		this.cngValidatorField.isActive = false;
		this.cngValidatorFieldChange.emit(this.cngValidatorField);
	}

	ngOnChanges() {
		if (this.cngValidatorField.value === this.value) {
			return;
		}

		this.cngValidatorField.Validate();

		this.value = this.cngValidatorField.value;
		this._checkIsEmpty();
	}

	// func : private

	_checkIsEmpty() {
		this.cngValidatorField.isEmpty = this.cngValidatorField.value.length <= 0;
		this._checkIsDirty();
	}

	_checkIsDirty() {
		if (this.cngValidatorField.isDirty === true) {
			this.cngValidatorFieldChange.emit(this.cngValidatorField);
			return;
		}

		this.cngValidatorField.isDirty = this.cngValidatorField.value !== this.cngValidatorField.valueOriginal;
		this.cngValidatorFieldChange.emit(this.cngValidatorField);
	}

}
