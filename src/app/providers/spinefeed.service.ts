import { Injectable } from '@angular/core';
import { FilesService } from './files.service';
import { Observable, Subject } from 'rxjs';
import { ConfigService } from './config.service';

const axios = require('axios').default;

@Injectable({
  providedIn: 'root'
})
export class SpinefeedService {

  private dataSubject = new Subject<any>();
  private beginSubject = new Subject<any>();
  private completeSubject = new Subject<any>();

  constructor(private filesService: FilesService, private config: ConfigService) { }

  on(type: string): Observable<any> {

    if (/data/.test(type)) {
      return this.dataSubject.asObservable();
    } else if (/begin/.test(type)) {
      return this.beginSubject.asObservable();
    } else {
      return this.completeSubject.asObservable();
    }
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
      this.dataSubject.next(response.data.details);
      this.completeSubject.next();

    } catch (error) {
      debugger;
    }
  }
}
