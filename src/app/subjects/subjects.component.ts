import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';
import { SubjectService, Data } from '../subject.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit, OnDestroy {
  subjectSubscriber1: Subscription;
  subjectSubscriber2: Subscription;
  subjectSubscriber3: Subscription;
  subjectSubscriber4: Subscription;
  subjectSubscriber1TimeStamp: Date;
  subjectSubscriber2TimeStamp: Date;
  subjectSubscriber3TimeStamp: Date;
  subjectSubscriber4TimeStamp: Date;
  subjectSubscriber1Data: Data[] = [];
  subjectSubscriber2Data: Data[] = [];
  subjectSubscriber3Data: Data[] = [];
  subjectSubscriber4Data: Data[] = [];

  behaviorSubjectSubscriber1: Subscription;
  behaviorSubjectSubscriber2: Subscription;
  behaviorSubjectSubscriber3: Subscription;
  behaviorSubjectSubscriber4: Subscription;
  behaviorSubjectSubscriber1TimeStamp: Date;
  behaviorSubjectSubscriber2TimeStamp: Date;
  behaviorSubjectSubscriber3TimeStamp: Date;
  behaviorSubjectSubscriber4TimeStamp: Date;
  behaviorSubjectSubscriber1Data: Data[] = [];
  behaviorSubjectSubscriber2Data: Data[] = [];
  behaviorSubjectSubscriber3Data: Data[] = [];
  behaviorSubjectSubscriber4Data: Data[] = [];

  replaySubjectSubscriber1: Subscription;
  replaySubjectSubscriber2: Subscription;
  replaySubjectSubscriber3: Subscription;
  replaySubjectSubscriber4: Subscription;
  replaySubjectSubscriber1TimeStamp: Date;
  replaySubjectSubscriber2TimeStamp: Date;
  replaySubjectSubscriber3TimeStamp: Date;
  replaySubjectSubscriber4TimeStamp: Date;
  replaySubjectSubscriber1Data: Data[] = [];
  replaySubjectSubscriber2Data: Data[] = [];
  replaySubjectSubscriber3Data: Data[] = [];
  replaySubjectSubscriber4Data: Data[] = [];

  asyncSubjectSubscriber1: Subscription;
  asyncSubjectSubscriber2: Subscription;
  asyncSubjectSubscriber3: Subscription;
  asyncSubjectSubscriber4: Subscription;
  asyncSubjectSubscriber1TimeStamp: Date;
  asyncSubjectSubscriber2TimeStamp: Date;
  asyncSubjectSubscriber3TimeStamp: Date;
  asyncSubjectSubscriber4TimeStamp: Date;
  asyncSubjectSubscriber1Data: Data[] = [];
  asyncSubjectSubscriber2Data: Data[] = [];
  asyncSubjectSubscriber3Data: Data[] = [];
  asyncSubjectSubscriber4Data: Data[] = [];

  subsink = new SubSink();

  constructor(private subjectService: SubjectService) { }

  ngOnInit() { }


  startSubject(): void {
    this.subjectService.initSubject();
    this.runSubjectSubscriber1();
    this.subjectService.startSubjectValue();
    this.runSubjectSubscriber2();
    this.runSubjectSubscriber3();
    this.runSubjectSubscriber4();
    this.subsink.add(this.subjectSubscriber1);
    this.subsink.add(this.subjectSubscriber2);
    this.subsink.add(this.subjectSubscriber3);
    this.subsink.add(this.subjectSubscriber4);
  }

  startBehaviorSubject(): void {
    this.subjectService.initBehaviorSubject();
    this.runBehaiorSubjectSubscriber1();
    this.subjectService.startBehaviorSubjectValue();
    this.runBehaiorSubjectSubscriber2();
    this.runBehaiorSubjectSubscriber3();
    this.runBehaiorSubjectSubscriber4();
    this.subsink.add(this.behaviorSubjectSubscriber1);
    this.subsink.add(this.behaviorSubjectSubscriber2);
    this.subsink.add(this.behaviorSubjectSubscriber3);
    this.subsink.add(this.behaviorSubjectSubscriber4);
  }

  startReplaySubject(): void {
    this.subjectService.initReplaySubject();
    this.runReplaySubjectSubscriber1();
    this.subjectService.startReplaySubjectValue();
    this.runReplaySubjectSubscriber2();
    this.runReplaySubjectSubscriber3();
    this.runReplaySubjectSubscriber4();
    this.subsink.add(this.replaySubjectSubscriber1);
    this.subsink.add(this.replaySubjectSubscriber2);
    this.subsink.add(this.replaySubjectSubscriber3);
    this.subsink.add(this.replaySubjectSubscriber4);
  }

  startAsyncSubject(): void {
    this.subjectService.initAsyncSubject();
    this.runAsyncSubjectSubscriber1();
    this.subjectService.startAsyncSubjectValue();
    this.runAsyncSubjectSubscriber2();
    this.runAsyncSubjectSubscriber3();
    this.runAsyncSubjectSubscriber4();
    this.subsink.add(this.asyncSubjectSubscriber1);
    this.subsink.add(this.asyncSubjectSubscriber2);
    this.subsink.add(this.asyncSubjectSubscriber3);
    this.subsink.add(this.asyncSubjectSubscriber4);
  }

  private runSubjectSubscriber1(): void {
    this.subjectSubscriber1TimeStamp = new Date();
    this.subjectSubscriber1 = this.subjectService.subjectObservable$.subscribe(value => {
      this.subjectSubscriber1Data.push(value);
    });
  }

  private runSubjectSubscriber2(): void {
    setTimeout(() => {
      this.subjectSubscriber2TimeStamp = new Date();
      this.subjectSubscriber2 = this.subjectService.subjectObservable$.subscribe(value => {
        this.subjectSubscriber2Data.push(value);
      });
    }, 10000);
  }

  private runSubjectSubscriber3(): void {
    setTimeout(() => {
      this.subjectSubscriber3TimeStamp = new Date();
      this.subjectSubscriber3 = this.subjectService.subjectObservable$.subscribe(value => {
        this.subjectSubscriber3Data.push(value);
      });
    }, 20000);
  }

  private runSubjectSubscriber4(): void {
    setTimeout(() => {
      this.subjectSubscriber4TimeStamp = new Date();
      this.subjectSubscriber4 = this.subjectService.subjectObservable$.subscribe(value => {
        this.subjectSubscriber4Data.push(value);
      });
    }, 30000);
  }

  private runBehaiorSubjectSubscriber1(): void {
    this.behaviorSubjectSubscriber1TimeStamp = new Date();
    this.behaviorSubjectSubscriber1 = this.subjectService.behaviorSubjectObservable$.subscribe(value => {
      this.behaviorSubjectSubscriber1Data.push(value);
    });
  }

  private runBehaiorSubjectSubscriber2(): void {
    setTimeout(() => {
      this.behaviorSubjectSubscriber2TimeStamp = new Date();
      this.behaviorSubjectSubscriber2 = this.subjectService.behaviorSubjectObservable$.subscribe(value => {
        this.behaviorSubjectSubscriber2Data.push(value);
      });
    }, 10000);
  }

  private runBehaiorSubjectSubscriber3(): void {
    setTimeout(() => {
      this.behaviorSubjectSubscriber3TimeStamp = new Date();
      this.behaviorSubjectSubscriber3 = this.subjectService.behaviorSubjectObservable$.subscribe(value => {
        this.behaviorSubjectSubscriber3Data.push(value);
      });
    }, 20000);
  }

  private runBehaiorSubjectSubscriber4(): void {
    setTimeout(() => {
      this.behaviorSubjectSubscriber4TimeStamp = new Date();
      this.behaviorSubjectSubscriber4 = this.subjectService.behaviorSubjectObservable$.subscribe(value => {
        this.behaviorSubjectSubscriber4Data.push(value);
      });
    }, 30000);
  }

  private runReplaySubjectSubscriber1(): void {
    this.replaySubjectSubscriber1TimeStamp = new Date();
    this.replaySubjectSubscriber1 = this.subjectService.replaySubjectObservable$.subscribe(value => {
      this.replaySubjectSubscriber1Data.push(value);
    });
  }

  private runReplaySubjectSubscriber2(): void {
    setTimeout(() => {
      this.replaySubjectSubscriber2TimeStamp = new Date();
      this.replaySubjectSubscriber2 = this.subjectService.replaySubjectObservable$.subscribe(value => {
        this.replaySubjectSubscriber2Data.push(value);
      });
    }, 10000);
  }

  private runReplaySubjectSubscriber3(): void {
    setTimeout(() => {
      this.replaySubjectSubscriber3TimeStamp = new Date();
      this.replaySubjectSubscriber3 = this.subjectService.replaySubjectObservable$.subscribe(value => {
        this.replaySubjectSubscriber3Data.push(value);
      });
    }, 20000);
  }

  private runReplaySubjectSubscriber4(): void {
    setTimeout(() => {
      this.replaySubjectSubscriber4TimeStamp = new Date();
      this.replaySubjectSubscriber4 = this.subjectService.replaySubjectObservable$.subscribe(value => {
        this.replaySubjectSubscriber4Data.push(value);
      });
    }, 30000);
  }

  private runAsyncSubjectSubscriber1(): void {
    this.asyncSubjectSubscriber1TimeStamp = new Date();
    this.asyncSubjectSubscriber1 = this.subjectService.asyncSubjectObservable$.subscribe(value => {
      this.asyncSubjectSubscriber1Data.push(value);
    });
  }

  private runAsyncSubjectSubscriber2(): void {
    setTimeout(() => {
      this.asyncSubjectSubscriber2TimeStamp = new Date();
      this.asyncSubjectSubscriber2 = this.subjectService.asyncSubjectObservable$.subscribe(value => {
        this.asyncSubjectSubscriber2Data.push(value);
      });
    }, 10000);
  }

  private runAsyncSubjectSubscriber3(): void {
    setTimeout(() => {
      this.asyncSubjectSubscriber3TimeStamp = new Date();
      this.asyncSubjectSubscriber3 = this.subjectService.asyncSubjectObservable$.subscribe(value => {
        this.asyncSubjectSubscriber3Data.push(value);
      });
    }, 20000);
  }

  private runAsyncSubjectSubscriber4(): void {
    setTimeout(() => {
      this.asyncSubjectSubscriber4TimeStamp = new Date();
      this.asyncSubjectSubscriber4 = this.subjectService.asyncSubjectObservable$.subscribe(value => {
        this.asyncSubjectSubscriber4Data.push(value);
      });
    }, 30000);
  }

  // runAction(actionText: string, actionType: ActionType, delay: number) {
  //   let action: () => void;
  //   switch (actionType) {
  //     case ActionType.subject:
  //       action = () => {
  //         this.subsink.sink = this.subjectService.subjectObservable$.subscribe(items => {
  //           this.subjectObservableData.push(items);
  //         })
  //       };
  //       break;

  //     case ActionType.behaviorSubject:
  //       action = () => {
  //         this.subsink.sink = this.subjectService.behaviorSubjectObservable$.subscribe(items => {
  //           this.behaviorSubjectObservableData.push(items);
  //         })
  //       };
  //       break;

  //     case ActionType.replaySubject:
  //       action = () => {
  //         this.subsink.sink = this.subjectService.replaySubjectObservable$.subscribe(items => {
  //           this.replaySubjectObservableData.push(items);
  //         })
  //       };
  //       break;

  //     case ActionType.asyncSubject:
  //       action = () => {
  //         this.subsink.sink = this.subjectService.asyncSubjectObservable$.subscribe(items => {
  //           this.asyncSubjectObservableData.push(items);
  //         })
  //       };
  //       break;
  //   }

  //   let timeoutId = setTimeout(() => {
  //     this.status = actionText;
  //     if (action) {
  //       console.log('in')
  //       action();
  //     }
  //   }, (delay) ? delay : 0);
  //   this.timeoutIds.push(timeoutId);
  // }

  ngOnDestroy() {
    this.subsink.unsubscribe();
  }

}

enum ActionType {
  subject,
  behaviorSubject,
  replaySubject,
  asyncSubject
}
