import { Component, OnInit, OnChanges } from '@angular/core';
import { UserModal } from './user.modal';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnChanges {

  myModel = new UserModal('', '', '');
  
  userRole = localStorage.getItem('ROLE_TYPE');
  isAdmin: boolean = false;
  constructor( private registerService: RegisterService) {}
  
  ngOnChanges() {
    this.isAdmin = (this.userRole === 'admin') ? true : false;
  }

  regUser(form: NgForm) {
    // console.log('>>>>>User Regisration Captured', form.value);
    this.registerService.registerUser(form.value);
  }

}
