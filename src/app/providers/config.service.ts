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
    invalidArticleType: 'Invalid article type. Spinefeed only provides feedback for Quickstarts, Tutorials, and Overview articles.\n\nYou can change the article type by updating the "ms.topic" field in the article metadata.'
  };

  constructor() { }
}
