import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { CommonModule } from '@angular/common';
import { FlexLayoutServerModule } from 'ngx-flexible-layout/server';
import { MaterialModule } from '../material.module';
import { TrainingService } from '../training/training.service';
import { Exercise } from '../training/exercise.model';

@Component({
  selector: 'app-past-training',
  imports: [CommonModule, MaterialModule, FlexLayoutModule, FlexLayoutServerModule, FormsModule],
  templateUrl: './past-training.component.html',
  styleUrl: './past-training.component.css'
})
export class PastTrainingComponent implements OnInit {
  displayedColumns: string[] = ['name', 'duration', 'calories', 'date', 'state'];
  dataSource: any[] = []; // ✅ مقداردهی اولیه برای جلوگیری از undefined

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.dataSource = this.trainingService.getCompleteOrCancelExercise();
    console.log("Fetched Data:", this.dataSource); // ✅ بررسی مقدار دریافت‌شده
  }
}
