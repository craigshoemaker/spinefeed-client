import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  exists(key) {
    return localStorage[key];
  }

  get(key) {
    return localStorage[key];
  }

  set(key, value) {
    localStorage[key] = value;
  }
}
