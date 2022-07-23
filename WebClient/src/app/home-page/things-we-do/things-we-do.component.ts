import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-things-we-do',
  templateUrl: './things-we-do.component.html',
  styleUrls: ['./things-we-do.component.scss']
})
export class ThingsWeDoComponent implements OnInit {
  services!:any[];
  servicesImgBaseUrl: string = "../../../assets/images/home-page/services/";

  constructor() { }

  ngOnInit(): void {
    this.services = [
      { name: 'transformation' , order: 1, imgUrl: `${this.servicesImgBaseUrl + 'transformation.svg'}`},
      { name: 'envision' ,  order: 2, imgUrl:  `${this.servicesImgBaseUrl + 'enovision.svg'}`},
      { name: 'dynamics 365' ,  order: 2, imgUrl:  `${this.servicesImgBaseUrl + 'dynamics.svg'}`},
      { name: 'crafty mind' ,  order: 3, imgUrl:  `${this.servicesImgBaseUrl + 'crafty.svg'}`},
      { name: 'services' ,  order: 3, imgUrl:  `${this.servicesImgBaseUrl + 'services.svg'}`}
    ]
  }

}
