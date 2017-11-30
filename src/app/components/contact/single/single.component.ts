import { Component, OnInit, Input } from '@angular/core';

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
  @Input() contact: DataContactInterface;

  constructor(
    private _contactAPI: ContactAPI
  ) {}

  ngOnInit() {

  }

  _delete() {
    this._contactAPI.DeleteSingle(this.contact['id']).then(response => {
      const _result: ResultInterface = response.result;

      if (response.success === true && _result.code === 1) {
        this.contact = DataContactNull;
      }
    }).catch(error => {
      console.log(error);
    });
  }


}
