import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auths/auth.service';
import { BlogService } from 'src/app/service/blog/blog.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  constructor(private elementRef: ElementRef, private blog: BlogService, private route: Router,private auth: AuthService) {

  }

  scrollToTarget(): void {  
    const targetElement = this.elementRef.nativeElement.querySelector('#inf');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  readMore(id:number){
    this.route.navigate(['/articles',id])
  }
}
