import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    selector: 'app-login',
})
export class LoginComponent {
    credentials = new Credentials(
        'info@anoukstouten.com',
        'welkom123',
        '',
        false
    );

    constructor(public authService: AuthService) { }

    login(credentials: Credentials) {
        this.authService.login(credentials.email, credentials.password)
            .then(function(error){
                if (error) { credentials.error = error['message'] }
                else { credentials.isLoggedIn = true }
            });
    }

    logout() {
        this.authService.logout();
    }
}

class Credentials {
    constructor(public email: string, public password: string, public error: any, public isLoggedIn: boolean) { }
}
