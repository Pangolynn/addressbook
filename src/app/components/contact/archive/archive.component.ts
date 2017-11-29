import * as _ from 'lodash';

import { Component, OnInit } from '@angular/core';

// create and change to contactAPI
import { UserAPI } from '../../../services/api/user/user.classes';
import { ContactAPI } from '../../../services/api/contact/contact.classes';

import { ResultInterface } from 'app/services/api/_shared/shared.interfaces';
import { DataContactInterface } from 'app/services/api/contact/contact.interfaces';
import { DataContactNull } from 'app/services/api/contact/contact.variables';

@Component({
  selector: 'contact-archive',
  templateUrl: './archive.component.html',
  styleUrls: [
    './archive.component.css',
    '../../../app.component.css'
  ]
})
export class ContactArchiveComponent implements OnInit {
  private contacts: DataContactInterface[];
  private selectedContact: DataContactInterface;
  private id = '';

  constructor(
    private _userAPI: UserAPI,
    private _contactAPI: ContactAPI
  ) {}

  ngOnInit() {
   this._get();
  }

  _get() {
    this._contactAPI.GetArchive().then(response => {
      const _result: ResultInterface = response.result;

      if (response.success === true && _result.code === 1) {
        this.contacts = <DataContactInterface[]>_result.data['contacts'];
        this._setLastName();
        this.sort('name', 'asc');
        console.log(this.contacts);
      } else {
        this.contacts[0] = DataContactNull;
      }
    }).catch(error => {
      console.log('Error getting contacts', error);
    });
  }

  // TODO: DataPrep (email,phone null etc)?

  _setLastName() {
    this.contacts.forEach(function (c) {

      let full = _.split(c.name, ' ', 2);

      // Check if there's a last name
      if (full.length === 1) {
        c['last_name'] = '';
      } else {
        let first = full[0];
        c['last_name'] = full[full.length - 1];
      }
    });
  }

  _delete() {
    this._contactAPI.DeleteSingle(this.id).then(response => {
      const _result: ResultInterface = response.result;

      if (response.success === true && _result.code === 1) {
        this.selectedContact = DataContactNull;
      }
    }).catch(error => {});
  }

  // Param 1: Contact property options: 'name', 'last_name', 'email'
  // Param 2: Directions are 'asc' or 'desc'
  sort(prop: string, dir: string) {
    this.contacts = _.orderBy(this.contacts, [prop], [dir]);
  }

  onSelect(contact: DataContactInterface) {
    this.selectedContact = contact;
    console.log(this.selectedContact);
  }

  onAddContact(contact: DataContactInterface) {
    this.contacts.splice(this.contacts.length - 1, 0, contact);
    console.log(this.contacts);
  }

}
