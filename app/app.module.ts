import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';
import {LoginComponent} from './login.component';
import {ReportComponent} from './report.component';
import {routing} from './app.routes';
import {LoginService} from './login.service';
import {ReportDetailComponent} from './report-detail.component';
@NgModule({
  imports: [BrowserModule, routing, HttpModule],
  declarations: [AppComponent, LoginComponent, ReportComponent, ReportDetailComponent],
  bootstrap: [AppComponent],
  providers: [LoginService]

})
export class AppModule { }
