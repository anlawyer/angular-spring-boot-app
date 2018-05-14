import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FavoritePageComponent } from './favorite-page/favorite-page.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'api/favorites',
    component: FavoritePageComponent
  }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
