import { Injectable } from '@angular/core';

import { LoginModal } from '../home/login.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class LoginService {

    private url = 'http://localhost:5000/api/auth/login';

    private userInfo = 'http://localhost:5000/api/auth/userinfo';

    constructor(private http: HttpClient) {}

    loginUser(customer: LoginModal) {
        console.log('Data to be posting', customer);
        return this.http.post(this.url, customer);
        
    }

    getUserRole(token) {
        localStorage.setItem('TOKEN_NUMBER', token);
        return this.http.get(this.userInfo, {headers: {'x-access-token': token}});
    }

    
}

