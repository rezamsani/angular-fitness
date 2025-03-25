import { Component, Inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { FlexLayoutModule } from 'ngx-flexible-layout';
import { CommonModule } from '@angular/common';
import { FlexLayoutServerModule } from 'ngx-flexible-layout/server';
import { MaterialModule } from '../../material.module';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-stoptraining',
  standalone: true,
  imports: [CommonModule,
             MaterialModule,
             FlexLayoutModule,
             FlexLayoutServerModule,
             FormsModule],
  templateUrl: './stop-training.component.html',
  styleUrl: './stop-training.component.css'
})
export class StopTrainingComponent{
 
  constructor(@Inject(MAT_DIALOG_DATA) public passedData:any) {
    
  }

}