import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  @Output() yes: EventEmitter<any> = new EventEmitter();
  @Output() no: EventEmitter<any> = new EventEmitter();


  constructor() { }



  ngOnInit(): void {

  }

  closeModal() {
    console.log(null);
    this.no.emit();
  }

  deleteModal() {
    this.yes.emit(null);
  }


}
