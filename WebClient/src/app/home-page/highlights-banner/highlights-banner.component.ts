import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HighlightItem } from '../models/highlight-item';
import { HighlightsService } from '../services/highlights.service';

@Component({
  selector: 'app-highlights-banner',
  templateUrl: './highlights-banner.component.html',
  styleUrls: ['./highlights-banner.component.scss']
})
export class HighlightsBannerComponent implements OnInit {

  slides : HighlightItem[] = [];
  videoUrl!:any;
  @Output() onSlideChange : EventEmitter<any> = new EventEmitter();
  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1 , 
    autoplay: false ,
     mobileFirst:true ,
     dots: true,
     arrows: false
    };
    
  constructor(private _highlightsService: HighlightsService, private _sanitizer: DomSanitizer ) { }

  ngOnInit(): void {
    this.getHighlights();
  }

  getHighlights(){
    this._highlightsService.getHighlights().subscribe({
      next: res=>{
        this.slides = res.slides;
        this.slides = this.slides.sort((a, b) => a.order  - b.order);
        this.addSlidesImages();
      }
    })
  }
 
  addSlidesImages(){
    this.slides.forEach((slide, index)=>{
      index++;
      slide.imgUrl = './../../assets/images/home-page/highlights-slider/slide'+index+'.svg';
      slide.videoUrl = "https://www.youtube.com/embed/dzfL1jwX200";
    })
  }
  
  slickInit(e: any) {
    this.setSliderDotsColors();
  }

  afterChange(e: any) {
    console.log('afterChange');
    this.onSlideChange.emit({currentSlide: e.slick.currentSlide})
  }

  setSliderDotsColors() {
    let slickDots = document.querySelectorAll('.slick-dots li button');
    slickDots.forEach((item, index) => {
      item.setAttribute('style','background-color:#'+ this.slides[index].colorCode);
    })
  }

  openVideoModal(videoUrl:string){
    this.videoUrl =  videoUrl;
  }

}
