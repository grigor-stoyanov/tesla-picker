import { Routes } from '@angular/router';
import { modelSelectorRoutes } from './feature_model_selector/routes';
import {configSelectorRoutes} from './feature_config_selector/routes';
import { confirmRoutes } from './feature_confirm_page/routes';
import { selectedResolver } from './shared/resolvers/selected-resolver';

export const routes: Routes = [
    {
        path: 'home',
        resolve:{selectedResolver},
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
