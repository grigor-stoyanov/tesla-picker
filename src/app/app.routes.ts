import { Routes } from '@angular/router';
import { modelSelectorRoutes } from './feature_model_selector/routes';
import {configSelectorRoutes} from './feature_config_selector/routes';
import { confirmRoutes } from './feature_confirm_page/routes';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./feature_home_page/pages/home.layout/home.layout').then(m => m.HomeLayout)
    },
    {
        path: 'select',
        loadComponent: () => import('./main').then(m=>m.Main),
        children: [...modelSelectorRoutes,...configSelectorRoutes,...confirmRoutes]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
