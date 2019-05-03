import { Injectable } from '@angular/core';

interface IMetadata {
  key: string;
  alias: string;
  github: string;
  date: string;
  type: string;
  name: string;
  service: string;
  subservice: string;
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
      name: data.name,
      service: data.service,
      subservice: data.subservice
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
