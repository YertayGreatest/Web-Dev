import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap, of } from 'rxjs';


export interface Album {
  userId: number;
  id: number;
  title: string;
}


export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}


@Injectable({
  providedIn: 'root'
})

export class AlbumsService {
  private baseUrl = "https://jsonplaceholder.typicode.com";


  private albumsSubject = new BehaviorSubject<Album[]>([]);
  albums$ = this.albumsSubject.asObservable();


  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    if (this.albumsSubject.value.length > 0) {
      return of(this.albumsSubject.value);
    }

    return this.http.get<Album[]>(`${this.baseUrl}/albums`).pipe(
      tap(albums => this.albumsSubject.next(albums))
    );
  }

  getAlbumById(id: number): Observable<Album> {
    const cachedAlbum = this.albumsSubject.value.find(album => album.id === id);
    
    if (cachedAlbum) {
      return of(cachedAlbum);
    }
    
    
    return this.http.get<Album>(`${this.baseUrl}/albums/${id}`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album).pipe(
      tap(updatedAlbum => {
        
        const currentAlbums = this.albumsSubject.value;
        const updatedAlbums = currentAlbums.map(a => 
          a.id === updatedAlbum.id ? updatedAlbum : a
        );
        this.albumsSubject.next(updatedAlbums);
      })
    );
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/albums/${id}`).pipe(
      tap(() => {
        
        const currentAlbums = this.albumsSubject.value;
        const updatedAlbums = currentAlbums.filter(album => album.id !== id);
        this.albumsSubject.next(updatedAlbums);
      })
    );
  }

  getPhotosByAlbumId(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${albumId}/photos`);
    
  }
}
