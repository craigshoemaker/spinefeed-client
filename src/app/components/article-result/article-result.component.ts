import { Component, OnInit, Input } from '@angular/core';
import * as path from 'path';
import { DataService } from '../../providers/data.service';

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
  isFresh = true;

  constructor(private appData: DataService) {}

  checkFreshness(date): boolean {
    const now = new Date();
    const docDate = new Date(date);
    const diff = Math.abs(docDate.getTime() - now.getTime());
    const days = Math.ceil(diff / (1000 * 3600 * 24));
    return days <= 90;
  }

  getFileName(filePath) {
    return path.basename(filePath);
  }

  getDate(filePath) {
    const date = this.appData.getMetadata(filePath).date;
    this.isFresh = this.checkFreshness(date);
    return date;
  }

  toggleDetails() {
    this.isDetailsVisible = !this.isDetailsVisible;
  }

  toggleTools() {
    this.isToolsVisible = !this.isToolsVisible;
  }

  open(e, filePath) {
    ipcRenderer.send('open-file', filePath);
    e.stopPropagation();
  }

  formatHTML(html) {
    return html
            .replace(/\<h3/g, '<h3 class="is-size-6"') // <- hack find a way to remove with CSS
            .replace(/ id=\".*\"/g, '')
            .replace(/\<service\>/ig, '&lt;service&gt;')
          ;
  }

  ngOnInit() {  }

}
