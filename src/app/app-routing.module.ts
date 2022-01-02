import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mymessages', pathMatch: 'full' 
  },
  {
    path: 'mymessages',
    loadChildren: () =>
      import('./mymessages/mymessages.module').then((m) => m.MymessagesModule),
  },
  {
    path: 'contacts',
    component: ContactComponent
  },
  {
    path: 'prefs',
    component: ContactComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
