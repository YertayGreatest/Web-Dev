import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AlbumsService, Album } from '../albums.service';



@Component({
  selector: 'app-albums-page',
  standalone: false,
  templateUrl: './albums-page.component.html',
  styleUrl: './albums-page.component.css'
})

export class AlbumsPageComponent implements OnInit {
  albums: Album[] = [];
  loading = false;

  constructor(
    private albumsService: AlbumsService,
    private router: Router
  ) {};

  ngOnInit() {
    this.fetchAlbums();
  }

  fetchAlbums(): void {
    this.loading = true;
    this.albumsService.getAlbums()
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
    
    this.albumsService.deleteAlbum(id)
      .subscribe({
        next: () => {
          this.albumsService.getAlbums().subscribe(albums => {
            this.albums = albums;
          })
        },
        error: (error: any) => {
          console.error(`Error in deleting album ${id}:`, error);
        }
      });
  }

  backToAbout() {
    this.router.navigate(['/about']);
  }
}
