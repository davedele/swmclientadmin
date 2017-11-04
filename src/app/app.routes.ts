import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { PagesModule } from './pages';
import { UserComponent } from './user';
import { SettingsModule} from './settings';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'profile', component: UserComponent},
	//{ path: 'settings', component: SettingsModule}
];

export const routing: ModuleWithProviders = RouterModule.forRoot( routes );