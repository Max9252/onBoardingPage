import { Component, ViewChild, trigger, transition, style, state, animate, keyframes } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the OnBoardingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-on-boarding',
  templateUrl: 'on-boarding.html',
  animations: [
    trigger('animateSlide', [
      state('*', style({
        transform: 'translateX(0)'
      })),
      transition('* => rightSwipe', animate('700ms ease-out', keyframes([
        style({ transform: 'translateX(0)', offset: 0 }),
        style({ transform: 'translateX(-65px)', offset: 0.3 }),
        style({ transform: 'translateX(0)', offset: 1.0 })
      ]))),
      transition('* => leftSwipe', animate('700ms ease-out', keyframes([
        style({ transform: 'translateX(0)', offset: 0 }),
        style({ transform: 'translateX(65px)', offset: 0.3 }),
        style({ transform: 'translateX(0)', offset: 1.0 })
      ])))
    ]),

    trigger('moveImage', [
      state('stop', style({
        transform: 'translateY(200px) scale(2.5)'
      })),
      transition('stop => start', animate('.4s ease-out', keyframes([
        style({ transform: 'translateY(200px) scale(2.5)' }),
        style({ transform: 'translateY(100px) scale(1.5)' }),
        style({ transform: 'translateY(0) scale(1)' })
      ])))
    ]),
    trigger('moveMessage', [
      state('stop', style({
        transform: 'translateX(0)'
      })),
      transition('stop => start', animate('.3s ease-out', keyframes([
        style({ transform: 'translateX(0)' }),
        style({ transform: 'translateX(-200px)' }),
        style({ transform: 'translateX(-400px)' })
      ]))),
      state('start', style({
        display: 'none'
      })),
    ]),
    trigger('moveSlides', [
      state('stop', style({
        transform: 'translateX(600px)'
      })),

      transition('stop => start', animate('.18s ease-in', keyframes([
        style({ transform: 'translateX(600px)' }),
        style({ transform: 'translateX(300px)' }),
        style({ transform: 'translateX(0)' })
      ]))),

    ])
  ]
})
export class OnBoardingPage {
  @ViewChild(Slides) slides: Slides;

  skipMsg: string = "Omitir";
  state: string = 'x';
  stateImage: string = 'stop';
  stateSlide: string = 'stop';
  stateMessage: string = 'stop';
  start: boolean = false;
  showPager: boolean = true;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  slideChanged() {
    if (this.slides.isEnd()) {
      this.skipMsg = "¡Me ha quedado claro!";
      this.showPager = false;
    } else {
      this.showPager = true;
      this.slides.update();
    }

  }

  slideMoved() {
    if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex())
      this.state = 'rightSwipe';
    else
      this.state = 'leftSwipe';
  }

  animationDone() {
    setTimeout(() => {
      this.state = 'x';
    }, 1);

  }

  skip() {
    this.slides.slideTo(this.slides.length(), 300, false);
    if (this.slides.isEnd()) {
      this.skipMsg = "¡Me ha quedado claro!";
      this.showPager = false;
      this.slides.update();
    }


  }

  empezar() {
    this.start = true;
    this.stateImage = 'start';
    this.stateMessage = 'start';
    setTimeout(() => {    //<<<---    using ()=> syntax
      this.start = true;
      setTimeout(() => {    //<<<---    using ()=> syntax
        this.stateSlide = 'start';
      }, 200);
    }, 1);
  }

}
