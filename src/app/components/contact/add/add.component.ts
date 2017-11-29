

import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { ContactAPI } from '../../../services/api/contact/contact.classes';

import { ResultInterface } from 'app/services/api/_shared/shared.interfaces';
import { DataContactInterface } from 'app/services/api/contact/contact.interfaces';
import { DataContactNull } from 'app/services/api/contact/contact.variables';

@Component({
  selector: 'contact-add',
  templateUrl: './add.component.html',
  styleUrls: [
    './add.component.css',
    '../../../app.component.css'
  ]
})
export class ContactAddComponent implements OnInit {
    @Output() onAddContact = new EventEmitter<DataContactInterface>();

    @ViewChild('addModal') addContact;
    private contact: DataContactInterface = DataContactNull;

    constructor(
    private _contactAPI: ContactAPI
    ) {}

    ngOnInit() {
        console.log(this.addContact);
    }

    submit() {
        console.log('add submit');
        this._contactAPI.PostCreate(this.contact).then(response => {
            const _result: ResultInterface = response.result;
            console.log(_result, response);
            if (response.success === true && _result.code === 1) {
                this.onAddContact.emit(this.contact);
                this.addContact.modal();
                this.addContact.modal('hide');

            } else {
                console.log(_result.data['msg']);
            }
        }).catch(error => {
            console.log('Error creating contact', error);
        });
    }

}
