import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGalleryComponent } from './photo-gallery.component';
import { PhotoGalleryService } from '../photo-gallery.service';
import { defer } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {Pipe, PipeTransform} from '@angular/core';
import { Photo } from '../photo';
@Pipe({name: 'albumFilter'})
class MockPipe implements PipeTransform {
    transform(photos: Photo[], filterByAlbumId: any): Photo[] {
        //Do stuff here, if you want
        return photos;
    }
}

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
const photos = [
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },  {
    "albumId": 2,
    "id": 62,
    "title": "dolorem cumque quo nihil inventore enim",
    "url": "https://via.placeholder.com/600/65ad4f",
    "thumbnailUrl": "https://via.placeholder.com/150/65ad4f"
  }]


class PhotoGalleryServiceSpy {

  /* emit cloned test hero */
  getPhotos = jasmine.createSpy('getPhotos').and.callFake(
      () => asyncData(Object.assign({}, photos)));

}

describe('PhotoGalleryComponent', () => {
  let component: PhotoGalleryComponent;
  let fixture: ComponentFixture<PhotoGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoGalleryComponent, MockPipe ],
      providers: [{provide: PhotoGalleryService, useClass: PhotoGalleryServiceSpy},
        {provide: MatDialogRef,useValue: {}},
        {provide: MatDialog,useValue: {}},
        ]
    })
    /*.overrideComponent(
      PhotoGalleryComponent,
      {set: {providers: [{provide: PhotoGalleryService, useClass: PhotoGalleryServiceSpy}]}})
    )*/.compileComponents();

    fixture = TestBed.createComponent(PhotoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Match first Card loaded', () => {
    // const fixture = TestBed.createComponent(PhotoGalleryComponent);
    // fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    console.log(compiled.querySelectorAll('mat-card'))
    expect(compiled.querySelectorAll('mat-card')).toBeTruthy();
  });
});

