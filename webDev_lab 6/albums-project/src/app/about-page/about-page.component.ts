import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-page',
  standalone: false,
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

  constructor(private router: Router) {};

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToAlbums() {
    this.router.navigate(['/albums']);
  }
}
