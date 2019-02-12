import { Injectable } from '@angular/core';
import { FilesService } from './files.service';
import { Observable, Subject } from 'rxjs';
import { ConfigService } from './config.service';

const axios = require('axios').default;

@Injectable({
  providedIn: 'root'
})
export class SpinefeedService {

  private subject = new Subject<any>();

  constructor(private filesService: FilesService, private config: ConfigService) { }

  getResults(): Observable<any> {
      return this.subject.asObservable();
  }

  async batch(fileOrFolderPath: string) {
    try {
      const files = await this.filesService.get(fileOrFolderPath);
      const url = `${this.config.urls.batch()}?&output=html`;
      const requestConfig = {
        headers: { 'Content-Type': 'application/json' }
      };

      const response = await axios.post(url, JSON.stringify(files), requestConfig);
      this.subject.next(response.data.details);

    } catch (error) {
      debugger;
    }
  }
}
