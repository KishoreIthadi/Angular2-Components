import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id.replace('jscode', 'app'),
  templateUrl: 'ratingEx.component.html'
})
export class RatingExComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onRatingSelected(obj: any) {
  //  console.log(obj.selectedRating);
  //  console.log(obj.ratingID);
  }

}