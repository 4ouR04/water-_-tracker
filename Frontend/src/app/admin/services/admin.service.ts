import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRecord } from 'src/app/shared/Models/record-model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseURL: string = 'https://water-tracker-e006a-default-rtdb.firebaseio.com/'
  constructor(private http: HttpClient) { }
  postData(data: IRecord){
    return this.http.post(`${this.baseURL}/bills.json`, data)
  }
  fetchData(){
    return this.http.get(`${this.baseURL}/bills.json`)
  }
}
