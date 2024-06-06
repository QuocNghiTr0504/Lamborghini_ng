import { Component, HostBinding, computed, signal } from '@angular/core';
import { ThemeService } from 'src/app/service/theming/theme.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
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
  
  sideNavWidth= computed(()=>this.collapsed()?'55px': '170px');

  constructor(private themeService: ThemeService) {
    this.themeService.getDarkMode().subscribe((darkMode) => {
      this.darkMode = darkMode;
    });
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }

  openDialog(){
    this.themeService.openModal();
  }

}
