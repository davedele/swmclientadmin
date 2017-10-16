//import { Routes, RouterModule } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';

export const routing = RouterModule.forChild([
    {
        path: 'settings',
        component: SettingsComponent
        //,canActivate: [AuthGuard],
        //data: { perm: 'CusR' },
        , children: [
            {
                path: '',
                component: SettingsComponent
            }
            //,{
            //    path: ':id',
            //    component: PagesEditComponent
            //}
        ]
    }
]);