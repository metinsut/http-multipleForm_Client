import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';
import qs from 'qs';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(public http: HttpClient) {}
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
            // 'Content-Type': 'application/x-www-form-urlencoded'
            // 'x-access-token': '1234567890'
        })
    };
    dataParams = new URLSearchParams();

    url = 'http://localhost:3009';
    url1 = 'http://localhost:3009/post';
    url2 = 'http://localhost:3008/post';
    url3 = 'https://jsonplaceholder.typicode.com/users';
    url4 = 'http://api-eu.xpressgaming.net/api/v1/init';
    url5 = 'http://localhost:3009/post?city=neverland';

    getPost = () => {
        return this.http
            .post(this.url, null)
            .toPromise()
            .then(res => res);
    }

    //  sendPost = body => {
    //      return this.http
    //          .post(this.url1, body, this.httpOptions)
    //          .toPromise()
    //          .then(res => res);
    //  }

    sendPost = async body => {
        //   const head = new Headers();
        //   head.append('Content-Type', 'application/x-www-form-urlencoded');
        //   head.append('x-access-token', body.data.token);
        //   const paramsString = 'q=URLUtils.searchParams&topic=api';
        //   const searchParams = new URLSearchParams(paramsString);
        //  head.append('Content-Type', 'application/json; charset=utf-8');
        const getData = await fetch(this.url5, {
            method: 'POST',
            // headers: head,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                //  'Content-Type': 'application/x-www-form-urlencoded',
                'x-access-token': body.data.token,
                Authorization: `Bearer ${body.data.token}`
            },
            body: JSON.stringify(body)
            // body: qs.stringify(body)
        }).then(res => res.json());
        return getData;
    }

    //  sendPost = body => {
    //  return axios({
    //    method: 'post',
    //    url: this.url1,
    //    data: qs.stringify(body)
    //  });

    //   return axios({
    //       method: 'post',
    //       url: this.url5,
    //       data: body
    //   });
    //  }
}
