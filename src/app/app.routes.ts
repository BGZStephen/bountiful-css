import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
  {path: '', loadChildren: './modules/website/website.module#WebsiteModule'},
]

export const AppRoutes = RouterModule.forRoot(APP_ROUTES)
