import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

export type AlertType = 'success' | 'warning' | 'danger';

export interface Alert {
  type: string;
  text: string;
}

@Injectable()
export class AlertService {
  public alert$ = new Subject<Alert>();

  success(text: string) {
    this.alert$.next({ type: 'success', text });
  }
  warning(text: string) {
    this.alert$.next({ type: 'warning', text });
  }
  danger(text: string) {
    this.alert$.next({ type: 'danger', text });
  }
}
