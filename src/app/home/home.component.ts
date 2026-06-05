import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ProjectsComponent } from '../projects/projects.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ProjectsComponent, AboutComponent, ContactComponent],
  template: `
    <app-hero></app-hero>
    <app-projects></app-projects>
    <app-about></app-about>
    <app-contact></app-contact>
  `,
})
export class HomeComponent {}
