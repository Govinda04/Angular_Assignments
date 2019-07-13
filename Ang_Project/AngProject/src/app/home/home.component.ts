import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login1.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myModel = new LoginModel('John', 'abd12345');

  constructor() { }

  ngOnInit() {
  }

  submitForm(form: NgForm) {
    console.log('ting~~~~~');
    console.log('>>>>>Data Caught!!!<<<<<', form.value);
  }

}
