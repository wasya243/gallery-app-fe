import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule)
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
