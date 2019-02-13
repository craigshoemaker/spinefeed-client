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

  messages = {
    invalidArticleType: 'Invalid article type. Spinefeed only provides feedback for Quickstarts, Tutorials, and Overview articles.\n\nYou can change the article type by updating the "ms.topic" field in the article metadata.',
    loadingMessages: [
      'Contacting Houston and aligning satellites',
      'Herding a bale of turtles',
      'Corralling the crazy cats',
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
