import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../providers/articles.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  path: string;

  isEmptyPath: boolean;

  constructor(private articles: ArticlesService) { }

  ngOnInit() {}

  go() {

    const hasValue = this.path && this.path.length > 0;

    this.isEmptyPath = !hasValue;

    if (hasValue) {
      this.articles.analyze(this.path);
    }

  }

}
