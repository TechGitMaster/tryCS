import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CanActGuard } from './canCAN/can-act.guard';
import { ModulusModule } from './components/modulus/modulus.module';
import { HttpClientModule } from '@angular/common/http';
import { ServService } from './serviceS/serv.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModulusModule,
    HttpClientModule
  ],
  providers: [CanActGuard, ServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
