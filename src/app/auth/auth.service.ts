import { Injectable } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subject } from "rxjs";
import { AuthData } from "./auth.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FirebaseError } from "firebase/app";
import { UiService } from "../shared/ui.service";
@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User | null = null;
  private isAuthenticated = false;

  constructor(private router: Router, private auth: Auth,
    private snackbar: MatSnackBar, private uiService:UiService) { }
  async registerUser(authData: AuthData) {
    this.uiService.loadingState.next(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth, authData.email, authData.password);
      this.user = userCredential.user;
      console.log('User registered successfully!', userCredential.user);
      this.uiService.loadingState.next(false);
      this.successfullAuth();
    } catch (error: unknown) {
      this.uiService.loadingState.next(false);
      let errorMessage = 'An unknown error occurred';
      if (error instanceof FirebaseError) {
        errorMessage = error.message ?? 'An error occurred';
      }
      this.snackbar.open(errorMessage, 'Close', {
        duration: 3000,
      });
      this.failfullAuth();
    }
  }
  async login(authData: AuthData) {
    this.uiService.loadingState.next(true);
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, authData.email, authData.password);
      this.user = userCredential.user; // ذخیره اطلاعات کاربر از Firebase
      this.uiService.loadingState.next(false);
      this.successfullAuth();
    } catch (error: unknown) {
      this.uiService.loadingState.next(false);
      let errorMessage = 'An unknown error occurred';
      if (error instanceof FirebaseError) {
        errorMessage = error.message ?? 'An error occurred';
      }
      this.snackbar.open(errorMessage, 'Close', {
        duration: 3000,
      });
      this.failfullAuth();
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
  private successfullAuth() {
    this.isAuthenticated = true;
    this.authChange.next(true);
    this.router.navigate(['/training']);
  }

  private failfullAuth() {
    this.isAuthenticated = false;
    this.authChange.next(false);
    this.router.navigate(['/signup']);
  }
}
