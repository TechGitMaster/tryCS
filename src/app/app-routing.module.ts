import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CanActGuard } from './canCAN/can-act.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [CanActGuard], data: {
    condition: 'login'
  } },
  { path: 'admin', loadChildren: () => import('./components/modulus/modulus.module').then(ns => ns.ModulusModule), 
  canActivate: [CanActGuard], data: {
    condition: 'access'
  }  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
