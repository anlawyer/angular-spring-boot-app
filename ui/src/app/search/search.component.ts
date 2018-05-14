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
  searchTerm = '';

  constructor(
    private http: Http,
    private route: ActivatedRoute
  ) { }

  // callDb() {
  //   this.http.get('/api/favorites')
  //   .subscribe(res => console.log(res));
  // }

  ngOnInit() {
  }

  callAPI() {
    console.log('called');
    // this.http.get('https://api.publicapis.org/entries?title=${searchTerm}')
    this.http.get('https://api.publicapis.org/entries?title=' + this.searchTerm)
    .subscribe(res => this.apis = res.json().entries);
  }

}
