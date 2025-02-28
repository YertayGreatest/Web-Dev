import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

interface detAlbum{
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}



@Component({
  selector: 'app-album-detail',
  standalone: false,
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})

export class AlbumDetailComponent implements OnInit{
  albumId: number = 0;
  detAlbums: detAlbum[] = [];
  loading = false;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.albumId = +params['id'];
        this.fetchAlbumDetails();
      })
  }

  fetchAlbumDetails(): void{
    this.loading = true;
    this.http.get<detAlbum[]>(`https://jsonplaceholder.typicode.com/albums/${this.albumId}/photos`)
    .subscribe({
      next: (data: detAlbum[]) => {
        this.detAlbums = data.length > 0 ? [data[0]] : [];
        this.loading = false;
      },
      error: (err: any) => {
        console.error(err);
        this.loading = false;
      }
    })
  }
}
