import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { CommonModule } from '@angular/common';
import { FlexLayoutServerModule } from 'ngx-flexible-layout/server';
import { MaterialModule } from '../material.module';
import { TrainingService } from '../training/training.service';
import { Exercise } from '../training/exercise.model';
import { PersianDatePipe } from "../persian-date.pipe";
import { TranslationPipe } from "../translation.pipe";
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-past-training',
  imports: [CommonModule, MaterialModule, FlexLayoutModule, FlexLayoutServerModule, FormsModule, PersianDatePipe, TranslationPipe],
  templateUrl: './past-training.component.html',
  styleUrl: './past-training.component.css'
})
export class PastTrainingComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'duration', 'calories', 'date', 'state'];
  dataSource=new MatTableDataSource<Exercise>;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private trainingService: TrainingService) {}
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.dataSource.data = this.trainingService.getCompleteOrCancelExercise();
  }
}
