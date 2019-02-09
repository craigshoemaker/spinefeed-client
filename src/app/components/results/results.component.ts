import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  subscription: Subscription;

  constructor() {}

  feedback = {
        total: 120,
        invalid: 98,
        valid: 22,
        articles: [{
          name: 'functions-api-definition.md',
          title: 'App settings reference for Azure Functions',
          results: `<h2 class="is-size-4">Validation Summary:</h2>
          <ul>
          <li>Total: 7, Passed: 0, Failed: 7</li>
          </ul>
          <h3 class="is-size-5">General</h3>
          <ul>
          <li>Total: 2, Passed: 0, Failed: 2</li>
          <li>Broken rules:
          <ul>
          <li>H1 title must immediately follow metadata</li>
          <li>Document must include metadata</li>
          </ul>
          </li>
          </ul>
          <h3 class="is-size-5">Quickstart</h3>
          <ul>
          <li>Total: 5, Passed: 0, Failed: 5</li>
          <li>Broken rules:
          <ul>
          <li>H1 format must be: "Quickstart: "</li>
          <li>Required section: "Clean up resources"</li>
          <li>Required section: "Next steps"</li>
          <li>Link to free Azure account must come before first H2</li>
          <li>"Clean up resouces" section must appear before "Next steps" section</li>
          </ul>
          </li>
          </ul>`
        },
          {
            name: 'functions-api-definition.md',
            title: 'OpenAPI 2.0 metadata support in Azure Functions (preview)',
            results: `<h2 class="is-size-4">Validation Summary:</h2>
            <ul>
            <li>Total: 7, Passed: 0, Failed: 7</li>
            </ul>
            <h3 class="is-size-5">General</h3>
            <ul>
            <li>Total: 2, Passed: 0, Failed: 2</li>
            <li>Broken rules:
            <ul>
            <li>H1 title must immediately follow metadata</li>
            <li>Document must include metadata</li>
            </ul>
            </li>
            </ul>
            <h3 class="is-size-5">Quickstart</h3>
            <ul>
            <li>Total: 5, Passed: 0, Failed: 5</li>
            <li>Broken rules:
            <ul>
            <li>H1 format must be: "Quickstart: "</li>
            <li>Required section: "Clean up resources"</li>
            <li>Required section: "Next steps"</li>
            <li>Link to free Azure account must come before first H2</li>
            <li>"Clean up resouces" section must appear before "Next steps" section</li>
            </ul>
            </li>
            </ul>`
          }
        ]
      };

  ngOnInit() {  }

}
