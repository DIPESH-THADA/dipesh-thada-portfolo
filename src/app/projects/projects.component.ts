import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService, Project } from './projects.service';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  activeFilter = 'All';

  private allProjects: Project[] = [];

  constructor(private projectsService: ProjectsService, private router: Router) {}

  ngOnInit(): void {
    this.projectsService.getAll().subscribe((projects) => {
      this.allProjects = projects;
      this.projects = projects;
    });
  }

  get categories(): string[] {
    const cats = [...new Set(this.allProjects.map((p) => p.category))];
    return ['All', ...cats];
  }

  setFilter(category: string): void {
    this.activeFilter = category;
    this.projects =
      category === 'All'
        ? this.allProjects
        : this.allProjects.filter((p) => p.category === category);
  }

  openProject(id: number): void {
    this.router.navigate(['/project', id]);
  }
}
