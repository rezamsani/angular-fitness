import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';


// 🔹 وارد کردن Firebase Providers
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';

// 🔹 سایر سرویس‌ها و مسیرها
import { AuthService } from './auth/auth.service';
import { PermissionService } from './auth/auth.guard';
import { TrainingService } from './training/training.service';
import { environment } from '../enviroments/enviroment';
import { UiService } from './shared/ui.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     provideClientHydration(withEventReplay()),

    // Firebase Providers
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),

    // سرویس‌های داخلی شما
    AuthService,
    PermissionService,
    TrainingService,
    UiService

  ],  
};
