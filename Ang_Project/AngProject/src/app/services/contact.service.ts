import { Injectable } from '@angular/core';
import { ContactModel } from '../contact/contact.model';

@Injectable()

export class ContactService {
    myModel = new ContactModel('','','');
}
