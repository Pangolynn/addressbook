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
            .get('http://127.0.0.1:8000/api/v1/contact/' + id + '?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvdXNlci9zaWduaW4iLCJpYXQiOjE1MTIwMDM2MTMsImV4cCI6MTUxMjAyNTIxMywibmJmIjoxNTEyMDAzNjEzLCJqdGkiOiJvMGJ2QU1lN2didmJFeDNIIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.MStqZ5UgIMvTn9EGOHRl-mTdT5qWPivCfgIWhhvttfE', _header)
            .toPromise()
            .then(response => response.json())
            .then(response => response)
            .catch(error => error);
    }

    // TODO: Add page number
    GetArchive(): Promise<ResponseInterface> {
        const _header: RequestOptions = GetHeader();

        return this._http
            .get('http://127.0.0.1:8000/api/v1/contact?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvdXNlci9zaWduaW4iLCJpYXQiOjE1MTIwMDM2MTMsImV4cCI6MTUxMjAyNTIxMywibmJmIjoxNTEyMDAzNjEzLCJqdGkiOiJvMGJ2QU1lN2didmJFeDNIIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.MStqZ5UgIMvTn9EGOHRl-mTdT5qWPivCfgIWhhvttfE', _header)
            .toPromise()
            .then(response => response.json())
            .then(response => response)
            .catch(error => error);
    }

    PostCreate(body: Object): Promise<ResponseInterface> {
        const _header: RequestOptions = GetHeader();
        const _body: string = $.param(body);

        return this._http
            .post('http://127.0.0.1:8000/api/v1/contact?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvdXNlci9zaWduaW4iLCJpYXQiOjE1MTIwMDM2MTMsImV4cCI6MTUxMjAyNTIxMywibmJmIjoxNTEyMDAzNjEzLCJqdGkiOiJvMGJ2QU1lN2didmJFeDNIIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.MStqZ5UgIMvTn9EGOHRl-mTdT5qWPivCfgIWhhvttfE', _body, _header)
            .toPromise()
            .then(response => response.json())
            .then(response => response)
            .catch(error => error);
    }

    DeleteSingle(id: string): Promise<ResponseInterface> {
        const _header: RequestOptions = GetHeader();

        return this._http
            .delete('http://127.0.0.1:8000/api/v1/contact/' + id + '?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvdXNlci9zaWduaW4iLCJpYXQiOjE1MTIwMDM2MTMsImV4cCI6MTUxMjAyNTIxMywibmJmIjoxNTEyMDAzNjEzLCJqdGkiOiJvMGJ2QU1lN2didmJFeDNIIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.MStqZ5UgIMvTn9EGOHRl-mTdT5qWPivCfgIWhhvttfE', _header)
            .toPromise()
            .then(response => response.json())
            .then(response => response)
            .catch(error => error);
    }

    PutUpdate(id: string, body: Object): Promise<ResponseInterface> {
        const _header: RequestOptions = GetHeader();
        const _body: string = $.param(body);

        console.log(id);
        return this._http
        .put('http://127.0.0.1:8000/api/v1/contact/' + id + '?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvdXNlci9zaWduaW4iLCJpYXQiOjE1MTIwMDM2MTMsImV4cCI6MTUxMjAyNTIxMywibmJmIjoxNTEyMDAzNjEzLCJqdGkiOiJvMGJ2QU1lN2didmJFeDNIIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.MStqZ5UgIMvTn9EGOHRl-mTdT5qWPivCfgIWhhvttfE', _body, _header)
        .toPromise()
        .then(response => response.json())
        .then(response => response)
        .catch(error => error);
    }

}
