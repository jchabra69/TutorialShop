// src/app/app.config.ts

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import routeConfig from './routes';  // Importamos las rutas desde routes.ts

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routeConfig)]  // Proveemos el router con la configuración de rutas
};
