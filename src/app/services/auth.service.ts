import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { AngularFireModule } from 'angularfire2';
declare let firebase: any;

@Injectable()
export class AuthService {
    isLoggedIn: boolean;
    authState: any = null;

    constructor(private afAuth: AngularFireAuth) {
        this.afAuth.authState.subscribe((auth) => {
            this.authState = auth
        });
    }

    login(email: string, password: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.authState = user;
                this.isLoggedIn = true;
            })
            .catch(function(error) { return error });
    }

    logout() {
        this.afAuth
            .auth
            .signOut();
    }
    //
    // upload() {
    //     // Create a root reference
    //     let storageRef = firebase.storage().ref();
    //
    //     let success = false;
    //     // This currently only grabs item 0, TODO refactor it to grab them all
    //     for (let selectedFile of [(<HTMLInputElement>document.getElementById('file')).files[0]]) {
    //         console.log(selectedFile);
    //         // Make local copies of services because "this" will be clobbered
    //         let router = this.router;
    //         let af = this.af;
    //         let folder = this.folder;
    //         let path = `/${this.folder}/${selectedFile.name}`;
    //         var iRef = storageRef.child(path);
    //         iRef.put(selectedFile).then((snapshot) => {
    //             console.log('Uploaded a blob or file! Now storing the reference at',`/${this.folder}/images/`);
    //             af.database.list(`/${folder}/images/`).push({ path: path, filename: selectedFile.name })
    //         });
    //     }
    // }
}
