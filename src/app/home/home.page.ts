import { Component } from '@angular/core';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { CommanServiceService } from '../services/comman-service.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   
  constructor(private socialSharing: SocialSharing,public service: CommanServiceService ) {}
  onShareclick(){
    var options = {
      massege:"hdsfvbjkeg",
      url:"http://google.com"
    }
    this.socialSharing.shareWithOptions(options).then((res:any)=>{
      console.log("res===>",res);
    }).catch(err=>{
      console.log("err===>",err);
    })
  }
  // onClick(id:any){
  //   this.service.apiResponse(id).then((response:any)=>{
  //    console.log("response===>",response); 
  //   }).catch((err)=>{
  //     console.log("err ===>",err);
  //   })
  //   // this.apiResponse()
  // }
}
