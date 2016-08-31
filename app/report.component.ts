import { Component, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ReportService} from './report.service';
import { ActivatedRoute } from '@angular/router';
import {Report} from './report';
import {ReportDetailComponent} from './report-detail.component';

@Component({
  selector: 'get-report',
  templateUrl: 'app/report.component.html',
  providers: [ReportService]

})
export class ReportComponent implements OnInit {
  reports: Report[];
  selectedReport: Report;
  constructor(public reportService: ReportService, public router: Router) { }

  getReports() {
    this.reportService.getReports()
      .subscribe(
      reports => this.reports = reports,
      err => console.log(err)
      );
  }

  ngOnInit(): void {
    this.getReports();

  }
  // onSelect(report: Report): void {
  //    this.selectedReport = report;
  //  }

  gotoDetail(report: Report): void {
    this.selectedReport = report;
    this.router.navigate(['/detail', this.selectedReport.Id]);
  }
}
