import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  backgroundImageName: string = "animated1"
  constructor() { }

  ngOnInit(): void {
  }

  onbannerChange(event: any){
    switch (event.currentSlide){
      case 0:{
        this.backgroundImageName = "animated1";
        break;
      }
      case 1:{
        this.backgroundImageName = "animated2";
        break;
      }
      case 2:{
        this.backgroundImageName = "animated3";
        break;
      }
      default :{
        this.backgroundImageName = "animated1";
        break;
      }
    }
    
  }

}
