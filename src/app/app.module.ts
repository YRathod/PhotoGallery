import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogComponent } from './common/dialog/dialog.component';
import {MatDividerModule} from '@angular/material/divider'
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { AlbumFilterPipe } from './album-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PhotoGalleryComponent,
    DialogComponent,
    AlbumFilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
