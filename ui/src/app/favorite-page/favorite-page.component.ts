import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent implements OnInit {

  favorites: any;

  constructor(
    private http: Http
  ) { }

  callDb() {
    this.http.get('/api/favorites')
    .subscribe(res => console.log(res.json()));
    // .subscribe(res => this.favorites = res.json());
  }

  addToFavorites(api) {
    this.http.post(
      '/api/favorites',
      {
        API: api.API,
        Description: api.Description,
        Link: api.Link
      }
    )
  }

  ngOnInit() {
    this.callDb();
  }

}
