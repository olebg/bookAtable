import { ContactsService } from './services/contacts.service';
import { SearchService } from './services/search.service';
import { UserService } from './services/user.service';
import { RestaurantsService } from './services/restaurants.service';
import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@NgModule({
  imports: [
  ],
  declarations: [],
  providers: [RestaurantsService, SearchService, ContactsService]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('Core module already provided! Please provide it only in the App Module!');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        RestaurantsService,
        UserService,
        SearchService,
        ContactsService
      ]
    };
  }
}
