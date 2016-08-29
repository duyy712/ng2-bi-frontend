import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';
import {LoginComponent} from './login.component';
import {GetReportComponent} from './get-report.component';
import {routing} from './app.routes';
import {LoginService} from './login.service';

@NgModule({
  imports: [BrowserModule, routing, HttpModule],
  declarations: [AppComponent, LoginComponent, GetReportComponent],
  bootstrap: [AppComponent],
  providers: [LoginService]

})
export class AppModule { }
