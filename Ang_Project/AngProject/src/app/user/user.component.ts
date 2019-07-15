import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = localStorage.getItem('ROLE_TYPE');
  constructor() { }

  ngOnInit() {
  }

  

}
