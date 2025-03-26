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
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-past-training',
  imports: [CommonModule, MaterialModule, FlexLayoutModule, FlexLayoutServerModule, FormsModule, PersianDatePipe, TranslationPipe],
  templateUrl: './past-training.component.html',
  styleUrl: './past-training.component.css'
})
export class PastTrainingComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'duration', 'calories', 'date', 'state'];
  dataSource = new MatTableDataSource<Exercise>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private trainingService: TrainingService) { }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  
  ngOnInit(): void {
    this.dataSource.data = this.trainingService.getCompleteOrCancelExercise();
  }
  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement)?.value ?? "";
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
