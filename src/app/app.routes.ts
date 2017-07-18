/*
 * All the routable components are gathered and exported here.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Routable components*/
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';


export const AppRoutes: Routes = [
    { path: '', component: HeaderComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: ErrorComponent },
];

export const routableComponents = [
    HomeComponent,
    ErrorComponent,
    HeaderComponent,
    ContactComponent
];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

