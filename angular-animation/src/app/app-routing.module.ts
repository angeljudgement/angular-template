import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CollectionMainPageComponent} from './collection/collection-main-page/collection-main-page.component';
import {CurrentSeasonComponent} from './collection/current-season/current-season.component';
import {SpringSeasonComponent} from './collection/spring-season/spring-season.component';
import {SummerSeasonComponent} from './collection/summer-season/summer-season.component';
import {FallSeasonComponent} from './collection/fall-season/fall-season.component';
import {WinterSeasonComponent} from './collection/winter-season/winter-season.component';
// import Route goes here

// Route goes here
const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: LandingPageComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // {enableTracing: true} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
