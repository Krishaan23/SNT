import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './dashboard/forms/forms.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
