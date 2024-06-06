import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { ModalComponent } from 'src/app/components/modal/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(localStorage.getItem('darkMode') === 'true');

  constructor(public dialog: MatDialog) {
    this.applyTheme();
  }

  getDarkMode() {
    return this.darkMode.asObservable();
  }

  toggleDarkMode() {
    const newMode = !this.darkMode.value;
    this.darkMode.next(newMode);
    localStorage.setItem('darkMode', String(newMode));
    this.applyTheme();
  }

  private applyTheme() {
    if (this.darkMode.getValue()) {
      document.body.classList.add('darkMode');
    } else {
      document.body.classList.remove('darkMode');
    }
  }

  openModal() {
    const dialogRef = this.dialog.open(ModalComponent, {
        
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
