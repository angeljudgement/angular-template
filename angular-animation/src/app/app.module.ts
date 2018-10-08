import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {CollectionModule} from './collection/collection.module';
import { HeaderComponent } from './common-component/header/header.component';
import { FooterComponent } from './common-component/footer/footer.component';
import { TextboxComponent } from './common-component/form-manipulation/textbox/textbox.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CollectionModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
