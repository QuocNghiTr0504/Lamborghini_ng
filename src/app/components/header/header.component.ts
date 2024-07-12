
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, computed, effect, HostBinding, HostListener, OnDestroy, OnInit, signal, ViewChild} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/auths/auth.service';


import { ThemeService } from 'src/app/service/theming/theme.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateY(0)'
      })),
      state('out', style({
        transform: 'translateY(-100%)'
      })),
      transition('out => in', [
        animate('0.7s ease-in')
      ]),
      transition('in => out', [
        animate('0.7s ease-out')
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit, OnDestroy {
  @HostBinding('class') className='';
  isOpen: boolean = false;
  @ViewChild('sidenav') sidenav: any;
  slideState: string = 'out';
  isSidenavOpen: boolean = false;
  profileUser:any;
  private userSubcription: Subscription|undefined;

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

  
  constructor(private themeService: ThemeService, private auth:AuthService) {
    const savedSizeNav = localStorage.getItem('collapsed') === 'true';
    this.collapsed.set(savedSizeNav)
    this.themeService.getDarkMode().subscribe((darkMode) => {
      this.darkMode = darkMode;
      
    });
    effect(()=>{
      localStorage.setItem('collapsed', String(this.collapsed()))
    })
    
  }

  ngOnInit(): void {
    this.userSubcription = this.auth.user$.subscribe(user =>{
        this.profileUser = user;
    })
    
  }
  ngOnDestroy(): void {
    this.userSubcription = this.auth.user$.subscribe(user =>{
      this.profileUser = user
    })
  }


  logout(){
    this.auth.logout()
  }
  

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }

  openDialog(){
    this.themeService.openModal();
  }

  toggleSidebar() {

    this.isSidenavOpen = !this.isSidenavOpen;
    this.slideState = this.isSidenavOpen ? 'in' : 'out';
    this.sidenav.toggle();
  }

  closeSidebar() {
    this.isSidenavOpen = false;
    this.slideState = 'out';
    this.sidenav.close();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window;
    if (target.innerWidth >= 1024) {
      this.isSidenavOpen = false;
      this.slideState = 'out';
      this.sidenav.close();
    }
  }
 
}
