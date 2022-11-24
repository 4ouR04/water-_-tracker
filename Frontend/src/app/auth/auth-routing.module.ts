import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
//   {
//     path: '',
//     redirectTo: 'auth'
//   }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
