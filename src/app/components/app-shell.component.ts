import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
  ],
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent {
  // showSideNav = true;
  // constructor(public viwportServ: ViewportService) {
  //   if(this.viwportServ.device() === 'mobile') {
  //     this.showSideNav = false;
  //   }
  // }

  // toggleSideNav() {
  //   this.showSideNav = !this.showSideNav;
  // }
}
