import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
    selector: 'app-file',
    templateUrl: './file.component.html'
})
export class FileComponent implements OnInit {
    url = 'http://localhost:3009/upload';
    files: any[] = [];
    preImage: any[] = [];
    constructor() {}

    ngOnInit() {}

    fileChange = e => {
        this.files.push(e.target.files);
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onloadend = () => {
            this.preImage.push(reader.result);
        };

        reader.readAsDataURL(file);
        console.log(this.files);
    }

    sendFile = () => {
        const formData = new FormData();
        this.files.map(item => {
            formData.append('file', item[0]);
        });
        formData.append('user', '123456');
        axios({
            method: 'post',
            url: this.url,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => console.log(res));
    }
}
