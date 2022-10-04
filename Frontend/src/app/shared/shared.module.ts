import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './search.pipe';
import { ShortenPipe } from './pipes/shorten.pipe';



@NgModule({
  declarations: [
    SearchPipe,
    ShortenPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchPipe
  ]
})
export class SharedModule { }
