import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {GalleryContainerComponent} from './gallery-container/gallery-container.component';
import {GalleryPageComponent} from './gallery-page/gallery-page.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';

const galleryRoutes: Routes = [
  {
    path: '',
    component: GalleryContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'pictures',
        pathMatch: 'full'
      },
      {
        path: 'pictures',
        component: GalleryPageComponent
      },
      {
        path: 'profile',
        component: ProfilePageComponent
      }
    ]
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
