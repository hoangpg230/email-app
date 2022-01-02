import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailMessageComponent } from './detail-message/detail-message.component';
import { MymessagesComponent } from './mymessages.component';

const routes: Routes = [
  { path: '', redirectTo: 'inbox', pathMatch: 'full' },
  {
    path: ':type',
    component: MymessagesComponent,
    children: [
        { path: ':id', component: DetailMessageComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MymessagesRoutingModule {}
