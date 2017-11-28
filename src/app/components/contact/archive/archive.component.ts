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
  styleUrls: ['./archive.component.css']
})
export class ContactArchiveComponent implements OnInit {
  private contacts: DataContactInterface[];
  private contact: DataContactInterface;
  private id = '';

  constructor(
    private _userAPI: UserAPI,
    private _contactAPI: ContactAPI
  ) {}

  ngOnInit() {
    // this.getContacts();
   this._get();
  }

  // getContacts() {
  //   this._userAPI.GetContacts().then(response => {

  //     console.log(response);
  //     // console.log(Object.keys(this.contacts)[1]);

  //     const _result: ResultInterface = response.result;

  //     if (response.success === true && _result.code === 1) {
  //       this.contacts = _result.data['contacts'];
  //       console.log(this.contacts);
  //     } else {
  //       this.contacts = DataContactNull;
  //     }
  //   }).catch(error => {
  //     console.log(error);
  //   });
  // }

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

  // TODO: DataPrep?

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
      let _result: ResultInterface = response.result;

      if (response.success === true && _result.code === 1) {
        this.contact = DataContactNull;
      }
    }).catch(error => {});
  }

  // Param 1: Contact property options: 'name', 'last_name', 'email'
  // Param 2: Directions are 'asc' or 'desc'
  sort(prop: string, dir: string) {
    // this.contacts.sort((a, b): number => {
    //   if (a.name < b.name) { return -1; }
    //   if (a.name > b.name) { return 1; }
    //   return 0;
    // });

    this.contacts = _.orderBy(this.contacts, [prop], [dir]);
  }

  // sortFirstReverse() {
  //   this.contacts.sort((a, b): number => {
  //     if (a.name > b.name) { return -1; }
  //     if (a.name < b.name) { return 1; }
  //     return 0;
  //   });
  // }

  // Parameter options are 'asc' or 'desc'
  // sortEmail(dir: string) {
  //   // this.contacts.sort(function (a, b) {
  //   //   return a.email === null ? -1 : b.email === null ? 1 : a.email.toString().localeCompare(b.email);
  //   // });

  //   this.contacts = _.orderBy(this.contacts, ['email'], [dir]);
  // }

  // // sortEmailReverse(direction: string) {
  // //   this.contacts.sort(function (a, b) {
  // //     return a.email === null ? 1 : b.email === null ? -1 : a.email.toString().localeCompare(b.email);
  // //   });
  // //   console.log('sort email reverse');
  // // }

  // sortLast(dir: string) {
  //   // this.contacts.sort((a, b): number => {
  //   //   if (a.name < b.name) { return -1; }
  //   //   if (a.name > b.name) { return 1; }
  //   //   return 0;
  //   // });

  //   this.contacts = _.orderBy(this.contacts, ['last_name'], [dir]);
  // }

  // sortLastReverse() {
  //   // this.contacts.sort((a, b): number => {
  //   //   if (a.name > b.name) { return -1; }
  //   //   if (a.name < b.name) { return 1; }
  //   //   return 0;
  //   // });
  // }

}
