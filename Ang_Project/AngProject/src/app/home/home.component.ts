import { Component, OnInit } from '@angular/core';
import { LoginModal } from './login.model';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginModel = new LoginModal('', '');

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  submitLoginForm(form: NgForm) {
    console.log('ting~~~~~');
    console.log('hi');
    // console.log('>>>>>Data Caught!!!<<<<<', form.value);
    this.loginService.loginUser(form.value)
      .subscribe((res) => this.loginService.getUserRole(res['token'])
      .subscribe((resp) => this.validateUser(resp['role'])));
  }

  validateUser(typeOfUser) {
    localStorage.setItem('ROLE_TYPE', typeOfUser);

    (typeOfUser === 'admin') ? this.router.navigate(['/github']) : this.router.navigate(['/user']);
  }

}
