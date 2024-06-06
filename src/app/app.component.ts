
import { Component, computed, signal } from '@angular/core';
import { ProductitemComponent } from './pages/products/productitem/productitem.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-responsive-sidenav';
  darkMode: boolean = false;
  collapsed=signal(false);
  
  sideNavWidth= computed(()=>this.collapsed()?'55px': '170px');
}
