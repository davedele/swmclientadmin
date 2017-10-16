import { RouterModule } from '@angular/router';

import { ModuleComponent } from './module.component';
import { ModuleEntitiesComponent } from './module-entities/module-entities.component';
import { ModuleSettingsComponent } from './module-settings/module-settings.component';

export const routing = RouterModule.forChild([
    {
        path: 'modules',
        component: ModuleComponent,
        //canActivate: [AuthGuard],
        //data: { perm: 'CusR' },
        children: [
            {
                path: ':id/settings',
                component: ModuleSettingsComponent
            },
            {
                path: ':id',
                component: ModuleEntitiesComponent
            }
        ]
    }
]);