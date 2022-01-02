import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MymessagesRoutingModule } from './mymessages-routing.module';
import { MymessagesComponent } from './mymessages.component';
import { DetailMessageComponent } from './detail-message/detail-message.component';
import { ComponentModule } from '../components/component.module';



@NgModule({
  declarations: [
    MymessagesComponent,
    DetailMessageComponent
  ],
  imports: [
    CommonModule,
    MymessagesRoutingModule,
    ComponentModule,
  ]
})
export class MymessagesModule { }
