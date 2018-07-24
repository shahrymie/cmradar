import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RcPage } from './rc';

@NgModule({
  declarations: [
    RcPage,
  ],
  imports: [
    IonicPageModule.forChild(RcPage),
  ],
})
export class RcPageModule {}
