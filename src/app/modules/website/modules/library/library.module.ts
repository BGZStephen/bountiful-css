import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// routes
import { LibraryRoutes } from './library.routes';

// components
import { LibraryViewComponent, LibraryHomeComponent, LibraryGridComponent } from './components/library-components-barrel';

@NgModule({
  declarations: [
    LibraryViewComponent,
    LibraryHomeComponent,
    LibraryGridComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutes
  ],
  providers: [],
})
export class LibraryModule { }
