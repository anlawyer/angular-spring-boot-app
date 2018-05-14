import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute }   from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  apis: any;

  constructor(
    private http: Http,
    private route: ActivatedRoute
  ) { }

  // callDb() {
  //   this.http.get('/api/favorites')
  //   .subscribe(res => console.log(res));
  // }

  ngOnInit() {
    this.callAPI();
  }

  callAPI() {
    this.http.get('https://api.publicapis.org/entries')
    .subscribe(res => this.apis = res.json().entries);
  }

}
