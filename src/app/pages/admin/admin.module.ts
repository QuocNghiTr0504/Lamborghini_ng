import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { adminRoutes } from "./admin.routes";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ChartComponent } from "./chart/chart.component";

@NgModule({
    declarations:[
        DashboardComponent,
        ChartComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forChild(adminRoutes)
    ],
})
export class AdminModule{}