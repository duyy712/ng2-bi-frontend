import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Report } from './report';
import { ReportService } from './report.service';

@Component({
  selector: 'report-detail',
  templateUrl: 'app/report-detail.component.html',
})
export class ReportDetailComponent implements OnInit {
  @Input()
  report: Report;

  constructor(
    private reportService: ReportService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = parseInt(params['id']);
      this.reportService.getReport(id)
        .subscribe(report => this.report = report);
    })

  }
}
