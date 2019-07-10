import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ang-FinalProject';
  name = 'Govinda';
  url = 'https://angular.io/cli';
  hello(): void {
    alert('Hello !!' + this.name);
  }
}
