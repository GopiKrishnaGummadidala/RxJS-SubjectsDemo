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
  subjectSubscriber1Data: Data;
  subjectSubscriber2Data: Data;
  subjectSubscriber3Data: Data;
  subjectSubscriber4Data: Data;

  behaviorSubjectSubscriber1: Subscription;
  behaviorSubjectSubscriber2: Subscription;
  behaviorSubjectSubscriber3: Subscription;
  behaviorSubjectSubscriber4: Subscription;
  behaviorSubjectSubscriber1TimeStamp: Date;
  behaviorSubjectSubscriber2TimeStamp: Date;
  behaviorSubjectSubscriber3TimeStamp: Date;
  behaviorSubjectSubscriber4TimeStamp: Date;
  behaviorSubjectSubscriber1Data: Data;
  behaviorSubjectSubscriber2Data: Data;
  behaviorSubjectSubscriber3Data: Data;
  behaviorSubjectSubscriber4Data: Data;

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
    
  }

  startAsyncSubject(): void {
    
  }

  private runSubjectSubscriber1(): void {
    this.subjectSubscriber1TimeStamp = new Date();
    this.subjectSubscriber1 = this.subjectService.subjectObservable$.subscribe(value => {
      this.subjectSubscriber1Data = value;
    });
  }

  private runSubjectSubscriber2(): void {
    setTimeout(() => {
      this.subjectSubscriber2TimeStamp = new Date();
      this.subjectSubscriber2 = this.subjectService.subjectObservable$.subscribe(value => {
        this.subjectSubscriber2Data = value;
      });
    }, 10000);
  }

  private runSubjectSubscriber3(): void {
    setTimeout(() => {
      this.subjectSubscriber3TimeStamp = new Date();
      this.subjectSubscriber3 = this.subjectService.subjectObservable$.subscribe(value => {
        this.subjectSubscriber3Data = value;
      });
    }, 20000);
  }

  private runSubjectSubscriber4(): void {
    setTimeout(() => {
      this.subjectSubscriber4TimeStamp = new Date();
      this.subjectSubscriber4 = this.subjectService.subjectObservable$.subscribe(value => {
        this.subjectSubscriber4Data = value;
      });
    }, 30000);
  }

  private runBehaiorSubjectSubscriber1(): void {
    this.behaviorSubjectSubscriber1TimeStamp = new Date();
    this.behaviorSubjectSubscriber1 = this.subjectService.behaviorSubjectObservable$.subscribe(value => {
      this.behaviorSubjectSubscriber1Data = value;
    });
  }

  private runBehaiorSubjectSubscriber2(): void {
    setTimeout(() => {
      this.behaviorSubjectSubscriber2TimeStamp = new Date();
      this.behaviorSubjectSubscriber2 = this.subjectService.behaviorSubjectObservable$.subscribe(value => {
        this.behaviorSubjectSubscriber2Data = value;
      });
    }, 10000);
  }

  private runBehaiorSubjectSubscriber3(): void {
    setTimeout(() => {
      this.behaviorSubjectSubscriber3TimeStamp = new Date();
      this.behaviorSubjectSubscriber3 = this.subjectService.behaviorSubjectObservable$.subscribe(value => {
        this.behaviorSubjectSubscriber3Data = value;
      });
    }, 20000);
  }

  private runBehaiorSubjectSubscriber4(): void {
    setTimeout(() => {
      this.behaviorSubjectSubscriber4TimeStamp = new Date();
      this.behaviorSubjectSubscriber4 = this.subjectService.behaviorSubjectObservable$.subscribe(value => {
        this.behaviorSubjectSubscriber4Data = value;
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
