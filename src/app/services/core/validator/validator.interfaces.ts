import { ValidatorRuleEnum, ValidatorOptionEnum } from './validator.enums';

export interface ValidatorRuleInterface {
	name: ValidatorRuleEnum;
	options: ValidatorOptionInterface[];
}

export interface ValidatorOptionInterface {
	name: ValidatorOptionEnum;
	value: any;
}
