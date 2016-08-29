import { Component, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GetReportService} from './get-report.service';
import { ActivatedRoute } from '@angular/router';
//import {Report} from './report';

@Component({
  selector: 'get-report',
  templateUrl: 'app/get-report.component.html',
  providers: [GetReportService]

})
export class GetReportComponent {
 // reports: Report[];
  constructor(public getReportService: GetReportService, public router: Router) { }

  getReport() {
    this.getReportService.getReport()
      .subscribe(
      reports => console.log(reports),
      err => console.log(err)
      );
    // subscribe((res: any) => {
    //   //console.log(res)
    // })
  }
}

