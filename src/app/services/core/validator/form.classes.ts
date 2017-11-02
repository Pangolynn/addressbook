import { Inject } from '@angular/core';

import { ResponseInterface, ResultInterface } from '../../api/_shared/shared.interfaces';
import { AccountAPI } from '../../api/account/account.classes';

import { ValidatorRuleEnum, ValidatorOptionEnum } from './validator.enums';
import { ValidatorRuleInterface, ValidatorOptionInterface } from './validator.interfaces';

export class FormGroup {
	public isValid: boolean;
	public fields: FormField[];

	constructor(@Inject(AccountAPI) public accountAPI) {
		this.isValid = false;
	}

	// func : private

	public SetParent(): void {
		for (let field of this.fields) {
			field.parent = this;
		}
	}

	// func : public

	public SetFields(fields: FormField[]) {
		this.fields = fields;
	}

	public GetField(name: string): FormField {
		for (let field of this.fields) {
			if (field.name === name) {
				return field;
			}
		}

		return null;
	}

	public Validate(): void {
		let _valid = true;

		for (let field of this.fields) {
			if (field.isValid === false) {
				_valid = false;
				break;
			}
		}

		this.isValid = _valid;
	}
}

export class FormField {
	public parent: FormGroup;
	public name: string;
	public label: string;
	public value: string;
	public valueOriginal: string;
	public rules: ValidatorRuleInterface[];
	public isValid: boolean;
	public isEmpty: boolean;
	public isDirty: boolean;
	public isActive: boolean;
	public errorRule: ValidatorRuleEnum;
	public errorMessage: string;

	constructor(
		name: string,
		label: string,
		value: string,
		rules: ValidatorRuleInterface[]
	) {
		this.name = name;
		this.label = label;
		this.value = value;
		this.valueOriginal = this.value;
		this.isValid = false;
		this.isEmpty = true;
		this.isDirty = false;
		this.isActive = false;
		this.rules = rules;
		this.errorRule = ValidatorRuleEnum.None;
		this.errorMessage = '';

	}

	async Validate(): Promise<any> {
		if (this.value === null) {
			return false;
		}

		let _valid = true;
		let _rule: ValidatorRuleEnum;
		let _message = '';

		for (let field of this.rules) {
			switch (field.name) {
				case ValidatorRuleEnum.Required: {
					_valid = this.value.length > 0;
					_rule = ValidatorRuleEnum.Required;
					_message = this.label + ' is required';
					break;
				}
				case ValidatorRuleEnum.Email: {
					let _pattern = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					_valid = _pattern.test(this.value);
					_rule = ValidatorRuleEnum.Email;
					_message = 'Invalid email address';
					break;
				}
				case ValidatorRuleEnum.EmailUnique: {
					let _response = await this.parent.accountAPI.PostEmailUnique({ email: this.value });
					let _result = _response.result;

					if (_response.success === true && _result.code === 1 && _result.data === true) {
						_valid = true;
					} else {
						_valid = false;
					}

					_rule = ValidatorRuleEnum.EmailUnique;
					_message = 'Email is already in use';
					break;
				}
				case ValidatorRuleEnum.LengthBetween: {
					let _min: number;
					let _max: number;

					for (let index in field.options) {
						if (index) {
							if (field.options[index].name === ValidatorOptionEnum.Min) {
								_min = field.options[index].value;
							}

							if (field.options[index].name === ValidatorOptionEnum.Max) {
								_max = field.options[index].value;
							}
						}
					}

					if ((this.value.length >= _min) && (this.value.length <= _max)) {
						_valid = true;
					} else {
						_valid = false;
					}

					_rule = ValidatorRuleEnum.LengthBetween;
					_message = 'Must be between ' + _min + ' and ' + _max;
					break;
				}
				case ValidatorRuleEnum.Confirm: {
					let _confirm: FormField;

					for (let index in field.options) {
						if (field.options[index].name === ValidatorOptionEnum.CompareTo) {
							_confirm = this.parent.GetField(field.options[index].value);
							break;
						}
					}

					if (! _confirm.isDirty) {
						break;
					}

					this.parent.GetField(_confirm.name).Validate();
					break;
				}
				case ValidatorRuleEnum.ConfirmFor: {
					let _confirm: FormField;

					for (let index in field.options) {
						if (field.options[index].name === ValidatorOptionEnum.CompareTo) {
							_confirm = this.parent.GetField(field.options[index].value);
							break;
						}
					}

					if (this.value === _confirm.value) {
						_valid = true;
					} else {
						_valid = false;
					}

					_rule = ValidatorRuleEnum.LengthBetween;
					_message = _confirm.label + ' does not match ' + this.label;
					break;
				}
			}

			if (_valid === false) {
				break;
			}
		}

		this.isValid = _valid;
		this.errorRule = _rule;
		this.errorMessage = _message;
		this.parent.Validate();
	}
}
