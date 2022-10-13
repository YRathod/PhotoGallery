import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhotoGalleryService } from '../photo-gallery.service';
import { Photo } from '../photo';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../common/dialog/dialog.component';

@Component({
  selector: 'photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit, OnDestroy {
  photos: Photo[] = []
  // photos2: Photo[][] = []
  albums: number[] = []
  filter: any
  sub: any
  constructor(private service: PhotoGalleryService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPhotos()
  }

  getPhotos(): void {
    this.sub = this.service.getPhotos().subscribe(
      photos => {
        this.photos = photos
        this.albums = [...new Set(photos.map(item=>item.albumId))]
        /* console.log(this.albums)
        while(this.photos.length){
          this.photos2.push(this.photos.slice(0,2))
        }*/
        // console.log(this.photos2)
      }
    )
  }
  albumChange(val: any){
    console.log(val)
   // this.filter = val
  }
  ngOnDestroy(){
    if(this.sub){
        this.sub.unsubscribe()
    }
  }
  openDialog(photo: Photo, enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: 'auto',
      height: 'auto',
      maxHeight: '800px',
      maxWidth:'800px',
      data: photo,
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
