import { Component, inject, signal, Signal,Input} from '@angular/core';
import { ThemeService } from 'src/app/service/theming/theme.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
 
  iconmenu=[
    {id:1,name:'Dashboard',icon:'dashboard',route:'dashboard'},
    {id:1,name:'Home',icon:'home',route:'home'},
    {id:2,name:'Product',icon:'shopping_cart',route:'products'},
    {id:3,name:'Comments',icon:'comments',route:'comments'},
    {id:4,name:'Translate',icon:'g_translate',route:'translate'},
    {id:5,name:'Blog',icon:'drafts',route:'blogs'},
  ]
    constructor(){

    }
}
