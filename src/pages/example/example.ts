import { Component } from '@angular/core';
import {
  IonicPage, NavController, NavParams, ViewController, ModalController,
  AlertController
} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-example',
  templateUrl: 'example.html',
})
export class ExamplePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, public modalCtrl: ModalController,
    public alertCtrl: AlertController) { }

  ngOnInit() {

  }

  openModal() {
    const modal = this.modalCtrl.create('CustomModalPage', {}, {
      cssClass: 'custom-modal'
    });
    modal.present();
  }

  openAlert() {
    this.alertCtrl.create({
      title: 'Prueba',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel'
        }
      ]
    }).present();
  }

}
