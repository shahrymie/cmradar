import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EcPage } from './ec';

@NgModule({
  declarations: [
    EcPage,
  ],
  imports: [
    IonicPageModule.forChild(EcPage),
  ],
})
export class EcPageModule {}
