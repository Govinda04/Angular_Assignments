import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()

export class AdminService {

    // uName: string;
    // uMail: string;
    // uPhone: number;

    getUser(): User[] {
        return [
            {
                name: 'User',
                mail: 'user@edureka.com',
                phone: 1029323123
            }
        ];
    }
}
