import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, collectionData, collectionSnapshots } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
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

  exercises: Observable<Exercise[]>; // ✅ مقدار قابل مشاهده برای استفاده در کامپوننت
  constructor(private trainintService: TrainingService) {


  }
  ngOnInit(): void {
    //this.exercises = this.trainintService.getAvailableExercises();

    const exercisesCollection = collection(this.firestore, 'exercises');
    this.exercises = collectionSnapshots(exercisesCollection).pipe(
      map(docArray =>
        docArray.map(doc => ({
          id: doc.id, // `doc.id` مستقیم مقدار دارد
          name: doc.data()['name'], // مقدار را مستقیم می‌خوانیم
          duration: doc.data()['duration'],
          calories: doc.data()['calories']
        }))
      )
    );


    // this.exercises$.subscribe(data => {
    //   this.exercises$ = data;
    // });

  }
  onStartTraining(form: NgForm) {
    this.trainintService.startExercise(form.value.excercise);
  }
}
