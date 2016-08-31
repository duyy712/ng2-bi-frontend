import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {LoginService} from './login.service';
import {ReportService} from './report.service';
@Component({
  selector: 'my-app',
  templateUrl: "app/app.component.html",

  directives: [ROUTER_DIRECTIVES],
  providers: [LoginService, ReportService],

})
export class AppComponent {
  title = 'Pentamic BI';
}
