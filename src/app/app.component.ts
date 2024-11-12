import { Component } from '@angular/core';
import { datadogLogs } from '@datadog/browser-logs';
import { datadogRum } from '@datadog/browser-rum';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){

  }
  initializedatadog(){
    datadogRum.init({
      applicationId: environment.datadog.applicationId,
      clientToken: environment.datadog.clientToken,
      site: environment.datadog.site,
      service: environment.datadog.service,
      env: 'production',
      version: '1.0.0',
      sessionSampleRate: 100,
      sessionReplaySampleRate: 100,
      trackResources: true,
      trackLongTasks: true,
      trackUserInteractions: true,
      })
  }


  addlogs(){
    datadogLogs.init({
      clientToken: environment.datadog.clientToken,
      site: environment.datadog.site,
      forwardErrorsToLogs: true,
      sessionSampleRate: 100,
      // service: environment.datadog.service,
      // sampleRate: 100,
    })
  }
}
