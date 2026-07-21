import { Routes } from "@angular/router";
import { stepGuardGuard } from "../shared/guards/step.guard-guard";
import { selectedResolver } from "../shared/resolvers/selected-resolver";

export const configSelectorRoutes : Routes = [
    {
        path:'options/:modelcode',
        canActivate: [stepGuardGuard],  
        data:{step:2},
        resolve:{selectedResolver},
        loadComponent: () => {
            return import('./pages/config-page-layout/config-page-layout').then((m)=>m.ConfigPageLayout)
        },

    }
]