import { Routes } from "@angular/router";
import { selectedResolver } from "../shared/resolvers/selected-resolver";
import { stepGuardGuard } from "../shared/guards/step.guard-guard";

export const confirmRoutes:Routes = [
    {
        path:"confirm/:modelcode",
        data:{step:3},
        canActivate:[stepGuardGuard],
        resolve:{selectedResolver},
        loadComponent: ()=>import('./pages/confirm-page-layout/confirm-page-layout').then((m)=>m.ConfirmPageLayout)
    }
]