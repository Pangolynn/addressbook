import { Headers, RequestOptions } from '@angular/http';

export function GetHeader(): RequestOptions {
	let headers: Headers = new Headers({
		'Content-Type': 'application/x-www-form-urlencoded',
		'Application': 'socialarray'
	});

	return GetRequestOptions(headers);
}

export function GetHeaderWithUser(token: string): RequestOptions {
	let headers: Headers = new Headers({
		'Content-Type': 'application/x-www-form-urlencoded',
		'Application': 'socialarray',
		'Authorization': token
	});

	return GetRequestOptions(headers);
}

export function GetRequestOptions(headers: Headers): RequestOptions {
	return new RequestOptions({ headers: headers });
}
