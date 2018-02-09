import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent  {

    constructor(
        private route: ActivatedRoute,
        private router: Router
      ) {}

    test() {
        this.router.navigate(['/about', { id: { test: 1 }, foo: 'foo' }]);
    }
 }
