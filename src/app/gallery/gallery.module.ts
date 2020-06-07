import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GalleryRoutingModule} from './gallery-routing.module';
import {GalleryContainerComponent} from './gallery-container/gallery-container.component';


@NgModule({
  declarations: [GalleryContainerComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule {
}
