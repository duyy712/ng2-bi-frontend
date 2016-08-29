import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {LoginService} from './login.service';
import {GetReportService} from './get-report.service';
@Component({
  selector: 'my-app',
 templateUrl: "app/app.component.html",

  directives: [ROUTER_DIRECTIVES],
  providers: [LoginService, GetReportService],

})
export class AppComponent {
  title = 'Pentamic BI';
}
