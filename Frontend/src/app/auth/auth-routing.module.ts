import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const authRoutes: Routes = [
  {
    path: '',
    // component:
  },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
