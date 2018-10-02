import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CollectionMainPageComponent} from './collection-main-page/collection-main-page.component';
import {CurrentSeasonComponent} from './current-season/current-season.component';
import {SpringSeasonComponent} from './spring-season/spring-season.component';
import {SummerSeasonComponent} from './summer-season/summer-season.component';
import {FallSeasonComponent} from './fall-season/fall-season.component';
import {WinterSeasonComponent} from './winter-season/winter-season.component';

const collectionRoutes: Routes = [
  {
    path: 'collection', component: CollectionMainPageComponent,
    children: [
      // {path: '', redirectTo: '', pathMatch: 'full'},
      {path: 'spring', component: SpringSeasonComponent},
      {path: 'summer', component: SummerSeasonComponent},
      {path: 'fall', component: FallSeasonComponent},
      {path: 'winter', component: WinterSeasonComponent},
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(collectionRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class CollectionRoutingModule { }
