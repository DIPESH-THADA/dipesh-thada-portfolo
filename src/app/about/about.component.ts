import { Component } from '@angular/core';

interface SkillGroup {
  label: string;
  color: string;
  skills: string[];
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  skillGroups: SkillGroup[] = [
    {
      label: 'Frontend',
      color: '#8b5cf6',
      skills: ['Angular', 'React', 'Vue.js', 'TypeScript', 'Next.js']
    },
    {
      label: 'Backend',
      color: '#60a5fa',
      skills: ['Node.js', 'Python', 'FastAPI', 'Express', 'REST APIs']
    },
    {
      label: 'Database',
      color: '#34d399',
      skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Redis', 'Prisma']
    },
    {
      label: 'Tools & DevOps',
      color: '#f472b6',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Figma']
    }
  ];
}
