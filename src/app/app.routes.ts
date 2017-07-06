/*
 * All the routable components are gathered and exported here.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Routable components*/
import { ExampleComponent } from './components/example/example.component';
import { ErrorComponent } from './components/error/error.component';

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'example', pathMatch: 'full' },
    { path: 'example', component: ExampleComponent },
    { path: '**', component: ErrorComponent },
];

export const routableComponents = [
    ExampleComponent,
    ErrorComponent
];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

