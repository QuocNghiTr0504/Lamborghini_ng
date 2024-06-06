
import { Component, computed, effect, HostBinding, signal} from '@angular/core';


import { ThemeService } from 'src/app/service/theming/theme.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @HostBinding('class') className='';
  isOpen: boolean = false;

  toggleDropdown(event: Event) {
    event.stopPropagation();
    if (this.isOpen) {
      this.isOpen = false;
    } else {
      this.isOpen = true;
    }
  }
  darkMode: boolean = false;
  collapsed=signal(false);
  
  sideNavWidth= computed(()=>this.collapsed()?'13%': '0px');

  
  constructor(private themeService: ThemeService) {
    const savedSizeNav = localStorage.getItem('collapsed') === 'true';
    this.collapsed.set(savedSizeNav)
    this.themeService.getDarkMode().subscribe((darkMode) => {
      this.darkMode = darkMode;
      
    });
    effect(()=>{
      localStorage.setItem('collapsed', String(this.collapsed()))
    })
    
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }

  openDialog(){
    this.themeService.openModal();
  }

 
}
