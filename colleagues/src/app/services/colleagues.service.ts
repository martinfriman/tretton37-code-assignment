import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SortOrder } from '../enums/sort-order.enum';
import { Colleague } from '../models/colleague.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ColleaguesService {
  private _colleagueList = new BehaviorSubject<Colleague[]>([]);
  private _offices = new BehaviorSubject<string[]>([]);

  private _nameSearchText = new BehaviorSubject<string>('');
  private _selectedOffices = new BehaviorSubject<string[]>([]);
  private _selectedSortOrder = new BehaviorSubject<SortOrder>(SortOrder.Name);

  private _allColleagues: Colleague[];

  constructor(private apiService: ApiService) {
    this.apiService.getAllColleuges().subscribe((result) => this.onColleaguesLoaded(result));
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

  public get nameSearchText() {
    return this._nameSearchText.getValue();
  }

  public set nameSearchText(value) {
    this._nameSearchText.next(value);
  }

  public get selectedOffices() {
    return this._selectedOffices.getValue();
  }

  public set selectedOffices(value) {
    this._selectedOffices.next(value);
  }
  public get selectedSortOrder() {
    return this._selectedSortOrder.getValue();
  }

  public set selectedSortOrder(value) {
    this._selectedSortOrder.next(value);
  }

  public updateSortOrder(order: SortOrder): void {
    this.selectedSortOrder = order;
    switch (this.selectedSortOrder) {
      case SortOrder.Name:
        this.colleagueList = [...this.colleagueList].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case SortOrder.Office:
        this.colleagueList = [...this.colleagueList].sort((a, b) => a.office.localeCompare(b.office));
        break;
    }
  }

  public updateColleagueListByFilter() {
    this.colleagueList = this.nameSearchText
      ? this._allColleagues.filter((c) => this.isNameInSearchText(c.name, this.nameSearchText))
      : this._allColleagues;
    this.colleagueList = this.colleagueList.filter((c) => this.selectedOffices.includes(c.office));
  }

  private onColleaguesLoaded(colleagues: Colleague[]): void {
    this._allColleagues = colleagues;
    this.updateOffices(colleagues);
    this.updateColleagueListByFilter();
  }

  private updateOffices(colleagues: Colleague[]) {
    this.offices = this.getOfficesFromColleagueList(colleagues);
    this.selectedOffices = this.offices;
  }

  private isNameInSearchText(name: string, searchText: string) {
    if (searchText.indexOf('*') > -1) {
      return this.getNameByWildcard(name, searchText);
    }

    return this.getNameByStartMatch(name, searchText);
  }

  private getNameByStartMatch(name: string, searchText: string) {
    const allNames = name
      .toLowerCase()
      .split(' ')
      .map((n) => n.toLowerCase());
    return allNames.find((n) => n.substring(0, searchText.length).indexOf(searchText.toLowerCase()) > -1) !== undefined;
  }

  private getNameByWildcard(name: string, searchText: string) {
    searchText = searchText.replace('*', '[\\w\\s]+');
    const pattern = new RegExp(searchText, 'gi');
    return pattern.test(name);
  }

  private getOfficesFromColleagueList(colleagueList: Colleague[]) {
    return [...new Set(colleagueList.map((c) => c.office?.replace(/\s+$/, '')))].filter((c) => c).sort();
  }
}
