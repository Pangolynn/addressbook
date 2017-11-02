import { InterceptorService } from 'ng2-interceptors';

import { XHRBackend, RequestOptions } from '@angular/http';

import { AuthenticationInterceptor } from './authentication.classes';

export function AuthenticationInterceptorFactory(
	xhrBackend: XHRBackend,
	requestOptions: RequestOptions,
	authenticationInterceptor: AuthenticationInterceptor
) {
	let service = new InterceptorService(xhrBackend, requestOptions);

	service.addInterceptor(authenticationInterceptor);

	return service;
}
