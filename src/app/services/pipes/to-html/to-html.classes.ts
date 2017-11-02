import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'toHTML'})
export class ToHTMLPipe implements PipeTransform {

	transform(value: string): string {
		return value.replace(/\n/g, '<br />');
	}

}