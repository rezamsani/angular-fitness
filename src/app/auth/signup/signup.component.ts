import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { CommonModule } from '@angular/common';  // <-- Add this import
import { FlexLayoutServerModule } from 'ngx-flexible-layout/server';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MaterialPersianDateAdapter, PERSIAN_DATE_FORMATS } from '../../persian-dateadapter';





@Component({
  selector: 'app-signup',
  standalone: true,

  imports: [CommonModule, MaterialModule, FlexLayoutModule, FlexLayoutServerModule, FormsModule],
  providers: [{
    provide: DateAdapter, useClass: MaterialPersianDateAdapter, deps: [MAT_DATE_LOCALE]
  }, {
    provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS
  }
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  email: string = '';
  onSubmit(form: NgForm) {
    console.log(form);
  }
}
