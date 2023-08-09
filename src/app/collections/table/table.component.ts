import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() classNames = ''; 
  @Input() data: { name: string; age: number; job: string }[] = []; // Initialize with an empty array or actual data
  @Input() headers: { key: string; label: string }[] = []; // Initialize with an empty array or actual headers
   
  constructor() {}

  getProperty(record: any, key: string): any {
    return record[key];
  }
}

