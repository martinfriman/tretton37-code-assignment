import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Colleague } from '../models/colleague.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ColleaguesService {
  private _colleagueList = new BehaviorSubject<Colleague[]>([]);
  private _offices = new BehaviorSubject<string[]>([]);

  constructor(private apiService: ApiService) {
    this.apiService.getAllColleuges().subscribe((result) => {
      this.colleagueList = result;
      this.offices = this.getOfficesFromColleagueList(this.colleagueList);
    });
  }

  public get colleagueList() {
    return this._colleagueList.getValue();
  }

  public set colleagueList(value) {
    this._colleagueList.next(value);
  }
  public get offices() {
    return this._offices.getValue();
  }

  public set offices(value) {
    this._offices.next(value);
  }

  private getOfficesFromColleagueList(colleagueList: Colleague[]) {

    return [...new Set(colleagueList.map(c => c.office?.replace(/\s+$/, '')))].sort();

  }

}
