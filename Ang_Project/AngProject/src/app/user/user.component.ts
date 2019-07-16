import { Component, OnInit, OnChanges } from '@angular/core';
import { ContactModel } from '../contact/contact.model';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges {

  user = localStorage.getItem('ROLE_TYPE');
  contact: ContactModel[];

  constructor(private contactService:ContactService) { }

  ngOnInit() {
    this.contact = this.contactService.getContacts();
  }

  ngOnChanges() {
    console.log('>>>>>inside onchanges');
    // this.starWidth = this.rating * 86 / 5;
}

}
