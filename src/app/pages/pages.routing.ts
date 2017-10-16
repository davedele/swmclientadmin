import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { PagesEditComponent } from './pages-edit/pages-edit.component';

export const routing = RouterModule.forChild([
    {
        path: 'pages',
        component: PagesComponent,
        //canActivate: [AuthGuard],
        //data: { perm: 'CusR' },
        children: [
            // {
            //     path: '',
            //     component: PagesComponent
            // },
            {
                path: ':id',
                component: PagesEditComponent
            }]
    }
]);