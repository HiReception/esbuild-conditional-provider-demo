import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { OptionOneService } from './option-one.service';
import { OptionThreeService } from './option-three.service';
import { OptionTwoService } from './option-two.service';

function setService(): any {
  if (environment.service === "one") return OptionOneService;
  if (environment.service === "two") return OptionTwoService;
  return OptionThreeService;
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    { provide: OptionOneService, useClass: setService()},
  ]
};
