import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {Profile} from './profile';

const routes: Routes = [
  {path:'' , component: SearchComponent},
  {path: 'navbar' , component:NavbarComponent},
  { path: 'profile', component: ProfileComponent },
{path:'search' , component:SearchComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
