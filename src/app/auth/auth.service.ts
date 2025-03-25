import { Subject } from "rxjs";
import { AuthData } from "./auth.model";
import { User } from "./user.model";
import { Router } from '@angular/router';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    private user: User | null = null;


  constructor(private router:Router) {    
    
  }
    registerUser(authData: AuthData) {
      this.user = {
        email: authData.email,
        userId: Math.round(Math.random() * 10000).toString(),
      };
      this.successFulAuth();
    }
  
    login(authData: AuthData) {
      this.user = {
        email: authData.email,
        userId: Math.round(Math.random() * 10000).toString(),
      };      
      this.successFulAuth();
    }
  
    logout() {
      this.user = null;
      this.authChange.next(false);
      this.router.navigate(['/login']);    
    }
  
    getUser() {
      return { ...this.user };
    }
  
    isAuth() {
      return this.user != null;
    }
    successFulAuth(){
      this.authChange.next(true); 
      this.router.navigate(['/training']);
    }
  }
  