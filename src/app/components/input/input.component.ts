import { Component, OnInit } from '@angular/core';
import { SpinefeedService } from '../../providers/spinefeed.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  path: string;

  isEmptyPath: boolean;

  constructor(private spinefeed: SpinefeedService) { }

  ngOnInit() {}

  go() {

    const hasValue = this.path && this.path.length > 0;

    this.isEmptyPath = !hasValue;

    if (hasValue) {
      this.spinefeed.analyze(this.path);
    }

  }

}
