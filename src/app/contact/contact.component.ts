import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  submitted = false;
  loading = false;

  onSubmit() {
    if (!this.form.name || !this.form.email || !this.form.message) return;
    this.loading = true;
    setTimeout(() => {
      this.submitted = true;
      this.loading = false;
    }, 1000);
  }

  resetForm() {
    this.form = { name: '', email: '', subject: '', message: '' };
    this.submitted = false;
  }
}
