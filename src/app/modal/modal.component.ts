import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {

  @Input() values = {fname: '', lname: '', address: '', age: '', phoneNumber: '', gender: ''};


  address = [
    {id: 1, name: 'Albania'},
    {id: 2, name: 'Argentina'},
    {id: 3, name: 'Armenia'},
    {id: 4, name: 'Australia'},
    {id: 5, name: 'Belgium'},
    {id: 6, name: 'Brazil'},
    {id: 7, name: 'California'},
    {id: 8, name: 'Canada'},
    {id: 9, name: 'China'},
    {id: 10, name: 'Czech Republic'},
    {id: 11, name: 'Denmark'},
    {id: 12, name: 'France'},
    {id: 13, name: 'Germany'},
    {id: 14, name: 'Greece'},
    {id: 15, name: 'Italy'},
    {id: 16, name: 'Latvia'},
    {id: 17, name: 'Lebanon'},
    {id: 18, name: 'Lithuania'},
    {id: 19, name: 'Poland'},
    {id: 20, name: 'Portugal'},
    {id: 21, name: 'Russia'},
    {id: 22, name: 'Slovakia'},
    {id: 23, name: 'Spain'},
    {id: 24, name: 'USA'},

  ];


  @Output() close: EventEmitter<any> = new EventEmitter();

  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor() {
  }


  ngOnInit(): void {
    if (!this.values)
      this.values = {fname: '', lname: '', address: '', age: '', phoneNumber: '', gender: ''};
  }

  closeModal() {
    console.log(this.values);
    this.close.emit();
  }

  saveModal() {
    this.save.emit(this.values);
  }

}
