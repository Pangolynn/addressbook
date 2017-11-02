export enum ValidatorRuleEnum {
	None = <any>'',
	Required = <any>'required',
	AlphaNumericDash = <any>'alpha-numeric-dash',
	Email = <any>'email',
	EmailUnique = <any>'email-unique',
	Username = <any>'username',
	LengthGreaterThan = <any>'gt',
	LengthGreaterThanOrEqualTo = <any>'gte',
	LengthLessThan = <any>'lt',
	LengthLessThanOrEqualTo = <any>'lte',
	LengthBetween = <any>'between',
	Confirm = <any>'confirm',
	ConfirmFor = <any>'confirm-for'
}

export enum ValidatorOptionEnum {
	Min = <any>'min',
	Max = <any>'max',
	Dirty = <any>'dirty',
	CompareTo = <any>'compare-to'
}