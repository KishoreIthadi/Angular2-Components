import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id.replace('jscode', 'app'),
  selector: 'rating',
  templateUrl: 'rating.component.html',
  styleUrls: ['rating.component.css']
})

export class RatingComponent implements OnChanges {

  constructor() { }

  ngOnChanges() {
    this.SetRating(this.rating);
  }

  @Input("rating") rating: number = 0;
  @Input("starCount") starCount: number = 5;
  @Input("ratingID") ratingID: any;
  @Input("ratingcss") ratingcss: string;
  @Input("halfstarcss") halfstarcss: string;
  @Input("fullstarcss") fullstarcss: string;
  @Input("emptystarcss") emptystarcss: string;
  @Input("displayratingtext") displayratingtext: string = "true";
  @Input("disable") disable: string = "false";

  selectedRating: number;

  @Output() onRatingSelected = new EventEmitter<any>();

  ratingMouseLeave() {
    if (this.disable == 'false') {
      this.SetRating(this.rating);
    }
  }

  ratingMouseEnter(rating: number) {
    if (this.disable == 'false') {
      this.selectedRating = rating;
      this.SetRating(rating);
    }
  }

  ratingSelected() {
    if (this.disable == 'false') {
      this.onRatingSelected.emit({
        "selectedRating": this.selectedRating.toString(),
        "ratingID": this.ratingID.toString()
      });
    }
  }

  starCountArray: any;

  SetRating(rating: number) {

    let givenRatting = rating;
    this.starCountArray = Array(parseInt(this.starCount.toString()));

    let isOdd = false;

    if ((givenRatting % 1) > 0) {
      isOdd = true;
    }

    for (let i = 0; i < this.starCount; i++) {

      if (isOdd) {
        if (Math.ceil(givenRatting - 1) == i) {
          this.starCountArray[i] = 0.5;
          continue;
        }
      }

      if (i < givenRatting) {
        this.starCountArray[i] = 1;
      }
      else {
        this.starCountArray[i] = 0;
      }
    }

  }
}