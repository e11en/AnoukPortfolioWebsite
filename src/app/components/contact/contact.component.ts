import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare let $: any;


@Component({
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

    name: string;
    email: string;
    message: string;

    constructor(private router: Router) {}

    submit() {
        if (this.validate()) {
            $.ajax({
                url: 'http://anoukstouten.com/sendmail.php',
                type: 'POST',
                data: {
                    name: this.name,
                    email: this.email,
                    message: this.message
                }
            });
            this.router.navigateByUrl('/');
        }
    }

    validate() {
        this.resetInputErrors();

        let valid = true;
        if (!this.name) {
            valid = false;
            $('#name').addClass('has-error');
        }
        if (!this.email) {
            valid = false;
            $('#email').addClass('has-error');
        }
        if (!this.message) {
            valid = false;
            $('#message').addClass('has-error');
        }
        return valid;
    }

    resetInputErrors() {
        $('#name').removeClass('has-error');
        $('#email').removeClass('has-error');
        $('#message').removeClass('has-error');
    }
}
