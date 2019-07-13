import { Component, OnInit } from '@angular/core';
import { UserModal } from './user.modal';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myModel = new UserModal('', '', '');

  constructor() { }

  ngOnInit() {
  }

  regUser(form: NgForm) {
    console.log('>>>>>User Regisration Captured', form.value);
  }

}
