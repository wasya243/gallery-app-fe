import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {AuthContainerComponent} from './auth-container/auth-container.component';

const authRoutes: Routes = [
  {
    path: '',
    component: AuthContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
      },
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'sing-up',
        component: SignUpComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(authRoutes),
  ],
  providers: [],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {
}
