import { Injectable } from '@angular/core';
import { FilesService } from './files.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinefeedService {

  private subject = new Subject<any>();

  constructor(private filesService: FilesService) { }

  getData() {
    return {
        total: 120,
        invalid: 98,
        valid: 22,
        articles: [
          {
            name: 'functions-api-definition.md',
            title: 'OpenAPI 2.0 metadata support in Azure Functions (preview)',
            results: `rezultz 1`
          },
          {
            name: 'functions-app-settings.md',
            title: 'App settings reference for Azure Functions',
            results: `rezultz 2`
          }
        ]
      };
  }

  getResults(): Observable<any> {
      return this.subject.asObservable();
  }

  async analyze(fileOrFolderPath: string) {
    try {
      const files = await this.filesService.get(fileOrFolderPath);

      const response = this.getData();
      this.subject.next(response);

    } catch (error) {
      debugger;
    }
  }
}
