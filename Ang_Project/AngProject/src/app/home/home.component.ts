import { Component, OnInit } from '@angular/core';
import { LoginModal } from './login.model';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myModel = new LoginModal('john@abc.com', 'abd12456');

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  submitLoginForm(form: NgForm) {
    console.log('ting~~~~~');
    // console.log('>>>>>Data Caught!!!<<<<<', form.value);
    this.loginService.loginUser(form.value)
      .subscribe((res) => this.validateUser(res['token'])
      .subscribe((reso) => this.loginService.getUserRole(reso['role'])));
  }

  validateUser(token) {
      localStorage.setItem('TOKEN', token);
  }

}
