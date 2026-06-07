import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// To enable real form submissions:
// 1. Sign up at https://formspree.io (free)
// 2. Create a new form and copy your form ID
// 3. Replace YOUR_FORM_ID below with your actual form ID
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  private http = inject(HttpClient);

  form = { name: '', email: '', subject: '', message: '' };
  submitted = false;
  loading = false;
  emailError = false;
  submitError = false;

  get isFormValid(): boolean {
    return !!(this.form.name && this.form.email && this.form.message);
  }

  onSubmit(): void {
    this.emailError = false;
    this.submitError = false;

    if (!this.isFormValid) return;

    if (!this.isValidEmail(this.form.email)) {
      this.emailError = true;
      return;
    }

    this.loading = true;

    this.http
      .post(FORMSPREE_ENDPOINT, this.form, {
        headers: { Accept: 'application/json' },
      })
      .subscribe({
        next: () => {
          this.submitted = true;
          this.loading = false;
        },
        error: () => {
          this.submitError = true;
          this.loading = false;
        },
      });
  }

  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  resetForm(): void {
    this.form = { name: '', email: '', subject: '', message: '' };
    this.submitted = false;
    this.submitError = false;
    this.emailError = false;
  }
}
