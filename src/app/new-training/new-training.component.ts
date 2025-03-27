import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormsModule, NgForm } from '@angular/forms';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { CommonModule } from '@angular/common';
import { FlexLayoutServerModule } from 'ngx-flexible-layout/server';
import { MaterialModule } from '../material.module';
import { TrainingService } from '../training/training.service';
import { Exercise } from '../training/exercise.model';
@Component({
  selector: 'app-new-training',
  standalone: true,
  imports: [CommonModule, MaterialModule, FlexLayoutModule, FlexLayoutServerModule, FormsModule],
  templateUrl: './new-training.component.html',
  styleUrl: './new-training.component.css'
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  exercises: Exercise[];
  exerciseSubscription: Subscription;
  constructor(private trainintService: TrainingService) {


  }
  ngOnDestroy(): void {
    this.exerciseSubscription.unsubscribe();
  }
  ngOnInit(): void {

    this.exerciseSubscription = this.trainintService.excercisesChanged
      .subscribe(exercises => { this.exercises = exercises });
    this.trainintService.fetchAvailableExercises();
  }
  onStartTraining(form: NgForm) {
    this.trainintService.startExercise(form.value.excercise);
  }
}
