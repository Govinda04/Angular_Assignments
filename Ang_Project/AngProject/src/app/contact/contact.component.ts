import { Component, OnInit } from '@angular/core';
import { ContactModel } from './contact.model';
import { ContactModal } from './contact.modal';
import { ContactService } from '../services/contact.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  contacts: ContactModel[];
  myModel = new ContactModal('Rohit', '12', '45', 'rs.in');

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.showList();
    
  }
  
  submitForm(form: NgForm) {
    this.contactService.showList();
    this.contactService.AddContact(form.value);
  }


}
