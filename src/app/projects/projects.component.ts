import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService, Project } from './projects.service';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: Project[];

  constructor(private projectsService: ProjectsService, private router: Router) {
    this.projects = this.projectsService.getAll();
  }

  openProject(id: number): void {
    this.router.navigate(['/project', id]);
  }
}
