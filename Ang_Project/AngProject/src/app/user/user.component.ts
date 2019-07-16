import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges {

  user = localStorage.getItem('ROLE_TYPE');
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('>>>>>inside onchanges');
    // this.starWidth = this.rating * 86 / 5;
}

}
