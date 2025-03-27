import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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
export class NewTrainingComponent implements OnInit {
  private firestore = inject(Firestore); // ✅ نسخه جدید با Standalone API

  exercises: Observable<any[]>; // ✅ مقدار قابل مشاهده برای استفاده در کامپوننت
  constructor(private trainintService: TrainingService) {


  }
  ngOnInit(): void {
    //this.exercises = this.trainintService.getAvailableExercises();

    const exercisesCollection = collection(this.firestore, 'exercises');
    this.exercises = collectionData(exercisesCollection);

    // this.exercises$.subscribe(data => {
    //   this.exercises$ = data;
    // });

  }
  onStartTraining(form: NgForm) {    
    this.trainintService.startExercise(form.value.excercise);
  }
}
