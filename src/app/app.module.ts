import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MdInputModule, MdIconModule, MdProgressBarModule } from '@angular/material';

/* Modules */
import { AppRoutingModule, routableComponents, childComponents } from './app.routes';

/* Components */
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

/* Services */
import { AuthService } from './services/auth.service';
import { UploadService } from './services/upload.service';

/* Directives */
import { DndDirective } from './directives/drag-n-drop.directive';

export const firebaseConfig = {
  apiKey: 'AIzaSyAci5Oo8U2kM586s57Nn98-9gkADJ8DSpw',
  authDomain: 'anoukstouten-6c5df.firebaseapp.com',
  databaseURL: 'https://anoukstouten-6c5df.firebaseio.com',
  projectId: 'anoukstouten-6c5df',
  storageBucket: 'gs://anoukstouten-6c5df.appspot.com/',
  messagingSenderId: '77126525968'
};

@NgModule({
  declarations: [
    AppComponent, NavComponent,
    routableComponents, PortfolioComponent,
    childComponents, DndDirective
  ],
  imports: [
    RouterModule, AppRoutingModule,
    HttpModule, CommonModule, BrowserModule,
    FormsModule, MdInputModule, BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule, MdIconModule,
    AngularFireAuthModule, MdProgressBarModule
  ],
  exports: [
    BrowserModule, CommonModule
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [AuthService, UploadService]
})
export class AppModule { }
