import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinefeedService } from '../../providers/spinefeed.service';
import { ConfigService } from '../../providers/config.service';
import { LocalStorageService } from '../../providers/local-storage.service';

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

  constructor(private spinefeed: SpinefeedService, private config: ConfigService, private storage: LocalStorageService) {
    this.subscription = this.spinefeed.on('complete').subscribe(() => {
      this.isLoading = false;
      this.loadingMessage = '';
    });
  }

  ngOnInit() {
    if (this.storage.exists(this.config.storageKeys.path)) {
      this.path = this.storage.get(this.config.storageKeys.path);
    }
  }

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
        this.storage.set(this.config.storageKeys.path, this.path);
        this.spinefeed.batch(this.path);
      }
    }
  }

}
