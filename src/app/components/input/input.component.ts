import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinefeedService } from '../../providers/spinefeed.service';
import { ConfigService } from '../../providers/config.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  subscription: Subscription;
  path: string;
  isEmptyPath: boolean;
  loadingMessage = '';

  isLoading = false;

  constructor(private spinefeed: SpinefeedService, private config: ConfigService) {
    this.subscription = this.spinefeed.on('complete').subscribe(() => {
      this.isLoading = false;
      this.loadingMessage = '';
    });
  }

  ngOnInit() {}

  getLoadingMessage(): string {
    const index = Math.floor(Math.random() * 10) + 1;
    return this.config.messages.loadingMessages[index];
  }

  go() {

    if (!this.isLoading) {
      this.isLoading = true;

      this.loadingMessage = this.getLoadingMessage();

      const hasValue = this.path && this.path.length > 0;

      this.isEmptyPath = !hasValue;

      if (hasValue) {
        this.spinefeed.batch(this.path);
      }
    }
  }

}
