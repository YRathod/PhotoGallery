import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from './photo';
@Pipe({
  name: 'albumFilter'
})
export class AlbumFilterPipe implements PipeTransform {

  transform(photos: Photo[], filterByAlbumId: any): Photo[] {
    if(!photos || !filterByAlbumId || filterByAlbumId == 'None') {
      return photos ? photos : []
    }
    return photos.filter(item => item.albumId === filterByAlbumId)
  }

}
