import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediate';
}

interface SkillGroup {
  label: string;
  color: string;
  skills: Skill[];
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  skillGroups: SkillGroup[] = [
    {
      label: 'Frontend',
      color: '#8b5cf6',
      skills: [
        { name: 'Angular', level: 'Expert' },
        { name: 'React', level: 'Expert' },
        { name: 'TypeScript', level: 'Expert' },
        { name: 'Next.js', level: 'Advanced' },
        { name: 'Vue.js', level: 'Intermediate' },
      ],
    },
    {
      label: 'Backend',
      color: '#60a5fa',
      skills: [
        { name: 'Node.js', level: 'Expert' },
        { name: 'Express', level: 'Expert' },
        { name: 'REST APIs', level: 'Expert' },
        { name: 'FastAPI', level: 'Advanced' },
        { name: 'Python', level: 'Intermediate' },
      ],
    },
    {
      label: 'Database',
      color: '#34d399',
      skills: [
        { name: 'MongoDB', level: 'Expert' },
        { name: 'PostgreSQL', level: 'Advanced' },
        { name: 'Prisma', level: 'Advanced' },
        { name: 'Firebase', level: 'Advanced' },
        { name: 'Redis', level: 'Intermediate' },
      ],
    },
    {
      label: 'Tools & DevOps',
      color: '#f472b6',
      skills: [
        { name: 'Git', level: 'Expert' },
        { name: 'Figma', level: 'Advanced' },
        { name: 'Docker', level: 'Intermediate' },
        { name: 'AWS', level: 'Intermediate' },
        { name: 'CI/CD', level: 'Intermediate' },
      ],
    },
  ];

  levelColor(level: string): string {
    if (level === 'Expert') return '#34d399';
    if (level === 'Advanced') return '#60a5fa';
    return '#f472b6';
  }
}
