import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';
import { ArticlesService } from './providers/articles.service';
import { FilesService } from './providers/files.service';
import { SpinefeedService } from './providers/spinefeed.service';
import { ConfigService } from './providers/config.service';
import { LocalStorageService } from './providers/local-storage.service';
import { DataService } from './providers/data.service';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InputComponent } from './components/input/input.component';
import { StatsComponent } from './components/stats/stats.component';
import { ResultsComponent } from './components/results/results.component';
import { ArticleResultComponent } from './components/article-result/article-result.component';
import { CommandsComponent } from './components/commands/commands.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebviewDirective,
    InputComponent,
    StatsComponent,
    ResultsComponent,
    ArticleResultComponent,
    CommandsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    ArticlesService,
    ConfigService,
    DataService,
    ElectronService,
    SpinefeedService,
    FilesService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
