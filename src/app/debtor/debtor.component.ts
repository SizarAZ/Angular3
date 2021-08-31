import {Component, OnInit} from '@angular/core';
import * as routs from '../../api-routs';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-debtor',
  templateUrl: './debtor.component.html',
  styleUrls: ['./debtor.component.css']
})
export class DebtorComponent implements OnInit {

  public dataList: { [key: string]: string }[] = [
    {fname: 'Sizar', lname: 'Abou Ziki', contactNumber: '03883958', address: 'Lebanon', age: '22', gender: 'Male'},
    {fname: 'Majed', lname: 'Moustafa', contactNumber: '76451917', address: 'Lebanon', age: '25', gender: 'Male'},
    {fname: 'Mhammad', lname: 'Hariri', contactNumber: '76153150', address: 'Lebanon', age: '23', gender: 'Male'}
  ];

  public dataListClone: { [key: string]: string }[] = [];


  openModal = false;
  openModalEdit = false;
  itemToBeEdited = {fname: '', lname: '', address: '', age: '', contactNumber: '', gender: ''};
  item = {};
  openModalDelete = false;
  itemToBeDeleted = null;
  searchFor = '';


  constructor(private dataService: DataService) {
  }


  ngOnInit(): void {
    this.getAllDebtor();


  }

  save(event: any) {
    //this.dataList.push(event);
    this.dataService.addItem(event ,(res:any) => {
      this.getAllDebtor();
    });
    this.openModal = false;

  }

  editModal(item: any) {

    this.itemToBeEdited = JSON.parse(JSON.stringify(item));
    this.openModalEdit = true;
  }

  update(item: any) {
    console.log(item);
    this.dataList.forEach((row) => {
      if (row.fname === item.fname) {
        row['lname'] = item['lname'];
        row['contactNumber'] = item['contactNumber'];
        row['address'] = item['address'];
        row['age'] = item['age'];
        row['gender'] = item['gender'];
      }
    });
    this.openModalEdit = false;
  }

  delete() {
    this.dataList.forEach((row, index) => {
      if (row.fname === this.itemToBeDeleted) {
        this.dataList.splice(index, 1);
      }
    });
    this.openModalDelete = false;
  }

  deleteModal(item: any) {
    this.itemToBeDeleted = item.fname;
    this.openModalDelete = true;
  }

  search() {
    this.dataList = JSON.parse(JSON.stringify(this.dataListClone));
    this.dataList = this.dataList.filter(x => x.fname.toLowerCase().includes(this.searchFor.toLowerCase()));
  }

  getAllDebtor() {
    this.dataService.sendGetRequest().subscribe((data) => {
      console.log(data);
      this.dataList = JSON.parse(JSON.stringify(data));
      this.dataListClone = JSON.parse(JSON.stringify(this.dataList));

    });

  }
}
