import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulusRoutingModule } from './modulus-routing.module';
import { AdminComponent } from '../admin/admin.component';
import { UserComponent } from '../user/user.component';
import { InformationComponent } from '../information/information.component';
import { PostComponent } from '../post/post.component';



@NgModule({
  declarations: [
    AdminComponent,
    UserComponent,
    InformationComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    ModulusRoutingModule
  ]
})
export class ModulusModule { }
