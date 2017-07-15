import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, IonicPage } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { onBoardingAnimations } from './home.animations';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [onBoardingAnimations]
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;
  sliderIndex: number = 0;
  blueMarkerClass = { disableMarker: true };
  blackMarkerClass = { disableMarker: true };
  state: string = 'small';

  constructor(public navCtrl: NavController, public statusbar: StatusBar) { }

  ngOnInit() {

  }

  nextSlide() {

  }

  prevSlide() {

  }

  animate() {
    this.state = (this.state === 'small' ? 'large' : 'small');
    console.log('Animated', this.state);
  }

  slideDidChange() {

  }

  changeSelectMarker(marker) {
    if (marker === 'blue') {
      this.blueMarkerClass.disableMarker = false;
      this.blackMarkerClass.disableMarker = true;
    } else {
      this.blueMarkerClass.disableMarker = true;
      this.blackMarkerClass.disableMarker = false;
    }
  }

}
