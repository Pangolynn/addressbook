import { InterceptorService } from 'ng2-interceptors';

import { XHRBackend, RequestOptions } from '@angular/http';

export function InterceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions) {
	return new InterceptorService(xhrBackend, requestOptions);
}
