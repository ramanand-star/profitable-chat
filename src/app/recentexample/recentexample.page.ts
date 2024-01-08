import { Component, OnInit } from '@angular/core';
import { CommanServiceService } from '../services/comman-service.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
@Component({
  selector: 'app-recentexample',
  templateUrl: './recentexample.page.html',
  styleUrls: ['./recentexample.page.scss'],
})
export class RecentexamplePage implements OnInit {
  des: any;
  img1:any;
  constructor(public service: CommanServiceService,private iab: InAppBrowser) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.service.apiResponse(2).then((response:any)=>{
      this.img1 =response.result.image1;
      // this.img2 =response.result.image2;
     this.des = response.result.description;
     console.log("response===>",response); 
    }).catch((err)=>{
      console.log("err ===>",err);
    })

}
externalLink(){
  const browser = this.iab.create('https://profitablechartpatterns.blogspot.com/','_self',{location:'no'});
}
}
