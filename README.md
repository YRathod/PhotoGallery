# PhotoGallery

`ng serve` `http://localhost:4200/`
`ng test`

High level features-

1. Landing page - Display thumbnail images with title and Album #
2. User can filter List by Album # (added dropdown)
3. When user click on image, it will open modal popup with bigger image
4. slow animation when user click on thumbnail image top open large image in popup

Technical points

1. Used Material UI library component for better look and feel - MatDialogModule, MatButtonModule,MatDividerModule,MatCardModule,MatSelectModule
2. http get service call to get images using HttpModule
3. used display:grid, I tried to implement masonry layout - similar to Pin-interest layout but wasn't able to finish exactly in time line
   display: grid;
   grid-template-columns: repeat(1, 2fr);
   grid-template-rows: masonry;
   padding: 10px;

4. Added Pipe filter in \*ngFor to filter the photo by album

Testing
8 test cases added - all are successful
I required to change a lot to configure the testBud Properly,
Added Mock service with jasmine.spy. with given time - its possible to add more relevant test cases.

PhotoGalleryComponent
// should create
// should Match first Card loaded
PhotoGalleryService
// should be created
DialogComponent
// should create
AppComponent
// should have as title 'photo-gallery'
// should render title
// should create the app
AlbumFilterPipe
// create an instance

Nice to Have feature

1. infinite scrolling using Intersection Observer, new feature in javascript
2. masonry Layout
3. Horizontal carousal to display the List of Albums with over lapped images (like google photos), filter functionality can be integrated here
4. images should display in two columns and it has to be responsive depending on device size.
