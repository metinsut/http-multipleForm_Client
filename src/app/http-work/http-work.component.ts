import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
    selector: 'app-http-work',
    templateUrl: './http-work.component.html'
})
export class HttpWorkComponent implements OnInit {
    body = {
        data: {
            name: 'John Doe',
            job: {
                title: 'frontend',
                year: 1
            },
            token: '123456789'
        }
    };


    constructor(private getApi: ApiService) {}
    ngOnInit() {
        // this.getApi.getPost().then(res => console.log(res));
    }

    sendData = () => {
        this.getApi.sendPost(this.body).then(res => console.log(res));
    }
}
