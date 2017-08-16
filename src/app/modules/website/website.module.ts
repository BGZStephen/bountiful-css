import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routes
import { WebsiteRoutes } from './website.routes';

// modules
import { LibraryModule } from './modules/library/library.module';

// components
import { WebsiteViewComponent, WebsiteHomeComponent } from './components/website-components-barrel';

@NgModule({
  declarations: [
    WebsiteViewComponent,
    WebsiteHomeComponent
  ],
  imports: [
    BrowserModule,
    WebsiteRoutes,
    LibraryModule
  ],
  providers: [],
})
export class WebsiteModule { }
