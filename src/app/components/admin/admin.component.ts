import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
    constructor(public authService: AuthService) { }

}
