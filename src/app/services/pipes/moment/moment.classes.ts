import * as moment from 'moment/moment';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'moment' })
export class MomentPipe implements PipeTransform {

	transform(value: string, option: string): string {
		let time = moment(value, 'YYYY-MM-DD HH:mm:ss');
		return time.fromNow();
	}

}