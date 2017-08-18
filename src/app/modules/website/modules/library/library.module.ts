import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// routes
import { LibraryRoutes } from './library.routes';

// components
import {
  LibraryViewComponent, LibraryHomeComponent, LibraryGridComponent, LibraryButtonsComponent, LibraryPanelsComponent
} from './components/library-components-barrel';

@NgModule({
  declarations: [
    LibraryViewComponent,
    LibraryHomeComponent,
    LibraryGridComponent,
    LibraryButtonsComponent,
    LibraryPanelsComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutes
  ],
  providers: [],
})
export class LibraryModule { }
