import { Routes } from "@angular/router";


export const modelSelectorRoutes: Routes = [
    {
        path:"models",
        loadComponent: () => import('./pages/model-page-layout/model-page-layout').then(m=>m.ModelPageLayout),
    }
]