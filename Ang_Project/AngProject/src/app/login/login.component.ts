import { Component } from '@angular/core';
import { LoginModal } from './login.model';
import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';
import { LoginServiceA } from './login.service';

@Component({
    selector: 'app-cust',
    templateUrl: './login-form.component.html'
})


export class LoginComponent {

    mymodel = new LoginModal('', '');

  constructor(private loginService: LoginServiceA) { }

    // loginForm(form: NgForm): void {
    //     console.log('Copied!!!', 'Without Concatination', form.value);
    // }
    loginForm(form: NgForm): void {
        this.loginService.loginUser(form.value)
            .subscribe((res) => this.loginService.getUserRole(res['token'])
            .subscribe((response) => this.validateUser(response['role'])));
    }

    validateUser(typeOfUser): void {
        localStorage.setItem('ROLE_TYPE', typeOfUser);
        // this.router.navigate(['/profile']);
        alert(`User role is ${typeOfUser}`);
    }

}
