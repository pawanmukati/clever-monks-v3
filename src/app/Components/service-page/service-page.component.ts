import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss']
})
export class ServicePageComponent implements OnInit {

  tabNumber:any=0;

  constructor(private acvtivateRoute : ActivatedRoute) {
    this.acvtivateRoute.queryParams.subscribe((params:any)=>{
      console.log(params.tab)
      if(params.tab){
        this.tabNumber= params.tab;
      }
    })
   }

  ngOnInit(): void {
  }

}
