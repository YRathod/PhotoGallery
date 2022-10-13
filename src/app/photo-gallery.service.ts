import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoGalleryService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos'

  constructor(
    private http: HttpClient
  ) { }

  getPhotos(): Observable<Photo[]>{
    return this.http.get<Photo[]>(this.apiUrl).pipe(
      tap(_=> this.log('fetch photos'))
      )
  }

  log(message: string){
    console.log(message)
  }
}
