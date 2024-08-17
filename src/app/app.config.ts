import { provideRouter, Router } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

export const appConfig = [
  provideRouter([]),  // Define your routes here if any
  provideAnimations(),
  RouterModule,
  MatToolbarModule,
  MatCardModule
];
