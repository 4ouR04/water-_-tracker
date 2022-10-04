import { Component, OnInit } from '@angular/core';
import { IRecord } from 'src/app/Models/record-model';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css'],
})
export class RecordsComponent implements OnInit {
  message: string = ''
  p: number = 1;
  filterString: string = '';
  records: IRecord[] = [
    {
      id: 1,
      client_name: 'Amos Mwongela',
      client_phone: '+254 742971932',
      client_email: 'amos@gmail.com',
      meter_number: '123456',
      initial_reading: '09',
      final_reading: '987',
      consumed_units: '0987',
      total_bill: '8765',
      status: 'Pending',
    },
    {
      id: 2,
      client_name: 'Evans Mwangangi',
      client_phone: '+254 742971932',
      client_email: 'evans@gmail.com',
      meter_number: '123456',
      initial_reading: '09',
      final_reading: '987',
      consumed_units: '0987',
      total_bill: '8765',
      status: 'Cleared',
    },
  ];
  constructor() {}

  ngOnInit(): void { }
  onDelete(id: number) {
    this.records = this.records.filter(el => {
      return el.id != id
    })
    this.message = 'Record deleted successfully.'
    setTimeout(() => {
      this.message = ''
    },4000)
  }
  onEdit(id: number) {
    let updated = this.records.filter(el => {
      return el.id == id
    })
    this.message = 'Record update successfully.'
    setTimeout(() => {
      this.message = '';
    }, 4000);
  }
}
