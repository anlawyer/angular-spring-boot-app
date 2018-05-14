import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FavoritePageComponent } from './favorite-page/favorite-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FavoritePageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
