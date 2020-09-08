import { Injectable } from '@angular/core';

import { Subject, BehaviorSubject, ReplaySubject, 
         AsyncSubject, Observable } from 'rxjs';

export interface Data {
  value: number;
  Time: Date
}

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  items = [];
  intervalIds = [];
  private subject$: Subject<Data>;
  subjectObservable$: Observable<Data>;

  private behaviorSubject$;
  behaviorSubjectObservable$: Observable<Data>;

  private replaySubject$: ReplaySubject<ICustomer[]>;
  replaySubjectObservable$: Observable<ICustomer[]>;

  private asyncSubject$: AsyncSubject<ICustomer[]>;
  asyncSubjectObservable$: Observable<ICustomer[]>;

  constructor() { }

  initSubjects() {
    this.subject$ = new Subject();
    this.subjectObservable$ = this.subject$.asObservable();

    this.behaviorSubject$ = new BehaviorSubject(this.items);
    this.behaviorSubjectObservable$ = this.behaviorSubject$.asObservable();

    this.replaySubject$ = new ReplaySubject();
    this.replaySubjectObservable$ = this.replaySubject$.asObservable();

    this.asyncSubject$ = new AsyncSubject();
    this.asyncSubjectObservable$ = this.asyncSubject$.asObservable();
  }

  initSubject() {
    this.subject$ = new Subject();
    this.subjectObservable$ = this.subject$.asObservable();
  }

  startSubjectValue() {
    let value: number = 0;
    setInterval(() => {
      value++;
      this.subject$.next({value: value, Time: new Date()});
      if(value > 9) {
        this.subject$.complete();
      }
    }, 2000);
  }

  initBehaviorSubject() {
    this.behaviorSubject$ = new BehaviorSubject<Data>(null);
    this.behaviorSubjectObservable$ = this.behaviorSubject$.asObservable();
  }

  startBehaviorSubjectValue() {
    let value: number = 0;
    setInterval(() => {
      value++;
      this.behaviorSubject$.next({value: value, Time: new Date()});
      if(value > 9) {
        this.behaviorSubject$.complete();
      }
    }, 2000);
  }
}

export interface ICustomer {
  name: string;
  city: string;
}