import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { FlexLayoutModule } from 'ngx-flexible-layout';
import { CommonModule } from '@angular/common';
import { FlexLayoutServerModule } from 'ngx-flexible-layout/server';
import { MaterialModule } from '../material.module';
import { interval, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training/stop-training.component';


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
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  private subscription: Subscription | null = null;
  @Output() dialogEvent = new EventEmitter<void>();

  constructor(private dialog: MatDialog) {


  }
  ngOnInit(): void {
    this.startOrResumeTraining();
  }
  onStop(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: { progress: this.progress }
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dialogEvent.emit(); // تمرین متوقف می‌شود
      } else {
        this.startOrResumeTraining(); // ✅ حالا دوباره تمرین ادامه پیدا می‌کند
      }
    });
  }
  
  startOrResumeTraining(): void {
    if (!this.subscription) { // ✅ فقط اگر قبلاً متوقف شده بود، اجرا شود
      this.subscription = interval(1000).subscribe(() => {
        if (this.progress < 100) {
          this.progress += 10;
        } else {
          this.subscription?.unsubscribe();
          this.subscription = null;
        }
      });
    }
  }
  


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe(); 
      this.subscription = null;     
    }
  }
  
}
