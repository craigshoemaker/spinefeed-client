import { Injectable } from '@angular/core';
import * as fs from 'fs';
import * as path from 'path';
import * as glob from 'glob';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private appData: DataService) { }

  extractText(content: string, exp: any) {
      const matches = content.match(exp);
      let value = 'unknown';
      if (matches && matches.length > 1) {
          value = matches[1].trim();
      }
      return value;
  }

  get(rootFolderPath: string) {

    return new Promise((resolve, reject) => {

      rootFolderPath = path.normalize(rootFolderPath);

      // files is an array of filenames.
      // If the `nonull` option is set, and nothing
      // was found, then files is ["**/*.js"]
      // er is an error object or null.
      glob(`${rootFolderPath}/**/*.md`, (err, files) => {

        const fileContents = [];

        if (err) {
          reject(err);
        } else {
          files.forEach(file => {
            const contents = fs.readFileSync(file, 'utf8');

            const alias = this.extractText(contents, /ms\.author:\s(.+)/);
            const github = this.extractText(contents, /[^ms\.]author:\s(.+)/);
            const date = this.extractText(contents, /ms\.date:\s(.+)/);
            const msService = this.extractText(contents, /ms\.service:\s?(.+)/);
            const msSubService = this.extractText(contents, /ms\.subservice:\s(.+)/);
            const type = this.extractText(contents, /ms\.topic:\s(.+)/);
            const name = path.basename(file);

            const metadata = {
              key: file,
              alias: alias,
              github: github,
              date: date,
              type: type,
              name: name,
              service: msService,
              subservice: msSubService
            };

            this.appData.setMetadata(metadata);

            fileContents.push({
              filePath: file,
              content: contents
            });
          });

          resolve(fileContents);
        }
      });
    });
  }
}
