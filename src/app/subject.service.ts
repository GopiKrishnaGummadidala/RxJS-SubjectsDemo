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

  private replaySubject$: ReplaySubject<Data>;
  replaySubjectObservable$: Observable<Data>;

  private asyncSubject$: AsyncSubject<Data>;
  asyncSubjectObservable$: Observable<Data>;

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
      if(value > 7) {
        this.subject$.complete();
      }
    }, 3000);
  }

  initBehaviorSubject() {
    this.behaviorSubject$ = new BehaviorSubject<Data>(null);
    this.behaviorSubjectObservable$ = this.behaviorSubject$.asObservable();
  }

  startBehaviorSubjectValue() {
    let value: number = 0;
    var setIntervalId = setInterval(() => {
      value++;
      this.behaviorSubject$.next({value: value, Time: new Date()});
      if(value > 7) {
        this.behaviorSubject$.complete();
        clearInterval(setIntervalId);
      }
    }, 3000);
  }

  initReplaySubject() {
    this.replaySubject$ = new ReplaySubject(3);
    this.replaySubjectObservable$ = this.replaySubject$.asObservable();
  }

  startReplaySubjectValue() {
    let value: number = 0;
    var setIntervalId = setInterval(() => {
      value++;
      this.replaySubject$.next({value: value, Time: new Date()});
      if(value > 7) {
        clearInterval(setIntervalId);
        this.replaySubject$.complete();
      }
    }, 3000);
  }

  initAsyncSubject() {
    this.asyncSubject$ = new AsyncSubject();
    this.asyncSubjectObservable$ = this.asyncSubject$.asObservable();
  }

  startAsyncSubjectValue() {
    let value: number = 0;
    var setIntervalId = setInterval(() => {
      value++;
      this.asyncSubject$.next({value: value, Time: new Date()});
      if(value > 7) {
        clearInterval(setIntervalId);
        this.asyncSubject$.complete();
      }
    }, 3000);
  }
}
