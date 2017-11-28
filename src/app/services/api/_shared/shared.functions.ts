import { Headers, RequestOptions } from '@angular/http';

export function GetHeader(): RequestOptions {
    const headers: Headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest'
    });

    return GetRequestOptions(headers);
}

export function GetHeaderWithUser(token: string): RequestOptions {
    const headers: Headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencodded',
        'Authorization': token
    });

    return GetRequestOptions(headers);
}

export function GetRequestOptions(headers: Headers) {
    return new RequestOptions({ headers: headers });
}
