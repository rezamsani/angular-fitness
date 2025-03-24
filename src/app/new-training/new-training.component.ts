import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { CommonModule } from '@angular/common';
import { FlexLayoutServerModule } from 'ngx-flexible-layout/server';
import { MaterialModule } from '../material.module';
@Component({
  selector: 'app-new-training',
  standalone : true,
  imports: [CommonModule, MaterialModule, FlexLayoutModule, FlexLayoutServerModule, FormsModule],
  templateUrl: './new-training.component.html',
  styleUrl: './new-training.component.css'
})
export class NewTrainingComponent {

}
