import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private http: Http
  ) { }

  callDb() {
    this.http.get('/api/favorites')
    .subscribe(res => console.log(res));
  }

  ngOnInit() {
    this.callDb();
  }

}
