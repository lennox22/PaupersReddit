import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  awwreddit = null;
  http: HttpClient = null;

  constructor(theHttp: HttpClient) {
    this.http = theHttp;
    
  }

  loadAwwData() {
    this.http.get<any>('https://www.reddit.com/r/aww/.json').subscribe(result => {
      console.log(result);
      this.awwreddit = result;

    }, error => {
      console.log(error);
    });
  }
}
