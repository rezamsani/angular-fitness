import { Component, EventEmitter, Output } from '@angular/core';



import { FormsModule, NgForm } from '@angular/forms';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { FlexLayoutServerModule } from 'ngx-flexible-layout/server';
import { MaterialModule } from '../../material.module';
import { AppRoutingModule } from '../../app.routes';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';
  import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenave-list',
  standalone: true,
  imports: [MaterialModule,CommonModule,
    FlexLayoutModule, FlexLayoutServerModule, FormsModule, AppRoutingModule],
  templateUrl: './sidenave-list.component.html',
  styleUrl: './sidenave-list.component.css'
})
export class SidenaveListComponent {
  
@Output() closeSidenav = new EventEmitter<void>();
isAuth:boolean = false;
authSubscription: Subscription | null = null;

constructor(private authService: AuthService) {}


  onClose(){
    this.closeSidenav.emit();
  }
  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  ngOnDestroy() {
    this.authSubscription?.unsubscribe();
  }


  onLogout(){
    this.onClose();
    this.authService.logout();
  }
}
