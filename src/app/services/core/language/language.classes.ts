import { Injectable } from '@angular/core';

import { MessagesInterface } from './langauge.interfaces';
import { EnMessages } from './language.variables';

@Injectable()
export class LanguageService {
	public static GetMessages(language: string): MessagesInterface {
		return EnMessages;
	}

	public static GetLabels(language: string) {
	}
}
