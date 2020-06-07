import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {GalleryContainerComponent} from './gallery-container/gallery-container.component';

const galleryRoutes: Routes = [
  {
    path: '',
    component: GalleryContainerComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(galleryRoutes),
  ],
  providers: [],
  exports: [
    RouterModule
  ]
})
export class GalleryRoutingModule {
}
