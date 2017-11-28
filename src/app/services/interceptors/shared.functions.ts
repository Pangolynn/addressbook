import { InterceptorService } from 'ng2-interceptors';

import { XHRBackend, RequestOptions } from '@angular/http';

export function InterceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions) {
    const service = new InterceptorService(xhrBackend, requestOptions);

    return service;
}
