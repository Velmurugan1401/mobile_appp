import { Component, OnInit } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
// import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
// import { HttpClient, HttpClientModule } from '@angular/common/http'
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public headers = new Headers({ 'Content-Type': 'application/json' });
  public options = new RequestOptions({ headers: this.headers }); 
  public email='';
  
  public password='';
  constructor(private  _http: Http,public router: Router) { }

  ngOnInit() {
  }

  showAlert() {
    this._http.get('http://localhost:5000/api/get',this.options).pipe(map(res => res.json())).subscribe(result => {
      console.log(this.email,result)
      if(this.email!=""){
        for(let i=0;i<result.length;i++){
          if(result[i].email===this.email && result[i].password===this.password){
            this.router.navigate(['/dashboard',result[i]._id]);
          }
        }
      }
    });
  }

}
