import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RecordsComponent } from './records/records.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { NewRecordComponent } from './new-record/new-record.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditRecordComponent } from './edit-record/edit-record.component';
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [AdminComponent, RecordsComponent, HomeComponent, SettingsComponent, AnalyticsComponent, NewRecordComponent, EditRecordComponent],
  imports: [CommonModule,  AdminRoutingModule,FormsModule,ReactiveFormsModule,MatButtonModule,MatPaginatorModule,NgxPaginationModule,SharedModule, MatExpansionModule],
  exports: [MatButtonModule,MatExpansionModule]
})
export class AdminModule {}
