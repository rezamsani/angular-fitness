import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { FlexLayoutModule } from 'ngx-flexible-layout';
import { CommonModule } from '@angular/common';
import { FlexLayoutServerModule } from 'ngx-flexible-layout/server';
import { MaterialModule } from '../material.module';
import { NewTrainingComponent } from '../new-training/new-training.component';
import { PastTrainingComponent } from '../past-training/past-training.component';
import { CurrentTrainingComponent } from '../current-training/current-training.component';



@Component({
  selector: 'app-training',
  standalone: true,
  imports: [CommonModule,
             MaterialModule,
             FlexLayoutModule,
             FlexLayoutServerModule,
             FormsModule, NewTrainingComponent, PastTrainingComponent, CurrentTrainingComponent],
  templateUrl: './training.component.html',
  styleUrl: './training.component.css'
})
export class TrainingComponent {
  onGoingTraining : boolean = false;

}
