import { Component, OnInit } from '@angular/core';
import { UserModal } from './user.modal';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myModel = new UserModal('', '', '', true, '');

  constructor() { }

  ngOnInit() {
  }

}
