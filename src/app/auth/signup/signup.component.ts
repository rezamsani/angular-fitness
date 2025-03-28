import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { CommonModule } from '@angular/common';  // <-- Add this import
import { FlexLayoutServerModule } from 'ngx-flexible-layout/server';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MaterialPersianDateAdapter, PERSIAN_DATE_FORMATS } from '../../persian-dateadapter';
import { AuthService } from '../auth.service';
import { UiService } from '../../shared/ui.service';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-signup',
  standalone: true,

  imports: [CommonModule, MaterialModule, FlexLayoutModule, FlexLayoutServerModule, FormsModule],
  providers: [{
    provide: DateAdapter, useClass: MaterialPersianDateAdapter, deps: [MAT_DATE_LOCALE]
  }, {
    provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS
  }, AuthService
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  loadigStateSub: Subscription;
  constructor(private authService: AuthService, private uiService: UiService) {

  }

  ngOnInit(): void {
    this.loadigStateSub = this.uiService.loadingState.subscribe((isLoading) => {
      this.isLoading = isLoading;
    })
  }
  ngOnDestroy(): void {
    this.loadigStateSub.unsubscribe()
  }
  email: string = '';
  onSubmit(form: NgForm) {
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
  }
}
