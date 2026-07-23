import { Routes } from "@angular/router";
import { selectedResolver } from "../shared/resolvers/selected-resolver";


export const modelSelectorRoutes: Routes = [
    {
        path:"models",
        resolve: { selectedResolver },
        data:{step:1},
        loadComponent: () => import('./pages/model-page-layout/model-page-layout').then(m=>m.ModelPageLayout),
    }
]