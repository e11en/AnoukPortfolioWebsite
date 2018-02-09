import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

/* Modules */
import { AppRoutingModule, routableComponents } from './app.routes';

/* Services */
import { DropboxService } from './services/dropbox.service';

/* Components */
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent, NavComponent,
    routableComponents, PortfolioComponent
  ],
  imports: [
    RouterModule, AppRoutingModule,
    HttpModule, CommonModule, BrowserModule,
    FormsModule
  ],
  exports: [
    BrowserModule, CommonModule
  ],
  providers: [ DropboxService ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
