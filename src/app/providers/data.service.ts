import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private values: any;
  private metadata = {};

  setMetadata(key, alias, github, date, type, name) {
    this.metadata[key] = {
      alias: alias,
      github: github,
      date: date,
      type: type,
      name: name
    };
  }

  getMetadata(key) {
    return this.metadata[key];
  }

  get(): any {
    return this.values;
  }

  set(values: any) {
    this.values = values;
  }

  constructor() { }
}
