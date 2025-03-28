import { Subscription,Subject } from "rxjs";


export class UiService{
    loadingState = new Subject<boolean>();

    toggleLoading(isLoading: boolean): void{
        // implement loading toggle logic here
    }
}