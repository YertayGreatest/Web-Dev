import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AlbumsPageComponent } from './albums-page/albums-page.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent},
  { path: 'about', component: AboutPageComponent},
  { path: 'albums', component: AlbumsPageComponent},
  { path: 'albums/:id', component: AlbumDetailComponent},
  {path: '**', redirectTo: '/albums'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
