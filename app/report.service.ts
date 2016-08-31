import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import { Observable }     from 'rxjs/Rx';
import {Report} from './report';

@Injectable()
export class ReportService {
  constructor(private router: Router, private http: Http) { }
  getReports(): Observable<Report[]> {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.get('http://192.168.11.6:3011/breeze/report/Reports', { headers })
    .map(this.extractData)
    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    //console.log(body);
    return body || {};
  }
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
  getReport(id: number): Observable<Report> {
    return this.getReports()
    .map(reports => reports.find(report => report.Id === id));
  }
}
