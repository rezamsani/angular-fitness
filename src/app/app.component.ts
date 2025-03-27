// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { MaterialModule } from './material.module';
// import { FormsModule, NgForm } from '@angular/forms';
// import { FlexLayoutModule } from 'ngx-flexible-layout';
// import { FlexLayoutServerModule } from 'ngx-flexible-layout/server';
// import { AppRoutingModule } from './app.routes';
// import { SidenaveListComponent } from './navigation/sidenave-list/sidenave-list.component';
// import { HeaderComponent } from './navigation/header/header.component';

// import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { Firestore } from '@angular/fire/firestore'; // ✅ استفاده از نسخه جدید



// @Component({
//   selector: 'app-root',
//    standalone: true,
//   imports: [RouterOutlet, MaterialModule, 
//     FlexLayoutModule, 
//     FlexLayoutServerModule, 
//     FormsModule , 
//     AppRoutingModule,
//     SidenaveListComponent, HeaderComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'Material';
//   openSidenav: boolean = false;
//   constructor(private db: AngularFirestore) {
//     this.db.collection('exercises').valueChanges().subscribe(data => {
//       console.log(data);
//     });
//   }
// }


import { Component } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { FlexLayoutServerModule } from 'ngx-flexible-layout/server';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { SidenaveListComponent } from './navigation/sidenave-list/sidenave-list.component';
import { HeaderComponent } from './navigation/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, 
    FlexLayoutModule, 
    FlexLayoutServerModule, 
    FormsModule , 
    AppRoutingModule,
    SidenaveListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Material';
  openSidenav: boolean = false;
  
  private firestore = inject(Firestore); // ✅ نسخه جدید با Standalone API

  exercises$: Observable<any[]>; // ✅ مقدار قابل مشاهده برای استفاده در کامپوننت

  constructor() {
    const exercisesCollection = collection(this.firestore, 'exercises');
    this.exercises$ = collectionData(exercisesCollection);

    this.exercises$.subscribe(data => {
      console.log(data);
    });
  }
}
