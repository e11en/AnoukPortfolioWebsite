/*
 * This is where the app is being bootstrapped.
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

const isInProduction = false;
if (isInProduction) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
