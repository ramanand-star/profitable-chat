import { Component, OnInit } from '@angular/core';
import { CommanServiceService } from '../services/comman-service.service';
@Component({
  selector: 'app-patternlearing',
  templateUrl: './patternlearing.page.html',
  styleUrls: ['./patternlearing.page.scss'],
})
export class PatternlearingPage implements OnInit {
  des:any ;
  constructor(public service: CommanServiceService) { }

  ngOnInit() {
  }
  // ionViewWillEnter() {
  //     this.service.apiResponse(0).then((response:any)=>{
   
  //      this.des = response.result.description;
  //      console.log("response===>",response); 
  //     }).catch((err)=>{
  //       console.log("err ===>",err);
  //     })
 
  // }
  // (click)="onClick(0)" 
}
