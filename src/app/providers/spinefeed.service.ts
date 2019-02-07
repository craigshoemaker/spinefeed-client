import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinefeedService {

  constructor() { }

  analyze(fileOrFolderPath: string) {
    alert(`from facade: ${fileOrFolderPath}`);
  }
}
