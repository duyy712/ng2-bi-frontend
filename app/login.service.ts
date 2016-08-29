import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class LoginService {
    token: string;
    constructor(private router: Router, private http: Http) {
        this.token = localStorage.getItem('access_token');
    }

    // urlServer: string = 'http://192.168.11.6:3009/token';

    login(usr: string, pwd: string) {

        return this.http.post('http://192.168.11.6:3011/token',
            "grant_type=password&username=" + usr + "&password=" + pwd + "&client_id=webapp"
            , {
                headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded'
                })
            })
            .map((res: any) => {
                let data = res.json();
                this.token = data.token;
                localStorage.setItem('access_token', data.access_token);
                if (res) console.log('Success');

                // console.log(localStorage.getItem('access_token'));
            });
    }

}

