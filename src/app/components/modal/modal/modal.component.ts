import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from 'src/app/service/theming/theme.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  darkMode: boolean = false;
  // checked: boolean = false;

  // toggleChecked() {
  //   this.checked = !this.checked;
  // }
    checked: string = '';

  toggleChecked(color: string) {
    this.checked = (this.checked === color) ? '' : color ;
  }
  constructor(private themeService: ThemeService) {
    this.themeService.getDarkMode().subscribe((darkMode) => {
      this.darkMode = darkMode;
    });
  }
}
