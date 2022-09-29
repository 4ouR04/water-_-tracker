import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { RecordsComponent } from './records/records.component';
import { HomeComponent } from './home/home.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'records',
        component: RecordsComponent,
      }
    ]
  },
];

@NgModule({
  declarations: [AdminComponent, RecordsComponent, HomeComponent],
  imports: [CommonModule, RouterModule.forChild(adminRoutes)],
})
export class AdminModule {}
