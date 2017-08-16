import { Routes, RouterModule } from '@angular/router';
import { LibraryViewComponent, LibraryHomeComponent } from './components/library-components-barrel';

const LIBRARY_ROUTES: Routes = [
  {path: '', component: LibraryViewComponent, children: [
    {path: '', component: LibraryHomeComponent},
  ]},
]

export const LibraryRoutes = RouterModule.forChild(LIBRARY_ROUTES)
