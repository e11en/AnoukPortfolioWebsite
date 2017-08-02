import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

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
}
