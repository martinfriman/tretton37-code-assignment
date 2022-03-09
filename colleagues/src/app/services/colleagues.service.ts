import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Colleague } from '../models/colleague.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ColleaguesService {
  private _colleagueList = new BehaviorSubject<Colleague[]>([]);

  constructor(private apiService: ApiService) {
    this.apiService.getAllColleuges().subscribe((result) => {
      this.colleagueList = result;
    });
  }

  public get colleagueList() {
    return this._colleagueList.getValue();
  }

  public set colleagueList(value) {
    this._colleagueList.next(value);
  }
}
