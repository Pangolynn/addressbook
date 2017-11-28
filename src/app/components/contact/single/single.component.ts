

import { Component, OnInit } from '@angular/core';

import { ContactAPI } from '../../../services/api/contact/contact.classes';

import { ResultInterface } from 'app/services/api/_shared/shared.interfaces';
import { DataContactInterface } from 'app/services/api/contact/contact.interfaces';
import { DataContactNull } from 'app/services/api/contact/contact.variables';

@Component({
  selector: 'contact-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class ContactSingleComponent implements OnInit {
  private contact: DataContactInterface = DataContactNull;
  private id = '';


  constructor(
    private _contactAPI: ContactAPI
  ) {}

  ngOnInit() {

  }

  _get() {
    this._contactAPI.GetSingle('3').then(response => {
      const _result: ResultInterface = response.result;
      console.log(response);
      if (response.success === true && _result.code === 1) {
        this.contact = <DataContactInterface>_result.data['contact'];
        console.log(this.contact.name);
      } else {

      }
    }).catch(error => {
      console.log('Error getting single contact');
    });
  }

  _delete() {
    this._contactAPI.DeleteSingle(this.id).then(response => {
      const _result: ResultInterface = response.result;

      if (response.success === true && _result.code === 1) {
        this.contact = DataContactNull;
      }
    }).catch(error => {
      console.log(error);
    });
  }

  _submit() {
    this._contactAPI.PostUpdate(this.id).then(response => {
      const _result: ResultInterface = response.result;

      if (response.success === true && _result.code === 1) {
        this.contact = _result.data['contact'];
      } else {

      }
    }).catch(error => {
      console.log(error);
    });
  }

}
