import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PhotoGalleryService } from './photo-gallery.service';

describe('PhotoGalleryService', () => {
  let service: PhotoGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PhotoGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
