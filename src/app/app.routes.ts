/*
 * All the routable components are gathered and exported here.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Routable components*/
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminComponent } from './components/admin/admin.component';

/* Child components */
import { LoginComponent } from './components/login/login.component';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'admin', component: AdminComponent },
    // { path: 'about', component: AboutComponent },
    { path: '**', component: HomeComponent },
];

export const routableComponents = [
    HomeComponent,
    ErrorComponent,
    ContactComponent,
    AdminComponent
];

export const childComponents = [
    LoginComponent
];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

