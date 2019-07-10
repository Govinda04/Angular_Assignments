import { Component , Output, EventEmitter, OnInit} from '@angular/core';
import { User } from './user.model';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html'
})

export class AdminComponent implements OnInit {
    UserName: string;
    UserMail: string;
    UserPhone: number;
    hero: User;

    // ngOnChanges(){}

    // @Output() UserOut: EventEmitter<any> = new EventEmitter<any>();

    ngOnInit() {
    }

    addUser(): void {
        this.hero = new User(this.UserName, this.UserMail, this.UserPhone);
        // this.hero = this.adminService.getUser();
        // this.UserOut.emit(this.hero);
        console.log(this.UserName);
        console.log('its working fine');
    }
}
