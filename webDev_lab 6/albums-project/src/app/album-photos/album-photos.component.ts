import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService, Photo } from '../albums.service';


@Component({
  selector: 'app-album-photos',
  standalone: false,
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})


export class AlbumPhotosComponent implements OnInit{
  albumId: number = 0;
  photos: Photo[] = [];
  loading = false;

  constructor (
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private router: Router
  ) {};


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.albumId = +params['id'];
      this.fetchPhotos();
    });
  }

  fetchPhotos(): void {
    this.loading = true;
    this.albumsService.getPhotosByAlbumId(this.albumId)
    .subscribe({
      next: (data: Photo[]) => {
        this.photos = data.filter(photo => photo.albumId === this.albumId);
        this.loading = false;
      },
      error: (err: any) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}
