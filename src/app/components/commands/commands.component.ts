import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinefeedService } from '../../providers/spinefeed.service';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss']
})
export class CommandsComponent implements OnInit {

  isVisible = false;

  subscription: Subscription;

  constructor(private spinefeed: SpinefeedService) {
    this.subscription = this.spinefeed.on('complete').subscribe(() => {
      this.isVisible = true;
    });
  }

  export() {
    alert('export');
  }

  ngOnInit() {  }

}
