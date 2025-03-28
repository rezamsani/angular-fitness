import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { FlexLayoutServerModule } from 'ngx-flexible-layout/server';
import { MaterialModule } from '../material.module';
import { PersianPaginatorIntl } from '../pagination.translate';
import { PersianDatePipe } from "../persian-date.pipe";
import { Exercise } from '../training/exercise.model';
import { TrainingService } from '../training/training.service';
import { TranslationPipe } from "../translation.pipe";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-past-training',
  imports: [CommonModule, MaterialModule, FlexLayoutModule, FlexLayoutServerModule, FormsModule, PersianDatePipe, TranslationPipe],
  providers: [
    { provide: MatPaginatorIntl, useClass: PersianPaginatorIntl }
  ],
  templateUrl: './past-training.component.html',
  styleUrl: './past-training.component.css'
})
export class PastTrainingComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['name', 'duration', 'calories', 'date', 'state'];
  dataSource = new MatTableDataSource<Exercise>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  private finishedExSubscription: Subscription;
  constructor(private trainingService: TrainingService) { }
  ngOnDestroy(): void {
    this.finishedExSubscription.unsubscribe();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  // Example data for the table.
  ngOnInit(): void {
    this.finishedExSubscription = this.trainingService.finishedExChanged.subscribe((exercises) => {
      this.dataSource.data = exercises;
    });
    this.trainingService.fetchCompleteOrCancelExercise();
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
