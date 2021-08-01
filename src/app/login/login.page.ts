import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Http,Headers,RequestOptions } from '@angular/http';
// import { HttpHeaders } from '@angular/common/http';
// import { HttpClient, HttpClientModule } from '@angular/common/http'
import { map } from 'rxjs/operators';
// import 'rxjs/Rx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public headers = new Headers({ 'Content-Type': 'application/json' });
  public options = new RequestOptions({ headers: this.headers }); 
  name:string;
  constructor(private  _http: Http) { }

  ngOnInit() {
  }
  showAlert() {
  this._http.get('http://localhost:5000/api/get',this.options).pipe(map(res => res.json())).subscribe(result => {
    console.log(this.name)
  });
  }

  async getData() {
    try {
      const headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
      
      const requestOptions = {                                                                                                                                                                                 
        headers: new Headers(headerDict), 
      };

      const url = 'https://api.example.com';
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      const response = await this._http.get(url, requestOptions);

      console.log(response);
      // console.log(JSON.parse(response)); // JSON data returned by server
      // console.log(response.headers);

    } catch (error) {
      console.error(error.status);
      console.error(error.error); // Error message as string
      console.error(error.headers);
    }
  }

}
