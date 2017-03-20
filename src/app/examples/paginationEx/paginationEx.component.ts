import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id.replace('jscode', 'app'),
  templateUrl: 'paginationEx.component.html'
})
export class PaginationExComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onPageChange(selectedPage: number) {
  }
}