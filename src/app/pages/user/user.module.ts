import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { userRoutes } from "./user.routes";
import { HomeComponent } from "./home/home.component";
import { CommentsComponent } from "./comments/comments.component";
import { ProductlistComponent } from "./products/productlist/productlist.component";
import { ProductitemComponent } from "./products/productitem/productitem.component";
import { DetailsComponent } from "./products/details/details.component";
import { TranslateComponent } from "./translate/translate.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { HeaderComponent } from "src/app/components/header/header.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { SidenavComponent } from "src/app/components/sidenav/sidenav.component";
import { InfoComponent } from './products/info/info.component';

@NgModule({
    declarations:[
        SidenavComponent,
        HeaderComponent,
        HomeComponent, 
        CommentsComponent,
        ProductlistComponent,
        ProductitemComponent, 
        DetailsComponent, 
        TranslateComponent, InfoComponent],
    imports:[  
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatSidenavModule,
        MatPaginatorModule,
        CommonModule,
        RouterModule.forChild(userRoutes),
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule{}