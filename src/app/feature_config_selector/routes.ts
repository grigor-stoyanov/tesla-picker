import { Routes } from "@angular/router";
import { stepGuardGuard } from "../shared/guards/step.guard-guard";

export const configSelectorRoutes : Routes = [
    {
        path:'options/:modelcode',
        canActivate: [stepGuardGuard],  
        loadComponent: () => {
            return import('./pages/config-page-layout/config-page-layout').then((m)=>m.ConfigPageLayout)
        },

    }
]