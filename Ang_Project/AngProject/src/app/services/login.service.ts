import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModal } from '../home/login.model';
import { Observable } from 'rxjs';

@Injectable()

export class LoginService {

    private url = 'http://localhost:5000/api/auth/login';

    constructor(private http: HttpClient) {}

    loginUser(customer: LoginModal) {
        console.log('>>>>>>>>Data push in Service', customer);
        console.log('login Successful');
        return this.http.post(this.url, customer);
    }

    getUserRole(typeOfUser) {
        localStorage.setItem('ROLE_TYPE',typeOfUser);
    }
}

