import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { CommonModule } from '@angular/common';  // <-- Add this import
import { FlexLayoutServerModule } from 'ngx-flexible-layout/server';

import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MaterialModule, FlexLayoutModule, FlexLayoutServerModule, FormsModule],
  providers:[],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(private authService: AuthService) {

  }
  onSubmit(form:NgForm){
    
      this.authService.login({
        email:form.value.email,
        password : form.value.password
      });
  }
}
