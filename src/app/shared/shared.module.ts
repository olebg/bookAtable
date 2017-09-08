import { SearchByPipe } from './../pipes/searchBy.pipe';
import { RestaurantPartialComponent } from './../restaurants/list-restaurants/restaurant-partial/restaurant-partial.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    FooterComponent,
    SearchComponent,
    RestaurantPartialComponent,
    SearchByPipe
],
providers: [
],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RestaurantPartialComponent
  ]
})
export class SharedModule {

 }
