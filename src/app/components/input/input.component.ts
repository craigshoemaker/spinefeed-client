import { Component, OnInit } from '@angular/core';
import { SpinefeedService } from '../../providers/spinefeed.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  path: 'C:\\Users\\cshoe\\Documents\\data\\docs\\az-docs-pr\\articles\\azure-functions';
  isEmptyPath: boolean;

  constructor(private spinefeed: SpinefeedService) { }

  ngOnInit() {}

  go() {

    const hasValue = this.path && this.path.length > 0;

    this.isEmptyPath = !hasValue;

    if (hasValue) {
      this.spinefeed.batch(this.path);
    }

  }

}
