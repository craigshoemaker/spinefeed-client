import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showInvalidArticlesFilter'
})
export class InvalidArticlePipe implements PipeTransform {

  transform(articles?: any[]): any {
    if (articles) {
      return articles.filter(article => {
        return !article.data.allPassed;
      });
    } else {
      return [];
    }
  }

}
