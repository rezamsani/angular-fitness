import { inject } from "@angular/core";
import { Exercise } from "./exercise.model";
import { Firestore, collection, collectionData, collectionSnapshots } from '@angular/fire/firestore';
import { Observable, map, Subject } from 'rxjs';

export class TrainingService {
    excerciseChanged = new Subject<Exercise | null>();
    excercisesChanged = new Subject<Exercise[]>();
    private availableExercises: Exercise[] = [
        { id: 'crunches', name: 'کرانچ', duration: 30, calories: 8 },
        { id: 'squat', name: 'اسکوات', duration: 180, calories: 15 },
        { id: 'side-lunges', name: 'لانچ اسکوات', duration: 120, calories: 18 },
        { id: 'burpees', name: 'شنا', duration: 60, calories: 8 }
    ];
    private exercisessss: Exercise[] = [];
    private runningExercise: Exercise | null;
    private firestore = inject(Firestore); // ✅ نسخه جدید با Standalone API

    exercises: Observable<Exercise[]>; // ✅ مقدار قابل مشاهده برای استفاده در کامپوننت
    fetchAvailableExercises() {
        const exercisesCollection = collection(this.firestore, 'exercises');
        collectionSnapshots(exercisesCollection).pipe(
            map(docArray =>
                docArray.map(doc => ({
                    id: doc.id, // `doc.id` مستقیم مقدار دارد
                    name: doc.data()['name'], // مقدار را مستقیم می‌خوانیم
                    duration: doc.data()['duration'],
                    calories: doc.data()['calories']
                }))
            )
        ).subscribe((exercises: Exercise[]) => {
            this.availableExercises = exercises;
            this.excercisesChanged.next([...this.availableExercises]);
        });
        //return this.availableExercises.slice();
    }
    startExercise(selectedIdExercise: string) {
        const selectedExercise = this.availableExercises.find((x) => x.id === selectedIdExercise);
        if (!selectedExercise) {
            console.error("Selected exercise not found!");
            return;
        }
        this.runningExercise = selectedExercise;
        this.excerciseChanged.next({ ...this.runningExercise });

    }
    getRunningExcercise() {
        return this.runningExercise ? { ...this.runningExercise } : null;
    }
    completeExercise() {
        // this.exercises.push({
        //     ...this.runningExercise!, date: new Date(), state: 'completed',
        // });
        // this.runningExercise = null;
        // this.excerciseChanged.next(null);
    }
    cancelExercise(process: number) {
        // this.exercises.push({
        //     ...this.runningExercise!, date: new Date(), state: 'canceled',
        //     duration: this.runningExercise?.duration! * process / 100,
        //     calories: this.runningExercise?.duration! * process / 100,
        // });
        // this.runningExercise = null;
        // this.excerciseChanged.next(null);
    }
    getCompleteOrCancelExercise() {
        return this.exercises ? [...this.exercisessss] : []; // اگر مقدار null بود، یک آرایه خالی بده
    }
}