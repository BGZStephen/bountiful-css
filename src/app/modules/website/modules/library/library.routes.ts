import { Routes, RouterModule } from '@angular/router';
import { LibraryViewComponent, LibraryHomeComponent, LibraryGridComponent } from './components/library-components-barrel';

const LIBRARY_ROUTES: Routes = [
  {path: '', component: LibraryViewComponent, children: [
    {path: '', component: LibraryHomeComponent},
    {path: 'grid', component: LibraryGridComponent},
  ]},
]

export const LibraryRoutes = RouterModule.forChild(LIBRARY_ROUTES)
