import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {

  data = [
    { name: 'James', age: 24, job: "Developer"},
    { name: 'Erind', age: 32, job: "Lead Data Engineer"},
    { name: 'Ardit', age: 36, job: "Business Manager"},
    { name: 'Marta', age: 31, job: "Biologist"}
  ];
  headers = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'}
  ];




}
