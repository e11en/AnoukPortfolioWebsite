import { Injectable, ErrorHandler, ApplicationRef } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Subject } from 'rxjs/Subject';

const Dropbox = require('dropbox');
const localStorage = window.localStorage;


@Injectable()
export class DropboxService {

    private http: Http;
    private dropbox: any;

    constructor(http: Http) {
        this.http = http;
        this.dropbox = new Dropbox({ accessToken: 'O-uco2zk0boAAAAAAACg6swMs66KniubllZPVDl8lW417JqXzpdclK4qZsxWeUjG' });
        this.doSomething();
    }

    private doSomething() {
        // this.dropbox.usersGetCurrentAccount().then((data) => {
        //     console.log(data);
        // });

        const that = this;
        this.dropbox.filesListFolder({path: ''})
                    .then(function(response) {
                        response['entries'].forEach(element => {
                            that.dropbox.filesGetTemporaryLink(element['path_display']).then((link) => {
                                console.log(link);
                            });
                        });
                        console.log(response);
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
    }


    // revokeAccess() {
    //     this.http.post('https://api.coinbase.com/oauth/revoke', {
    //         "token": this.accessObject.access_token
    //     })
    //     .subscribe(
    //         response => {
    //             this.accessObject = null;
    //             localStorage.removeItem("coinbase_access_object");
    //             this.setAuthenticated("revoked_access");
    //         },
    //         err => console.log(err), 
    //         () => console.log('Access revoked')
    //     );
    // }

   
}