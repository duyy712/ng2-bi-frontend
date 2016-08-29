import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import { Observable }     from 'rxjs/Rx';

@Injectable()
export class GetReportService {
    token: string;
    constructor(private router: Router, private http: Http) { }

    //header = "Authorization=Bearer " + localStorage.getItem('access_token');

    getReport(): Observable<any> {
        // console.log(1);
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
        return this.http.get('http://192.168.11.6:3011/breeze/report/Reports',{headers})
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: any) {
        let body = res.json();
        return body.data || {};
    }
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}




