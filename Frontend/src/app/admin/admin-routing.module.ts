import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminComponent } from './admin.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { HomeComponent } from './home/home.component';
import { NewRecordComponent } from './new-record/new-record.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RecordsComponent } from './records/records.component';
import { SettingsComponent } from './settings/settings.component';

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
    imports:[RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminRoutingModule{}