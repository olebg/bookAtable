import { UsersModule } from './users/users.module';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { DetailsRestaurantComponent } from './restaurants/details-restaurant/details-restaurant.component';
import { RestaurantsService } from './services/restaurants.service';
import { RestaurantPartialComponent } from './restaurants/list-restaurants/restaurant-partial/restaurant-partial.component';
import { ListRestaurantsComponent } from './restaurants/list-restaurants/list-restaurants.component';
import { firebaseConfig } from './firebase.config';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RestaurantsModule,
    UsersModule
  ],
  providers: [RestaurantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
