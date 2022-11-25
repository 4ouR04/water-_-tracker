import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IRecord } from 'src/app/shared/Models/record-model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.css']
})
export class NewRecordComponent implements OnInit {
data: IRecord = {
  client_name: '',
  client_phone: '',
  client_email: '',
  meter_number: '',
  initial_reading: '',
  final_reading: '',
  consumed_units: '',
  total_bill: '',
  status: '',
}
  constructor(private dataService: AdminService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    this.data = {...f.value}
    console.log(this.data)
    this.dataService.postData(this.data).subscribe(info => console.log(info))
  }

}
