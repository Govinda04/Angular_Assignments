import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModal } from '../register/user.modal';
import { Observable } from 'rxjs';

@Injectable()

export class RegisterService {

    private url = 'http://localhost:5000/api/auth/register';

    constructor(private http: HttpClient) {}

    registerUser(customer: UserModal) {
        console.log('>>>>>>>>Data push in RegisterService', customer);
        alert(`Welcome ${customer.name} to CMS!!!`);
        return this.http.post(this.url, customer)
            .subscribe((res) => console.log('Data posted', res));

    }
}

