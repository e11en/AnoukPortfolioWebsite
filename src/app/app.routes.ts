/*
 * All the routable components are gathered and exported here.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Routable components*/
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: '**', component: ErrorComponent },
];

export const routableComponents = [
    HomeComponent,
    ErrorComponent
];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

