import { Component, ViewChild } from '@angular/core';
import {
  IonicPage, NavController, NavParams, ViewController, Slides
} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-custom-modal',
  templateUrl: 'custom-modal.html',
})
export class CustomModalPage {

  @ViewChild(Slides) slides: Slides;
  monthsList: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  payMethod: string = '';
  vehicleID: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController) { }

}
