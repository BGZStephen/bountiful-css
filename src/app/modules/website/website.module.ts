import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routes
import { WebsiteRoutes } from './website.routes';

// components
import { WebsiteViewComponent, WebsiteHomeComponent } from './components/website-components-barrel';

@NgModule({
  declarations: [
    WebsiteViewComponent, 
    WebsiteHomeComponent
  ],
  imports: [
    BrowserModule,
    WebsiteRoutes
  ],
  providers: [],
})
export class WebsiteModule { }
