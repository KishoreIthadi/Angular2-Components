import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id.replace('jscode', 'app'),
  selector: 'pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.css']
})
export class PaginationComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    this.SetPaging(this.selectedpage);
  }

  @Input("pagesize") pagesize: number = 10;
  @Input("totalrecords") totalrecords: number;
  @Input("selectedpage") selectedpage: number = 1;
  @Input("pagescount") pagescount: number = 5;

  @Input("cssclass") cssclass: string;
  @Input("previousbtncss") previousbtncss: string;
  @Input("nextbtncss") nextbtncss: string;
  @Input("btncss") btncss: string;
  @Input("selectedcss") selectedcss: string;

  @Output() onPageChange = new EventEmitter<number>();

  pages: any;
  totalpages: number;

  pageChange(selectedpage: number) {
    this.SetPaging(selectedpage);
    this.onPageChange.emit(selectedpage);
  }

  SetPaging(selectedpage: number) {

    if (this.totalrecords == undefined || this.totalrecords <= 0) {
      console.warn("source is empty");
      return;
    }

    this.selectedpage = parseInt(selectedpage.toString());
    this.totalpages = Math.ceil(this.totalrecords / this.pagesize);

    if (this.selectedpage > this.totalpages) {
      console.error("selectedpage cannot be greater than the total pages");
    }

    let min = Math.ceil((selectedpage - (this.pagescount / 2)) > 0
      ? (selectedpage - (this.pagescount / 2))
      : 1);

    let max = (min + parseInt(this.pagescount.toString())) > this.totalpages
      ? this.totalpages
      : (min + parseInt(this.pagescount.toString())) - 1;

    for (let i = 0; i < this.pagescount; i++) {
      if (((max - min) < (this.pagescount - 1)) && min > 1) {
        min = (min - 1);
      }
    }

    this.pages = Array(max - min + 1)
      .fill(max - min + 1)
      .map((x, i) => min + i);
  }
}