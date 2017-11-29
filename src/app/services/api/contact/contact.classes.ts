declare var $: any;

import 'rxjs/add/operator/toPromise';

import { InterceptorService } from 'ng2-interceptors';

import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';

import { URLConfig } from '../../../configs/url.config';

import { UserModel } from '../../../models/user/user.classes';
// import { ContactModel } from '../../../models/contact/contact.classes';


import { ResponseInterface } from '../_shared/shared.interfaces';
import { GetHeader } from '../_shared/shared.functions';

@Injectable()
export class ContactAPI {

    constructor(private _http: InterceptorService, private _userModel: UserModel) {}

    // TODO: Add tokens
    GetSingle(id: string): Promise<ResponseInterface> {
        const _header: RequestOptions = GetHeader();

        return this._http
            .get('http://127.0.0.1:8000/api/v1/contact/' + id + '?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvdXNlci9zaWduaW4iLCJpYXQiOjE1MTE2MjgwNTcsImV4cCI6MTUxMTY0OTY1NywibmJmIjoxNTExNjI4MDU3LCJqdGkiOiJSNEdNRUJZdnZPeHVyV0JCIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.2BbQvD0gwJkdMjjGS-eD0xjC2dYZiHRT3fcC1iVOXzo', _header)
            .toPromise()
            .then(response => response.json())
            .then(response => response)
            .catch(error => error);
    }

    // TODO: Add page number
    GetArchive(): Promise<ResponseInterface> {
        const _header: RequestOptions = GetHeader();

        return this._http
            .get('http://127.0.0.1:8000/api/v1/contact?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvdXNlci9zaWduaW4iLCJpYXQiOjE1MTE5ODE4MDcsImV4cCI6MTUxMjAwMzQwNywibmJmIjoxNTExOTgxODA3LCJqdGkiOiJqZmVZV3JIbjhxMFFZMndzIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.aejUcg7TR86BsLiXooyCGMFAIFq16GtzxXJR1BkOH-o', _header)
            .toPromise()
            .then(response => response.json())
            .then(response => response)
            .catch(error => error);
    }

    PostCreate(body: Object): Promise<ResponseInterface> {
        const _header: RequestOptions = GetHeader();
        const _body: string = $.param(body);

        return this._http
            .post('http://127.0.0.1:8000/api/v1/contact?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvdXNlci9zaWduaW4iLCJpYXQiOjE1MTE5ODE4MDcsImV4cCI6MTUxMjAwMzQwNywibmJmIjoxNTExOTgxODA3LCJqdGkiOiJqZmVZV3JIbjhxMFFZMndzIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.aejUcg7TR86BsLiXooyCGMFAIFq16GtzxXJR1BkOH-o', _body, _header)
            .toPromise()
            .then(response => response.json())
            .then(response => response)
            .catch(error => error);
    }

    DeleteSingle(id: string): Promise<ResponseInterface> {
        const _header: RequestOptions = GetHeader();

        return this._http
            .delete('http://127.0.0.1:8000/api/v1/contact/' + id + '?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvdXNlci9zaWduaW4iLCJpYXQiOjE1MTE5ODE4MDcsImV4cCI6MTUxMjAwMzQwNywibmJmIjoxNTExOTgxODA3LCJqdGkiOiJqZmVZV3JIbjhxMFFZMndzIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.aejUcg7TR86BsLiXooyCGMFAIFq16GtzxXJR1BkOH-o', _header)
            .toPromise()
            .then(response => response.json())
            .then(response => response)
            .catch(error => error);
    }

    PostUpdate(id: string): Promise<ResponseInterface> {
        const _header: RequestOptions = GetHeader();

        return this._http
        .put('http://127.0.0.1:8000/api/v1/contact/' + id + '?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvdXNlci9zaWduaW4iLCJpYXQiOjE1MTE5ODE4MDcsImV4cCI6MTUxMjAwMzQwNywibmJmIjoxNTExOTgxODA3LCJqdGkiOiJqZmVZV3JIbjhxMFFZMndzIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.aejUcg7TR86BsLiXooyCGMFAIFq16GtzxXJR1BkOH-o', _header)
        .toPromise()
        .then(response => response.json())
        .then(response => response)
        .catch(error => error);
    }

}
