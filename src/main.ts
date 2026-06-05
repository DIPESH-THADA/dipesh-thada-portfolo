import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app.component';
import { HomeComponent } from './app/home/home.component';

HomeComponent;

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
