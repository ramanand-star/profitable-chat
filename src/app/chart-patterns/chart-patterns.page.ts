import { Component, OnInit } from '@angular/core';

import { CommanServiceService } from '../services/comman-service.service';
@Component({
  selector: 'app-chart-patterns',
  templateUrl: './chart-patterns.page.html',
  styleUrls: ['./chart-patterns.page.scss'],
})
export class ChartPatternsPage implements OnInit {
  des: any;
  img1: any;
  img2: any;
  // [routerLink]="['/top']" 
  conatainArray = [
    { id: 1, name: 'Double Top', img: 'assets/top1.png',route:['/top'] },
    { id: 2, name: 'Double Buttom', img:'assets/bottom.png',route:['/doublebottom'] },
    { id: 3, name: 'Head and Shoulder Top', img:'assets/double-bottom.png',route:['/head-top'] },
    { id: 4, name: 'Head and Shoulder Bottom', img:'assets/head1.png',route:['/head-scame'] },
    { id: 5, name: 'Rectangle Top', img:'assets/rectanglebottom.png',route:['/reactangle-top'] },
    { id: 6, name: 'Rectangle Bottom', img:'assets/rectangletop.png',route:['/reactangle'] },
    { id: 7, name: 'Rounding Top', img:'assets/roundingtop.png',route:['/rounding-top'] },
    { id: 8, name: 'Rounding Bottom', img:'assets/roundingbottom.png',route:['/rounding-bottom'] },
    { id: 9, name: 'Cup and Handle ', img:'assets/icon/cradleTop1.png',route:['/cup-handle'] },
    { id: 10, name: 'Cup and Handle inverted  ', img:'assets/invertimg.png',route:['/inverted'] },
    { id: 10, name: 'Accending Triangle ', img:'assets/accending.png',route:['/accending'] },
    { id: 11, name: 'Descending  Triangle ', img:'assets/decending.png',route:['/decending'] },
    { id: 12, name: 'Symmetrical Triangle ', img:'assets/sym.png',route:['/symmatrical'] },
    { id: 13, name: 'Scoop Pattern', img:'assets/scoop.png',route:['/scoop'] },
    { id: 14, name: 'Cradle Pattern', img:'assets/cadlep.png',route:['/cradle'] },
    { id: 15, name: 'Bullish Flag', img:'assets/blush.png',route:['/bullish'] },
];

  constructor(public service: CommanServiceService) {}

  ngOnInit() {
    console.log("conatainArray",this.conatainArray)
  }
  ionViewWillEnter() {
    this.service
      .apiResponse(1)
      .then((response: any) => {
        this.img1 = response.result.image1;
        this.img2 = response.result.image2;
        this.des = response.result.description;
        console.log('response===>', response);
      })
      .catch((err) => {
        console.log('err ===>', err);
      });
  }
}
