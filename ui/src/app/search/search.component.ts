import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  apis: any;
  searchTerm = '';

  constructor(
    private http: Http
  ) { }

  callAPI(searchTerm: string) {
    this.http.get('https://api.publicapis.org/entries?title=' + this.searchTerm)
    .subscribe(res => this.apis = res.json().entries);
  }

  ngOnInit() {
    this.searchTerm = 'cat';
    this.callAPI(this.searchTerm);
  }
}
