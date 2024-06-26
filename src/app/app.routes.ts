// import { Routes } from '@angular/router';

// export const routes: Routes = [];





import { Routes } from '@angular/router';
import { LeftContainerComponent } from './left-container/left-container.component';
import { RightContainerComponent } from './right-container/right-container.component';

export const routes: Routes = [
  { path: 'left', component: LeftContainerComponent },
  { path: 'right', component: RightContainerComponent },
  // Add other routes here
];
