import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

/* Modules */
import { AppRoutingModule, routableComponents } from './app.routes';

/* Services */
import { ExampleService } from './services/example.service';

/* Components */
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent, NavComponent,
    FooterComponent, routableComponents
  ],
  imports: [
    RouterModule, AppRoutingModule,
    HttpModule, CommonModule
  ],
  exports: [
    BrowserModule, CommonModule
  ],
  providers: [ ExampleService ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
