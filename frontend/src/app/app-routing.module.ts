import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarPageComponent } from './component/pages/car-page/car-page.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'search/:searchTerm', component: HomeComponent},
  { path: 'tag/:tag', component: HomeComponent},
  { path: 'cars/:id', component: CarPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
