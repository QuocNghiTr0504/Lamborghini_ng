import { Routes } from "@angular/router";
import { BloglistComponent } from "./blogs/bloglist/bloglist.component"; 
import { BlogdetailComponent } from "./blogs/blogdetail/blogdetail.component"; 

export const articleRoutes:Routes = [
        {path: 'list', component: BloglistComponent},
        {path:':id',component: BlogdetailComponent},    
]