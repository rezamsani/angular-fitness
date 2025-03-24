import { Component, EventEmitter, Output } from '@angular/core';



import { FormsModule, NgForm } from '@angular/forms';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { FlexLayoutServerModule } from 'ngx-flexible-layout/server';
import { MaterialModule } from '../../material.module';
import { AppRoutingModule } from '../../app.routes';


@Component({
  selector: 'app-sidenave-list',
  standalone: true,
  imports: [MaterialModule,
    FlexLayoutModule, FlexLayoutServerModule, FormsModule, AppRoutingModule],
  templateUrl: './sidenave-list.component.html',
  styleUrl: './sidenave-list.component.css'
})
export class SidenaveListComponent {
  @Output() closeSidenav = new EventEmitter<void>();
  onClose() {
    this.closeSidenav.emit();
  }
}


