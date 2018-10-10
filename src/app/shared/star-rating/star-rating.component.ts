import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
@Input() rating: number;
starWidth: number;
@Output() notify: EventEmitter<string> = 
new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.notify.emit('clicked');
  }

}
