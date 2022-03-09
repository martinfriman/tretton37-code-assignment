import { Component, OnInit } from '@angular/core';
import { SortOrder } from 'src/app/enums/sort-order.enum';
import { Colleague } from 'src/app/models/colleague.model';
import { ColleaguesService } from 'src/app/services/colleagues.service';

@Component({
  selector: 'app-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit {

  eSortOrder = SortOrder;

  colleagueList: Colleague[] = [];

  private renderedOffices: string[] = [];

  constructor(public colleaguesService: ColleaguesService) { }

  ngOnInit(): void {
    
  }

  isNewFirstChar(index:number):boolean {
    if(index === 0 || this.colleaguesService.colleagueList[index].name.substring(0,1) !== this.colleaguesService.colleagueList[index-1].name.substring(0,1)) {
      return true;
    }

    return false;
  }

  isNewOffice(index: number) :boolean {

    if(index === 0 || this.colleaguesService.colleagueList[index].office !== this.colleaguesService.colleagueList[index-1].office) {
      return true;
    }

    return false;


  }

}
