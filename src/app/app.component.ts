import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular3';
  content: Object = 'Debtor';
  public dataList: { [key: string]: Object }[] = [
    {text: 'Debtor'},
    {text: 'Loan Info'},
    {text: 'Loan offer'}
  ];

  constructor() {

  }

  onClick(text: Object) {
    this.content = text;
  }
}

