import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { FlexLayoutModule } from 'ngx-flexible-layout';
import { CommonModule } from '@angular/common';
import { FlexLayoutServerModule } from 'ngx-flexible-layout/server';
import { MaterialModule } from '../material.module';
import { setInterval } from 'timers/promises';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-current-training',
  standalone: true,

  imports: [CommonModule,
            MaterialModule,
            FlexLayoutModule,
            FlexLayoutServerModule,
            FormsModule],
  templateUrl: './current-training.component.html',
  styleUrl: './current-training.component.css'
})
export class CurrentTrainingComponent implements OnInit{
  progress = 0;
  private subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe(() => {
      if (this.progress < 100) {
        this.progress += 25;
      }
    });
  } 
}
  