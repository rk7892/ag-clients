import { Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { AddClientComponent } from './add-client/add-client.component';
export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'client-list',
    component: ClientListComponent,
  },
  {
    path: 'client-list/client-details',
    component: ClientDetailsComponent,
  },
  {
    path: 'client-list/add-client',
    component: AddClientComponent,
  },
  {
    path: 'client-list/edit-client',
    component: EditClientComponent,
  },
];
