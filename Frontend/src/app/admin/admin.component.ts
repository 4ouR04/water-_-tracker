import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  displayMode: boolean = true
  width: number = 764
  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth < this.width){
      this.displayMode = false
    }
    else{
      this.displayMode = true
    }
  }
  switchMode() {
    this.displayMode = !this.displayMode
  }

}
