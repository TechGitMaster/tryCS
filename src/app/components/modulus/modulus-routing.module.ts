import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { ResolveResolver } from '../resolve.resover';
import { UserComponent } from '../user/user.component';
import { CanActGuard } from 'src/app/canCAN/can-act.guard';
import { InformationComponent } from '../information/information.component';
import { PostComponent } from '../post/post.component';

const routes: Routes = [
  { path: '', component: AdminComponent, resolve: { data: ResolveResolver }, data: { condition: true }  },
  { path: 'user/:id', component: UserComponent, canActivate: [ CanActGuard ], data: {
    condition: 'access'
  }, children: [
    { path: 'info', component: InformationComponent, resolve: { data: ResolveResolver }, data: { condition: true } },
    { path: 'post', component: PostComponent, resolve: { data: ResolveResolver }, data: { condition: false }}
  ]  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulusRoutingModule { }
