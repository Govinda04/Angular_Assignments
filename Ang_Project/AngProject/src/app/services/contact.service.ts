import { Injectable } from '@angular/core';
import { ContactModal } from '../contact/contact.modal';

@Injectable()

export class ContactService {

  contactList: any[];

  AddContact(contact: ContactModal) {
    console.log('>>>>>Date in service', contact);

    if (!this.contactList) {
      this.contactList = [{
          name: contact.name,
          mobile: contact.mobile,
          work: contact.work,
          email: contact.email
      }];
    } else {
            this.contactList.push({
              name: contact.name,
              mobile: contact.mobile,
              work: contact.work,
              email: contact.email
            });
            // alert(`Contact '${name1}' added successfully.`);
        }
    console.log('--------------*****Iteratioon ends******------------------');
  }

  showList(): void {
    console.log('-----------------------------------------------\nList: ', this.contactList);
    console.log('-----------------------------------------------\nListend ');
  }

  getContacts() {
    return this.contactList;
  }

}
