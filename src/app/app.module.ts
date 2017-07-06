import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

/* Modules */
import { AppRoutingModule, routableComponents } from './app.routes';

/* Services */
import { ExampleService } from './services/example.service';

/* Components */
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent, NavComponent,
    routableComponents
  ],
  imports: [
    RouterModule, AppRoutingModule,
    HttpModule
  ],
  providers: [ ExampleService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
