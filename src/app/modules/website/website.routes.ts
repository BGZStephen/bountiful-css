import { Routes, RouterModule } from '@angular/router';
import { WebsiteViewComponent, WebsiteHomeComponent } from './components/website-components-barrel';

const WEBSITE_ROUTES: Routes = [
  {path: 'library', loadChildren: './modules/library/library.module#LibraryModule'},
  {path: '', component: WebsiteViewComponent, children: [
    {path: '', component: WebsiteHomeComponent},
  ]},
]

export const WebsiteRoutes = RouterModule.forChild(WEBSITE_ROUTES)
