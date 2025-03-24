import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material.module';
import { FormsModule, NgForm } from '@angular/forms';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { FlexLayoutServerModule } from 'ngx-flexible-layout/server';
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
}
