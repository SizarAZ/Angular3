import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as apiRouts from './api-routs';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = apiRouts.getAllDebtor;

  private addNewDebtor = apiRouts.addNewDebtor;

  constructor(private httpClient: HttpClient) {
  }

  public sendGetRequest() {
    return this.httpClient.get(this.REST_API_SERVER);
  }

  // call this method when you want to add an item
  public addItem(itemToAdd: any ,  callback: any): void {
    console.log('sending patch request to add an item');

    this.httpClient.post(this.addNewDebtor, itemToAdd).subscribe(
      res => {
        callback(res)
      },
      error => {
        console.error('There was an error during the request');
        const errrorObject = {error : false,message : ''};
        errrorObject['error'] = true;
        errrorObject['message'] = error.error.message;
        return of(errrorObject);
      });

    console.log('request sent. Waiting for response...');

  }
}
