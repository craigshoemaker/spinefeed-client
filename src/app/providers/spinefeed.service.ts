import { Injectable } from '@angular/core';
import { FilesService } from './files.service';
import { Observable, Subject } from 'rxjs';
import { ConfigService } from './config.service';
import { DataService } from './data.service';
import * as fs from 'fs';

const axios = require('axios').default;

@Injectable({
  providedIn: 'root'
})
export class SpinefeedService {

  private dataSubject = new Subject<any>();
  private beginSubject = new Subject<any>();
  private completeSubject = new Subject<any>();

  constructor(private filesService: FilesService,
              private config: ConfigService,
              private appData: DataService) {

  }

  on(type: string): Observable<any> {

    if (/data/.test(type)) {
      return this.dataSubject.asObservable();
    } else if (/begin/.test(type)) {
      return this.beginSubject.asObservable();
    } else {
      return this.completeSubject.asObservable();
    }
  }

  export(filePath: string) {
    return new Promise((resolve, reject) => {
      const exportData = [];
      this.appData.get().articles.forEach(article => {
        article.data.details.forEach(section => {
          section.brokenRules.forEach(rule => {
            const metadata = this.appData.getMetadata(article.filePath);
            exportData.push(`${rule},${article.filePath},${metadata.name},${metadata.type},${metadata.alias},${metadata.github},${metadata.date},${metadata.service},${metadata.subservice}`);
          });
        });
      });

      fs.writeFile(filePath, exportData.join('\n'), 'utf8', (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  async batch(fileOrFolderPath: string) {
    try {
      this.beginSubject.next();

      const files = await this.filesService.get(fileOrFolderPath);
      const url = `${this.config.urls.batch()}?&output=html`;
      const requestConfig = {
        headers: { 'Content-Type': 'application/json' }
      };

      const response = await axios.post(url, JSON.stringify(files), requestConfig);
      this.appData.set(response.data.details);

      this.dataSubject.next();
      this.completeSubject.next();
    } catch (error) {
      debugger;
    }
  }
}
