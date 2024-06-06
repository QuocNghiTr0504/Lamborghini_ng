import { HtmlTagDefinition } from '@angular/compiler';
import { Component, ElementRef } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
  export class HomeComponent{
    constructor(private elementRef: ElementRef) { }

  scrollToTarget(): void {  
    const targetElement = this.elementRef.nativeElement.querySelector('#inf');

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
    
  
