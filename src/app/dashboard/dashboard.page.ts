import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http,Headers,RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';

// import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  id: number;
  private sub: any;
  public name;
  public email;
  public alldata;
  constructor(private  _http: Http,private route:ActivatedRoute ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      this._http.get('http://localhost:5000/api/get').pipe(map(res => res.json())).subscribe(result => {
        // console.log(this.email,result)
        if(this.id!=NaN){
          for(let i=0;i<result.length;i++){
            if(this.id===result[i]._id){
              this.alldata=result[i]
              this.name=this.alldata.first_name;
              this.email=this.alldata.email ? this.alldata.email:'-';
              // this.router.navigate(['/dashboard',result[i]._id]);

            }
          }
        }
      });
      // In a real app: dispatch action to load the details here.
   })
 }

 editprof(){
   
 }

}
  

