import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './_helpers/auth.guard';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ListComponent } from './moments/list/list.component';
import { AddComponent } from './moments/add/add.component';

const routes: Routes = [
  {path: 'signin', component: SigninComponent, pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'moments/list', component: ListComponent, canActivate: [AuthGuard]},
  {path: 'moments/add', component: AddComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'signin' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
