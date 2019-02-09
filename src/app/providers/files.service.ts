import { Injectable } from '@angular/core';
import * as fs from 'fs';
import * as path from 'path';
import * as glob from 'glob';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor() { }

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
            fileContents.push(contents);
          });

          resolve(fileContents);
        }
      });
    });
  }
}
