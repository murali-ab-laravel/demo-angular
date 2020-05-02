import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
  ],
  exports:[
    AngularMaterialModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
