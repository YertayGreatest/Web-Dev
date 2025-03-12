import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Album {
  userId: number;
  id: number;
  title: string;
}


@Component({
  selector: 'app-albums-page',
  standalone: false,
  templateUrl: './albums-page.component.html',
  styleUrl: './albums-page.component.css'
})

export class AlbumsPageComponent {
  albums: Album[] = [];
  loading = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {};

  ngOnInit() {
    this.fetchAlbums();
  }

  fetchAlbums(): void {
    this.loading = true;
    this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums')
      .subscribe({
        next: (data: Album[]) => {
          this.albums = data;
          this.loading = false;
        },
        error: (error: any) => {
          console.error('Error fetching albums:', error);
          this.loading = false;
        }
      })
  }

  viewAlbumDetails(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(event: Event, id: number): void {
    event.stopPropagation();
    
    this.http.delete(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .subscribe({
        next: () => {
          this.albums = this.albums.filter(album => album.id !== id);
        },
        error: (error: any) => {
          console.error(`Error deleting album ${id}:`, error);
        }
      });
  }

  backToAbout() {
    this.router.navigate(['/about']);
  }
}
