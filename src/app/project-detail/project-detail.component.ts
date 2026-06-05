import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProjectsService, Project } from '../projects/projects.service';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css',
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;
  nextProject: Project | undefined;
  prevProject: Project | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.project = this.projectsService.getById(id);
      if (!this.project) {
        this.router.navigate(['/']);
        return;
      }
      this.nextProject = this.projectsService.getNext(id);
      this.prevProject = this.projectsService.getPrev(id);
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }
}
