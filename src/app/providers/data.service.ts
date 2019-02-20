import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

interface IMetadata {
  key: string;
  alias: string;
  github: string;
  date: string;
  type: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private values: any;
  private metadata = {};

  setMetadata(data: IMetadata) {
    this.metadata[data.key] = {
      alias: data.alias,
      github: data.github,
      date: data.date,
      type: data.type,
      name: data.name
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
