import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailBoxComponent } from './email-box/email-box.component';
import { EmailPreviewComponent } from './email-preview/email-preview.component';
import { EmailDetailComponent } from './email-detail/email-detail.component';
import { CustomeMessagePipe } from '../pipe/custome-message.pipe';
import { CustomeStringPipe } from '../pipe/custome-string.pipe';
import { IconService } from '../services/icon.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    EmailBoxComponent,
    EmailPreviewComponent,
    EmailDetailComponent,
    CustomeMessagePipe,
    CustomeStringPipe
  ],
  imports: [
    CommonModule,  
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    EmailBoxComponent,
    EmailPreviewComponent,
    EmailDetailComponent
  ],
  providers: [
    IconService
  ]
})
export class ComponentModule { }
