import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from 'src/app/service/theming/theme.service';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.scss']
})
export class ProductitemComponent {
  @Input() item:any;
  showMore:boolean = false;
  darkMode: boolean = false;

  constructor(private themeService: ThemeService, private readonly route: ActivatedRoute, private router:Router) {
    this.themeService.getDarkMode().subscribe((darkMode) => {
      this.darkMode = darkMode;
    });
  }
  onReadMore(id:number){
      this.router.navigate(['/details',id])
  }
  

}
