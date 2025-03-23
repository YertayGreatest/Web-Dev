import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService, Album } from '../albums.service';


@Component({
  selector: 'app-album-detail',
  standalone: false,
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})

export class AlbumDetailComponent implements OnInit{
  albumId: number = 0;
  album: Album | null = null;
  loading = false;
  titleLoading = false;
  editTitle: string = '';

  constructor(private albumsService: AlbumsService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.albumId = +params['id'];
        this.fetchAlbumDetails();
      })
  }

  fetchAlbumDetails(): void{
    this.loading = true;
    this.albumsService.getAlbumById(this.albumId)
    .subscribe({
      next: (data: Album) => {
        this.album = data;
        this.editTitle = data.title;
        this.loading = false;
      },
      error: (err: any) => {
        console.error(err);
        this.loading = false;
      }
    })
  }

  saveTitle(): void {
    if (!this.album) {
      return;
    }

    
    this.titleLoading = true;
    const updatedAlbum: Album = {
      ...this.album,
      title: this.editTitle
    };
    
    this.albumsService.updateAlbum(updatedAlbum)
    .subscribe({
      next: (data: Album) => {
        this.album = data;
        this.titleLoading = false;
      },
      error: (err: any) => {
        console.error(err);
        this.titleLoading = false;
      }
    });
  }

  
  viewPhotos(): void {
    this.router.navigate(['/albums', this.albumId, 'photos']);
  }
  
}
