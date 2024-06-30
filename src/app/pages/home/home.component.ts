import { HtmlTagDefinition } from '@angular/compiler';
import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/service/blog/blog.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
  export class HomeComponent{
  
  blogIntro: Blog[] = [];

  constructor(private elementRef: ElementRef, private blog: BlogService, private route: Router) {
    this.blog.getBlog().subscribe(data =>{
    this.blogIntro = data.reverse().slice(0,3);
    })
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
    
  
