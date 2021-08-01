import { Component, OnInit,Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Http,Headers,RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { collectExternalReferences } from '@angular/compiler';
// import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  
    private sprintData = new Subject<any>();
    public alert: any;
     public firstName:String
     public LastName :String;
     public Email:String;
     public Password:String;
  constructor(private  http: Http,public router: Router) { }

  ngOnInit() {
  
  }

  postdata() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
   
    let postdat ={
      firstname:this.firstName,
      lastname:this.LastName,
      email:this.Email,
      password:this.Password
  }
  const body=JSON.stringify(postdat)
  const requestOptions = new RequestOptions({ "headers": headers });
  this.http.post('http://localhost:5000/api/add',body,requestOptions).toPromise().then((data:any)=>{
   if(data.status===200){
    this.router.navigate(['/dashboard']);
   }else{
     console.log("error in insert")
   }
  })

  }


}
