import { Injectable } from '@angular/core';

// const SERVER_LOCATION = 'http://localhost:7071';
const SERVER_LOCATION = 'https://spinefeed.azurewebsites.net';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  urls = {
    batch: () => `${SERVER_LOCATION}/api/batch`,
    article: () => `${SERVER_LOCATION}/api/article`
  };

  storageKeys = {
    path: 'spinefeed.client.path'
  };

  messages = {
    loadingMessages: [
      'Contacting Houston and aligning satellites',
      'Herding a bale of turtles',
      'Corralling a company of crazy cats',
      'Aligning electrons in an orderly fashion',
      'Opening a portal to the other side',
      'Jumping to lightspeed',
      'Crawling through the wormhole',
      'Making all your base are belong to us',
      'Igniting the Spinefeed thrusters',
      'Working to not throw away my shot'
    ]
  };

  constructor() { }
}
