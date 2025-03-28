import { CommonModule } from '@angular/common'; // <-- Add this import
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { FlexLayoutServerModule } from 'ngx-flexible-layout/server';
import { MaterialModule } from '../../material.module';

import { AuthService } from '../auth.service';
import { UiService } from "../../shared/ui.service";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MaterialModule, FlexLayoutModule, FlexLayoutServerModule, FormsModule],
  providers: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  loadigStateSub: Subscription;
  constructor(private authService: AuthService, private uiService: UiService) {

  }
  ngOnDestroy(): void {
    this.loadigStateSub.unsubscribe()
  }
  ngOnInit(): void {
    this.loadigStateSub = this.uiService.loadingState.subscribe((isLoading) => {
      this.isLoading = isLoading;
    })
  }
  onSubmit(form: NgForm) {

    this.authService.login({
      email: form.value.email,
      password: form.value.password
    });
  }
}
