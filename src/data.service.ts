import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as apiRouts from './api-routs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = apiRouts.getAllDebtor;

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
}
