import { Component } from '@angular/core';
import { ContactStarComponent } from '../contact-star/contact-star.component';

@Component({
  selector: 'app-contact',
  imports: [ContactStarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  checkName: boolean = true;
  checkAge: boolean = true;
  checkEmail: boolean = true;
  checkPassword: boolean = true;
}
