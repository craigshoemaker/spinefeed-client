import { Component, OnInit, Input } from '@angular/core';
import * as path from 'path';
import { debugOutputAstAsTypeScript } from '@angular/compiler';

const ipcRenderer = require('electron').ipcRenderer;

@Component({
  selector: 'app-article-result',
  templateUrl: './article-result.component.html',
  styleUrls: ['./article-result.component.scss']
})
export class ArticleResultComponent implements OnInit {

  @Input() article: any;
  @Input() root: string;

  isToolsVisible = false;
  isDetailsVisible = false;

  constructor() {}

  toggleDetails() {
    this.isDetailsVisible = !this.isDetailsVisible;
  }

  toggleTools() {
    this.isToolsVisible = !this.isToolsVisible;
  }

  open(e, name) {
    const filePathAndName = path.join(this.root, name);
    ipcRenderer.send('open-file', filePathAndName);
    e.stopPropagation();
  }

  ngOnInit() {  }

}