import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';

import { ContactAPI } from '../../../services/api/contact/contact.classes';

import { ResultInterface } from 'app/services/api/_shared/shared.interfaces';
import { DataContactInterface } from 'app/services/api/contact/contact.interfaces';
import { DataContactNull } from 'app/services/api/contact/contact.variables';

@Component({
  selector: 'contact-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class ContactEditComponent implements OnInit {
  private _contact: DataContactInterface;

  @Output() onDeleteContact = new EventEmitter<DataContactInterface>();

  @Input()
  get contact(): DataContactInterface {
     return this._contact;
  }

  set contact(data: DataContactInterface) {
     this._contact = data;
  }

  @ViewChild('closeEditModal') close;

  constructor(
    private _contactAPI: ContactAPI
  ) {}

  ngOnInit() {
  }

  delete() {
    this._contactAPI.DeleteSingle(this._contact['id']).then(response => {
      const _result: ResultInterface = response.result;

      if (response.success === true && _result.code === 1) {
        this.onDeleteContact.emit();
        console.log(this.contact);
        console.log(_result.data['msg']);
        this.close.nativeElement.click();
      }
    }).catch(error => {
      console.log(error);
    });
  }

  _submit() {
    console.log('yay');
    console.log(this._contact);
    this._contactAPI.PutUpdate(this._contact['id'], this._contact).then(response => {
      const _result: ResultInterface = response.result;

      if (response.success === true && _result.code === 1) {
        console.log(_result.data['msg']);
        this.close.nativeElement.click();
      } else {
        console.log(_result.data['msg']);
      }
    }).catch(error => {
      console.log(error);
    });
  }

}
