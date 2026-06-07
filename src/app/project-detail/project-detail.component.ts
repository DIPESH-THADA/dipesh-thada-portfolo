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

      this.projectsService.getById(id).subscribe((project) => {
        if (!project) {
          this.router.navigate(['/']);
          return;
        }
        this.project = project;
        window.scrollTo({ top: 0, behavior: 'instant' });
      });

      this.projectsService.getNext(id).subscribe((next) => {
        this.nextProject = next;
      });

      this.projectsService.getPrev(id).subscribe((prev) => {
        this.prevProject = prev;
      });
    });
  }
}
