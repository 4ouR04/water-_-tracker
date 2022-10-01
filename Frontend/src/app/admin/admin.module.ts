import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { RecordsComponent } from './records/records.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { NewRecordComponent } from './new-record/new-record.component';
import { NotificationsComponent } from './notifications/notifications.component';

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
      },
      {
        path: 'new',
        component: NewRecordComponent,
      },
      {
        path: 'analytics',
        component: AnalyticsComponent,
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ]
  },
];

@NgModule({
  declarations: [AdminComponent, RecordsComponent, HomeComponent, SettingsComponent, AnalyticsComponent, NewRecordComponent],
  imports: [CommonModule, RouterModule.forChild(adminRoutes)],
})
export class AdminModule {}
