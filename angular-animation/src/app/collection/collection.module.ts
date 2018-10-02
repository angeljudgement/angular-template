import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CollectionMainPageComponent} from './collection-main-page/collection-main-page.component';
import {WinterSeasonComponent} from './winter-season/winter-season.component';
import {SpringSeasonComponent} from './spring-season/spring-season.component';
import {SummerSeasonComponent} from './summer-season/summer-season.component';
import {FallSeasonComponent} from './fall-season/fall-season.component';
import {CurrentSeasonComponent} from './current-season/current-season.component';
import {RouterModule} from '@angular/router';
import {CollectionRoutingModule} from './collection-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CollectionRoutingModule
  ],
  declarations:
    [CollectionMainPageComponent,
      CollectionMainPageComponent,
      CurrentSeasonComponent,
      WinterSeasonComponent,
      SpringSeasonComponent,
      SummerSeasonComponent,
      FallSeasonComponent]
})
export class CollectionModule {
}
