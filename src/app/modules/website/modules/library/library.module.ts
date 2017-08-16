import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routes
import { LibraryRoutes } from './library.routes';

// components
import { LibraryViewComponent, LibraryHomeComponent } from './components/library-components-barrel';

@NgModule({
  declarations: [
    LibraryViewComponent,
    LibraryHomeComponent
  ],
  imports: [
    BrowserModule,
    LibraryRoutes
  ],
  providers: [],
})
export class LibraryModule { }
