import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  constructor() { }

  results = {
    total: 120,
    invalid: 98,
    valid: 22,
    results: [
      {
        name: 'functions-api-definition.md',
        title: 'OpenAPI 2.0 metadata support in Azure Functions (preview)',
        results: `## Validation Summary:
- Total: 7, Passed: 0, Failed: 7

### General
- Total: 2, Passed: 0, Failed: 2
- Broken rules:
* H1 title must immediately follow metadata
* Document must include metadata

### Quickstart
- Total: 5, Passed: 0, Failed: 5
- Broken rules:
* H1 format must be: "Quickstart: "
* Required section: "Clean up resources"
* Required section: "Next steps"
* Link to free Azure account must come before first H2
* "Clean up resouces" section must appear before "Next steps" section`
      },
      {
        name: 'functions-app-settings.md',
        title: 'App settings reference for Azure Functions',
        results: `## Validation Summary:
- Total: 7, Passed: 0, Failed: 7

### General
- Total: 2, Passed: 0, Failed: 2
- Broken rules:
* H1 title must immediately follow metadata
* Document must include metadata

### Quickstart
- Total: 5, Passed: 0, Failed: 5
- Broken rules:
* H1 format must be: "Quickstart: "
* Required section: "Clean up resources"
* Required section: "Next steps"
* Link to free Azure account must come before first H2
* "Clean up resouces" section must appear before "Next steps" section`
      }
    ]
  };

  ngOnInit() { }

}
