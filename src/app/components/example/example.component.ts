import { Component } from '@angular/core';
import { MdSnackBar } from '@angular/material';

import { ExampleService } from '../../services/example.service';
import { SnackbarComponent } from '../../core/material/snackbar.component';

@Component({
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
    vehicles = this.exampleService.getVehicles();

    constructor(private exampleService: ExampleService, public snackBar: MdSnackBar) { }

    openSnackBar() {
        this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 500,
        });
    }
}
