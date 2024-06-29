import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { RevenueComponent } from './revenue/revenue.component';

export const routes: Routes = [
    // {
    //     path: "",
    //     component: AppComponent
    // }
    {
        path: "",
        component: DashboardComponent
    },
    {
        path: "patient-list",
        component: PatientListComponent
    },
    {
        path: "revenue",
        component: RevenueComponent
    }
];
