import { Component, OnInit } from '@angular/core';
import { ContactModel } from './contact.model';
import { ContactModal } from './contact.modal';
import { ContactService } from '../services/contact.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  contacts: ContactModel[];
  myModel = new ContactModal('Rohit', '12', '45', 'rs.in');

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit() {

  }
  
  submitForm(form: NgForm): void {
    this.contactService.AddContact(form.value);
    this.contactService.showList();
    this.router.navigate(['/user']);
  }


}
