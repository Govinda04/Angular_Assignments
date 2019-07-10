import { Component } from '@angular/core';
import { User } from './user.model';
import { AdminService } from './admin.service';

@Component({
    selector: 'app-user',
    templateUrl: 'user.component.html'
})

export class UserComponent {

    constructor(private adminService: AdminService) {}

    flag = false;
    hero = this.adminService.getUser();
    uName =  this.hero[0].name;
    uMail = this.hero[0].mail;
    uPhone = this.hero[0].phone;


    setFlag(): void {
        this.flag = !this.flag;
    }

    // console.log(this.uName + '\n' + this.uMail + '\n' + this.uPhone);

}
