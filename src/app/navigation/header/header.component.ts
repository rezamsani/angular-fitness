import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { FlexLayoutServerModule } from 'ngx-flexible-layout/server';
import { MaterialModule } from '../../material.module';
import { AppRoutingModule } from '../../app.routes';
import { AuthService } from '../../auth/auth.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule,
    FlexLayoutModule, FlexLayoutServerModule, FormsModule, AppRoutingModule, CommonModule],
  providers: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth: boolean = false;
  subscription: Subscription | null = null;
  constructor(private authService: AuthService) {

  }
  ngOnInit() {
    this.subscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
  onLogout(){
    this.authService.logout();
  }
}
