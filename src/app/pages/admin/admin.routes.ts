import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ChartComponent } from "./chart/chart.component";

export const adminRoutes:Routes = [
    {
        path: 'dashboard',
        component:DashboardComponent
    },
    {
        path: 'chart',
        component:ChartComponent
    },
]