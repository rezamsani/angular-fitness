import { Injectable } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subject } from "rxjs";
import { AuthData } from "./auth.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FirebaseError } from "firebase/app";
@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User | null = null;

  constructor(private router: Router, private auth: Auth,
    private snackbar: MatSnackBar) { }
  async registerUser(authData: AuthData) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth, authData.email, authData.password);
      this.user = userCredential.user;
      console.log('User registered successfully!', userCredential.user);
      this.successFulAuth();
    } catch (error: unknown) {
      let errorMessage = 'An unknown error occurred';
      if (error instanceof FirebaseError) {
        errorMessage = error.message ?? 'An error occurred';
      }
      this.snackbar.open(errorMessage, 'Close', {
        duration: 3000,
      });
    }
  }
  async login(authData: AuthData) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, authData.email, authData.password);
      this.user = userCredential.user; // ذخیره اطلاعات کاربر از Firebase
      this.successFulAuth();
    } catch (error: unknown) {
      let errorMessage = 'An unknown error occurred';
      if (error instanceof FirebaseError) {
        errorMessage = error.message ?? 'An error occurred';
      }
      this.snackbar.open(errorMessage, 'Close', {
        duration: 3000,
      });
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
