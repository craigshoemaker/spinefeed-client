import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private values: any;

  get() {
    return this.values;
  }

  set(values) {
    this.values = values;
  }

  constructor() { }
}
