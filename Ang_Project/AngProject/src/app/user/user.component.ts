import { Component, OnInit, OnChanges } from '@angular/core';
import { ContactModel } from '../contact/contact.model';
import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges {

  user = localStorage.getItem('USER_NAME');
  userRole = localStorage.getItem('ROLE_TYPE');
  contact: ContactModel[];

  constructor(private contactService:ContactService, private router: Router) { }

  ngOnInit() {
    this.contact = this.contactService.getContacts();
  }

  ngOnChanges() {
    console.log('>>>>>inside onchanges');
    // this.starWidth = this.rating * 86 / 5;
  }

  logOut() {
    localStorage.removeItem('USER_NAME');
    localStorage.removeItem('ROLE_TYPE');
    localStorage.removeItem('TOKEN_NUMBER');
    this.router.navigate(['/home']);

  }

}
