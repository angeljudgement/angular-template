import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CollectionRoutingModule } from './app-routing.module';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponentComponent } from './page-not-found/page-not-found-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PageNotFoundComponentComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CollectionRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
