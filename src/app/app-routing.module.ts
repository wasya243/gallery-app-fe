import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {MasterGuard} from './auth/master-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('src/app/auth-pages/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'gallery',
    canActivate: [MasterGuard],
    loadChildren: () => import('src/app/gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
