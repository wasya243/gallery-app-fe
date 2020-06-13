import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GalleryRoutingModule} from './gallery-routing.module';
import {GalleryContainerComponent} from './gallery-container/gallery-container.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {GalleryPageComponent} from './gallery-page/gallery-page.component';

@NgModule({
  declarations: [
    GalleryContainerComponent,
    GalleryPageComponent,
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule {
}
