import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { CoupensComponent } from './pages/coupens/coupens.component';
import { MediaComponent } from './pages/media/media.component';
import { PageComponent } from './pages/page/page.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard'
    },
    {
        path: 'products',
        component: ProductsComponent,
        title: 'products'
    },
    {
        path: 'statistics',
        component: StatisticsComponent,
        title: 'Statistics'
    },
    {
        path: 'coupens',
        component: CoupensComponent,
        title: 'Coupens'
    },
    {
        path: 'media',
        component: MediaComponent,
        title: 'Media'
    },
    {
        path: 'page',
        component: PageComponent,
        title: 'Page'
    },
    {
        path: 'settings',
        component: SettingsComponent,
        title: 'Settings'
    },
];
