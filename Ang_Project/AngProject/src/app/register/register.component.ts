import { Component, OnInit } from '@angular/core';
import { UserModal } from './user.modal';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myModel = new UserModal('', '', '');

  constructor( private registerService: RegisterService) { }

  ngOnInit() {
  }

  regUser(form: NgForm) {
    // console.log('>>>>>User Regisration Captured', form.value);
    this.registerService.registerUser(form.value);
  }

}
