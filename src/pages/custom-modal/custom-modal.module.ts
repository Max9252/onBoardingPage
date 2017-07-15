import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomModalPage } from './custom-modal';

@NgModule({
  declarations: [
    CustomModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomModalPage),
  ],
  exports: [
    CustomModalPage
  ]
})
export class CustomModalPageModule {}
