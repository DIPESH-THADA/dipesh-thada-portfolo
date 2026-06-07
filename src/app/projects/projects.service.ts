import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, map } from 'rxjs';

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  role: string;
  tools: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  year: string;
  duration: string;
  category: string;
  features: string[];
  highlights: { label: string; value: string }[];
}

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private http = inject(HttpClient);

  private projects$ = this.http
    .get<Project[]>('data/projects.json')
    .pipe(shareReplay(1));

  getAll(): Observable<Project[]> {
    return this.projects$;
  }

  getById(id: number): Observable<Project | undefined> {
    return this.projects$.pipe(map((projects) => projects.find((p) => p.id === id)));
  }

  getNext(id: number): Observable<Project | undefined> {
    return this.projects$.pipe(
      map((projects) => {
        const idx = projects.findIndex((p) => p.id === id);
        return projects[(idx + 1) % projects.length];
      })
    );
  }

  getPrev(id: number): Observable<Project | undefined> {
    return this.projects$.pipe(
      map((projects) => {
        const idx = projects.findIndex((p) => p.id === id);
        return projects[(idx - 1 + projects.length) % projects.length];
      })
    );
  }
}
