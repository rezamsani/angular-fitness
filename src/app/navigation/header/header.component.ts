import { Component, EventEmitter, Output } from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { FlexLayoutServerModule } from 'ngx-flexible-layout/server';
import { MaterialModule } from '../../material.module';
import { AppRoutingModule } from '../../app.routes';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ MaterialModule,
    FlexLayoutModule, FlexLayoutServerModule, FormsModule, AppRoutingModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() sidenavToggle = new EventEmitter<void>();

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

}
