import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  displayMode: boolean = true
  constructor() { }

  ngOnInit(): void {
  }
  switchMode() {
    this.displayMode = !this.displayMode
  }

}
