import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';
import { ReviewsComponent } from './details-restaurant/reviews/reviews.component';
import { OverviewComponent } from './details-restaurant/overview/overview.component';
import { RestaurantsRoutes } from './restaurants.routing';
import { RestaurantsService } from './../core/services/restaurants.service';
import { RestaurantPartialComponent } from './list-restaurants/restaurant-partial/restaurant-partial.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRestaurantsComponent } from './list-restaurants/list-restaurants.component';
import { DetailsRestaurantComponent } from './details-restaurant/details-restaurant.component';

@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    FormsModule,
    RestaurantsRoutes
  ],
  declarations: [
    ListRestaurantsComponent,
    RestaurantPartialComponent,
    DetailsRestaurantComponent,
    OverviewComponent,
    ReviewsComponent
],
  providers: [RestaurantsService],
})
export class RestaurantsModule { }
