import { Component } from '@angular/core';
import * as moment from 'moment';
import { FileSystem } from './file.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';
  userDate: Date;
  // a = moment().format('"dddd, MMMM Do YYYY, h:mm:ss a"');
  a: string;
  modifiedDate = moment().format('LLL');
  b = moment().startOf('year');

  files: FileSystem[] = [
    {
      id : 1,
      name : 'File1',
      type : 'Text file',
      // date :  'July 4, 2019 08:54:00',
      date :  new Date('July 4, 2019 08:54:00'),
      size: '2KB'
     },
    {
      id : 2,
      name : 'File2',
      type : 'Typescript file',
      date : new Date('May 17, 2019 5:49 PM'),
      size: '4KB'
    },
    {
      id : 3,
      name : 'File3',
      type : 'JSON file',
      date : new Date('March 4, 2018 3:52 AM'),
      size: '2KB'
    },
    {
      id : 4,
      name : 'File4',
      type : 'Text file',
      date : new Date('December 23, 2018 10:05 AM'),
      size: '1KB'
    }
  ];

  // b = moment().month(0).date(1).hours(0).minutes(0).seconds(0).milliseconds(0);

  // getDate() {
  //   console.log('Date is' + this.userDate + '\n and a is: ' + this.a + '\n');
  //   console.log(this.files[0].date);
  //   this.a = moment(this.files[0].date).from(this.userDate);
  // }



  // b.from(a)
}
