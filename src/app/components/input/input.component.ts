import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinefeedService } from '../../providers/spinefeed.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  subscription: Subscription;
  path: string;
  isEmptyPath: boolean;

  isLoading = false;

  constructor(private spinefeed: SpinefeedService) {
    this.subscription = this.spinefeed.getResults().subscribe(results => {
      this.isLoading = false;
    });
  }

  ngOnInit() {}

  go() {

    if (!this.isLoading) {
      this.isLoading = true;

      const hasValue = this.path && this.path.length > 0;

      this.isEmptyPath = !hasValue;

      if (hasValue) {
        this.spinefeed.batch(this.path);
      }
    }
  }

}
