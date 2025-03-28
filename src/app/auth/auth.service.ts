import { Subject } from "rxjs";
import { AuthData } from "./auth.model";
import { UserModel } from "./user.model";
import { Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User | null = null;

  constructor(private router: Router, private auth: Auth) { }
  async registerUser(authData: AuthData) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth, authData.email, authData.password);
      this.user = userCredential.user;
      console.log('User registered successfully!', userCredential.user);
      this.successFulAuth();
    } catch (error) {
      console.error('Registration error:', error);
    }
  }
  async login(authData: AuthData) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, authData.email, authData.password);
      this.user = userCredential.user; // ذخیره اطلاعات کاربر از Firebase
      this.successFulAuth();
    } catch (error) {
      console.error('Login error:', error);
    }
  }
  

  async logout() {
    try {
      await signOut(this.auth);
      this.user = null;
      this.authChange.next(false);
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Logout error:', error);
    }
  }
  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }
  successFulAuth() {
    this.authChange.next(true);
    this.router.navigate(['/training']);
  }
}
