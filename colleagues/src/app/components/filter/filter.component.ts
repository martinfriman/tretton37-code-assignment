import { Component, OnInit } from '@angular/core';
import { SortOrder } from 'src/app/enums/sort-order.enum';
import { ColleaguesService } from 'src/app/services/colleagues.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  eSortOrder = SortOrder;

  constructor(public colleaguesService: ColleaguesService) {}

  ngOnInit(): void {}

  onSortChange(order: SortOrder): void {
    this.colleaguesService.updateSortOrder(order);
  }

  onOfficeCheckboxChange(office: any, event: Event): void {
    this.colleaguesService.selectedOffices = this.getSelectedOffices(office,  (event.target as HTMLInputElement).checked);
    this.colleaguesService.updateColleagueListByFilter();
  }

  private getSelectedOffices(office: string, checked: boolean): string[] {
    return checked && !this.isSelected(office)
      ? [...this.colleaguesService.selectedOffices, ...[office]]
      : this.colleaguesService.selectedOffices.filter((o) => o !== office);
  }

  private isSelected(office: string) {
    return this.colleaguesService.selectedOffices.includes(office);
  }
}
