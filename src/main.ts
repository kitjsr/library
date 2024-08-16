/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLicense  } from '@syncfusion/ej2-base';
registerLicense("ORg4AjUWIQA/Gnt2VFhiQlJPCEBDWXXLflF1VWpTe1Z6dVNWESFaRnZdQV11SXhSdEBjWX1XdHxX");

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
